import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../_service/scroll.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [RouterLink],
  standalone: true
})
export class HomeComponent {

  constructor(
    private scrollService: ScrollService,
  ) {
    // This is a comment in the constructor
  }
}
