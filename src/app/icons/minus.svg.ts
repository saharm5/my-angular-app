import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-minus',
    standalone: true,
    template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      [attr.width]="width"
      [attr.height]="height"
      [attr.fill]="color"
    >
      <rect x="4" y="11" width="15" height="3" rx="1" />
    </svg>
  `
})
export class Minus {
    @Input() color: string = 'rgb(19, 62, 135)';
    @Input() width: number = 20;
    @Input() height: number = 25;
}
