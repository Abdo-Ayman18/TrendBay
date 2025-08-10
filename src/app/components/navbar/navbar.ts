import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  scroll: boolean = false;
  @HostListener('window:scroll')
  onScroll(): void {
    if (scrollY > 0) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  }
}
