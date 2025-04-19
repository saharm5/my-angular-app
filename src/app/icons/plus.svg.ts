import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-plus',
    standalone: true,
    template: `
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      [attr.width]="width"
      [attr.height]="height"
      [attr.fill]="color"
    >
      <rect x="3" y="10" width="16" height="2" rx="1" />
      <rect x="10" y="3" width="2" height="16" rx="1" />
    </svg>
  `
})
export class plus {
    @Input() color: string = 'rgb(19, 62, 135)';
    @Input() width: number = 20;
    @Input() height: number = 20;
}
