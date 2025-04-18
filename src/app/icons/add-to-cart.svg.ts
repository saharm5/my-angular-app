import { Component } from '@angular/core';

@Component({
    selector: 'app-add-to-cart',
    standalone: true,
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="19px" height="19px">
      <circle cx="7" cy="22" r="2" fill="rgb(19, 62, 135)" />
      <circle cx="17" cy="22" r="2" fill="rgb(19, 62, 135)" />
      <path d="M23,3H21V1a1,1,0,0,0-2,0V3H17a1,1,0,0,0,0,2h2V7a1,1,0,0,0,2,0V5h2a1,1,0,0,0,0-2Z" fill="rgb(19, 62, 135)" />
      <path
        d="M21.771,9.726a.994.994,0,0,0-1.162.806A3,3,0,0,1,17.657,13H5.418l-.94-8H13a1,1,0,0,0,0-2H4.242L4.2,2.648A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.829-2H17.657a5,5,0,0,0,4.921-4.112A1,1,0,0,0,21.771,9.726Z"
        fill="rgb(19, 62, 135)" />
    </svg>
  `
})
export class AddToCart { }
