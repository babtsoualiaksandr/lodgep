import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svg-icon',
  template: `
    <svg>
      // SVG elements don't have properties, therefore attribute binding is needed
      // https://stackoverflow.com/a/35082700
      <use attr.xlink:href="assets/symbol-defs.svg#{{icon}}"></use>
    </svg>
  `
})
export class SvgIconComponent {
  @Input() public icon: string = 'pickup';
}
