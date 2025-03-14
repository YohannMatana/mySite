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
      { itemImageSrc: './assets/1696636178024.jpg', thumbnailImageSrc: './assets/1696636178024.jpg' },
      { itemImageSrc: './assets/1696636178024.jpg', thumbnailImageSrc: './assets/1696636178024.jpg' },
      { itemImageSrc: './assets/1696636178024.jpg', thumbnailImageSrc: './assets/1696636178024.jpg' },
      { itemImageSrc: './assets/1696636178024.jpg', thumbnailImageSrc: './assets/1696636178024.jpg' },
      { itemImageSrc: './assets/1696636178024.jpg', thumbnailImageSrc: './assets/1696636178024.jpg' },
      { itemImageSrc: './assets/1696636178024.jpg', thumbnailImageSrc: './assets/1696636178024.jpg' },
      { itemImageSrc: './assets/1696636178024.jpg', thumbnailImageSrc: './assets/1696636178024.jpg' }
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
