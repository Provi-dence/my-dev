import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { FlashlightCursorDirective } from './flashlight-cursor.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FlashlightCursorDirective],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'my-devs';
}
