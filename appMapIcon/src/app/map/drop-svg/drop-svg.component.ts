import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { IconSvg } from 'src/app/shared/models/icon';

@Component({
  selector: 'app-drop-svg',
  templateUrl: './drop-svg.component.svg',
  styleUrls: ['./drop-svg.component.scss']
})
export class DropSvgComponent implements OnInit, AfterViewInit {
  @Input() public icon: IconSvg = {
    showFooter: true,
    colorFillCircle: 'red',
    colorFillInternal: 'blue',
    colorFooter: 'green',
    colorInternal: 'yellow',
    colorStrokeCircle: 'black',
    internalIcon: 'bus',
    widthCircle: 2,
    widthFooter: 3
  };

  @ViewChild('svg', { static: true }) public svgDropIcon: ElementRef;

  constructor() { }

  public ngOnInit(): void {
    
  }

  public ngAfterViewInit(): void {
  }

}
