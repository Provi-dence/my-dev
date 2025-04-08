import { Directive, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appFlashlightCursor]',
  standalone: true
})
export class FlashlightCursorDirective implements OnInit, OnDestroy {

  private overlay!: HTMLElement;
  private circle!: HTMLElement;
  private mouseMoveHandler!: (e: MouseEvent) => void;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Create overlay
    this.overlay = this.renderer.createElement('div');
    this.renderer.addClass(this.overlay, 'flashlight-overlay');

    // Create blue flashlight circle
    this.circle = this.renderer.createElement('div');
    this.renderer.addClass(this.circle, 'flashlight-circle');

    this.renderer.appendChild(this.overlay, this.circle);
    this.renderer.appendChild(document.body, this.overlay);

    // Move the circle with the mouse
    this.mouseMoveHandler = (e: MouseEvent) => {
      this.circle.style.left = `${e.clientX}px`;
      this.circle.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', this.mouseMoveHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('mousemove', this.mouseMoveHandler);
    this.renderer.removeChild(document.body, this.overlay);
  }
}
