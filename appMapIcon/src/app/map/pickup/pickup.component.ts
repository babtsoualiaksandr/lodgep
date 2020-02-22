import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { IconSvg } from 'src/app/shared/models/icon';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.svg',
  styleUrls: ['./pickup.component.scss']
})
export class PickupComponent implements OnInit {
  @ViewChild('svg', { static: true }) public svgPickup: ElementRef;
  @Input() public icon: IconSvg = {
    showFooter: true,
    colorFillCircle: 'red',
    colorFillInternal: 'blue',
    colorFooter: 'green',
    colorInternal: 'yellow',
    colorStrokeCircle: 'red',
    internalIcon: 'bus',
    widthCircle: 2,
    widthFooter: 3
  };
  constructor() { }

  public ngOnInit(): void {
  }

}
