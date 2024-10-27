import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortalApps';
  themes = [ 'dark', 'cupcake'];
  currentThemeIndex = 0;

  toggleTheme() {
    this.currentThemeIndex = (this.currentThemeIndex + 1) % this.themes.length;
    const newTheme = this.themes[this.currentThemeIndex];
    document.documentElement.setAttribute('data-theme', newTheme);

  }
}
