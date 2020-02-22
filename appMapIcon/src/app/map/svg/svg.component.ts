import { Component, OnInit } from '@angular/core';
import { ListColor } from 'src/app/shared/list-color.enum';
import { IconSvg } from 'src/app/shared/models/icon';
import { WIDTH_MAX_ICON_BODY, WIDTH_MAX_ICON_FOOTER } from 'src/app/shared/constants/other';
import { getRandomColors, getRandomInternalIcon } from 'src/app/shared/func/randoms';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
})
export class SvgComponent implements OnInit {
  public icon: IconSvg = {
    showFooter: true,
    colorFillCircle: 'red',
    colorFillInternal: 'blue',
    colorFooter: 'green',
    colorInternal: 'yellow',
    colorStrokeCircle: 'black',
    internalIcon: 'bus',
    widthCircle: WIDTH_MAX_ICON_BODY,
    widthFooter: WIDTH_MAX_ICON_FOOTER,
  };

  constructor() {}

  public ngOnInit(): void {
    setInterval(() => {
      this.icon.showFooter = !this.icon.showFooter;
      this.randomIcons();
    }, 1000);

  }

  public randomIcons(): void {
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
  }
}