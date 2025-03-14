import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [GalleriaModule, FormsModule],
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent {
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
