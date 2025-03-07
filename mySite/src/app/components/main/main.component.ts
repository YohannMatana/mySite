import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { SeparatorComponent } from '../separator/separator.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ContainerComponent,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    ThemeToggleComponent,
    SeparatorComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
