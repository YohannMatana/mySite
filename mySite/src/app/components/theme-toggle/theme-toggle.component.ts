import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ThemeServiceService } from '../../theme-service.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  isDarkMode$ = this.themeService.isDarkMode;

  constructor(private themeService: ThemeServiceService) {}
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
