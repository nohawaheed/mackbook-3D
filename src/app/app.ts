import { Component, signal } from '@angular/core';
import { Navbar } from "./shared/navbar/navbar";
import { Hero } from "./features/home/hero/hero";
import { ProductViewer } from "./features/home/product-viewer/product-viewer";

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, ProductViewer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('3d-mackbook');
}
