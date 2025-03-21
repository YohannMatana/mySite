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
      { itemImageSrc: './assets/humanz3.png', thumbnailImageSrc: './assets/humanz3.png' },
      { itemImageSrc: './assets/humanz2.png', thumbnailImageSrc: './assets/humanz2.png' },
      { itemImageSrc: './assets/humanz4.png', thumbnailImageSrc: './assets/humanz4.png' },
      { itemImageSrc: './assets/humanz1.png', thumbnailImageSrc: './assets/humanz1.png' },
      { itemImageSrc: './assets/spotify.png', thumbnailImageSrc: './assets/spotify.png' },
      { itemImageSrc: './assets/indexa1.png', thumbnailImageSrc: './assets/indexa1.png' },
      { itemImageSrc: './assets/indexa2.png', thumbnailImageSrc: './assets/indexa2.png' },
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
