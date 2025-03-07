import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {
  private darkMode = new BehaviorSubject<boolean>(false);
  isDarkMode = this.darkMode.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.setDarkMode(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setDarkMode(prefersDark);
    }
  }

  toggleTheme(): void {
    this.setDarkMode(!this.darkMode.value);
  }

  setDarkMode(isDarkMode: boolean): void {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    this.darkMode.next(isDarkMode);
  }
}
