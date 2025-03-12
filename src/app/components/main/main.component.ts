import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { SeparatorComponent } from '../separator/separator.component';
import { MainBoxesComponent } from '../main-boxes/main-boxes.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
    selector: 'app-main',
    imports: [
        ContainerComponent,
        CommonModule,
        HeaderComponent,
        FooterComponent,
        ThemeToggleComponent,
        SeparatorComponent,
        MainBoxesComponent,
        CarouselComponent
    ],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss'
})
export class MainComponent {}
