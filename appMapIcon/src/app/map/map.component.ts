import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { control, LatLng, layerGroup, LayerGroup, Map } from 'leaflet';
import { DropSvgComponent } from './drop-svg/drop-svg.component';
import { IconSvg } from '../shared/models/icon';
import { PickupComponent } from './pickup/pickup.component';
import { getRandomColors } from '../shared/func/randoms';
import { getRandomInternalIcon } from '../shared/func/randoms';
import { WIDTH_MAX_ICON_BODY, WIDTH_MAX_ICON_FOOTER } from '../shared/constants/other';
import { TilerService } from './tiler.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  private map: Map;
  public icon: IconSvg = {
    showFooter: true,
    colorFillCircle: 'red',
    colorFillInternal: 'blue',
    colorFooter: 'green',
    colorInternal: 'yellow',
    colorStrokeCircle: 'black',
    internalIcon: 'food',
    widthCircle: 2,
    widthFooter: 3,
  };
  @ViewChild('map', { static: true }) public myMap: ElementRef;
  @ViewChild(DropSvgComponent, { static: false }) public dropSvgComponent: DropSvgComponent;
  @ViewChild(PickupComponent, { static: false }) public pickupComponent: PickupComponent;

  public iconsCount: number = 10;

  constructor(private tilerService: TilerService) {}

  private initMap(): void {
    this.map = L.map(this.myMap.nativeElement as HTMLElement, {
      center: [53.148215, 29.230055],
      zoom: 15,
    });
    L.control.scale().addTo(this.map);
  }

  private getRandomIcon(): L.Icon {
    let svg: string;
    switch (Math.round(Math.random())) {
      case 0:
        {
          svg = new XMLSerializer().serializeToString(
            this.dropSvgComponent.svgDropIcon.nativeElement,
          );
        }

        break;
      case 1:
        {
          svg = new XMLSerializer().serializeToString(
            this.pickupComponent.svgPickup.nativeElement,
          );
        }
        break;

      default:
        break;
    }

    const iconUrl: string = 'data:image/svg+xml;base64,' + btoa(svg);

    this.icon = {
      showFooter: Boolean(Math.round(Math.random())),
      colorFillCircle: getRandomColors(),
      colorFillInternal: getRandomColors(),
      colorFooter: getRandomColors(),
      colorInternal: getRandomColors(),
      colorStrokeCircle: getRandomColors(),
      internalIcon: getRandomInternalIcon(),
      widthCircle: Math.round(Math.random() * WIDTH_MAX_ICON_BODY),
      widthFooter: Math.round(Math.random() * WIDTH_MAX_ICON_FOOTER),
    };
    return L.icon({
      iconUrl: iconUrl,
      iconSize: [38, 95], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76],
    });
  }

  public ngOnInit(): void {
    this.initMap();
  }

  public ngAfterViewInit(): void {
    const tiles: L.TileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });
    tiles.addTo(this.map);
  }

  public addMarker(): void {
    this.tilerService.getTiler();
    const bouds: L.LatLngBounds = this.map.getBounds();
    // tslint:disable-next-line: no-inferrable-types
    for (let index: number = 0; index < +this.iconsCount; index++) {
      setTimeout(() => {
        const lat: number = (Math.random() * (bouds.getNorth() - bouds.getSouth())) + bouds.getSouth();
        const long: number = (Math.random() * (bouds.getWest() - bouds.getEast())) + bouds.getEast();
        // tslint:disable-next-line: no-shadowed-variable
        const icon: L.Icon = this.getRandomIcon();
        L.marker([lat, long], { icon: icon }).addTo(this.map);
      }, 0);
    }
  }
}
