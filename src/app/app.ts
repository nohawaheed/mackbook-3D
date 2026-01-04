import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/navbar/navbar";
import { Hero } from "./features/hero/hero";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('3d-mackbook');
}
