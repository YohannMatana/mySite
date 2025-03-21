import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-laravel',
  imports: [GalleriaModule, FormsModule],
  templateUrl: './laravel.component.html',
  styleUrl: './laravel.component.scss'
})
export class LaravelComponent {
  images: any[] = [];
  responsiveOptions: any[] = [];

  constructor() {
    this.images = [
      { itemImageSrc: './assets/pao1.png', thumbnailImageSrc: './assets/pao1.png' },
      { itemImageSrc: './assets/pao2.png', thumbnailImageSrc: './assets/pao2.png' },
      { itemImageSrc: './assets/pao3.png', thumbnailImageSrc: './assets/pao3.png' },
      { itemImageSrc: './assets/pao4.png', thumbnailImageSrc: './assets/pao4.png' },

    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }

  onValueChange(event: any) {
    this.images = event;
  }
}
