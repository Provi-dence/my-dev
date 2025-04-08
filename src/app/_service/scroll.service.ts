import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const hash = this.router.parseUrl(this.router.url).fragment;
        if (hash) {
          const element = document.getElementById(hash);
          if (element) {
            // Smooth scroll to element
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
          }
        }
      }
    });
  }
}
