import { Component, signal } from '@angular/core';
import { Navbar } from "./shared/navbar/navbar";
import { Hero } from "./features/home/hero/hero";
import { ProductViewer } from "./features/home/product-viewer/product-viewer";
import { Showcase } from "./features/home/showcase/showcase";
import { injectResize } from 'ngxtension/resize';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, ProductViewer, Showcase],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }
  protected readonly title = signal('3d-mackbook');
  resize$ = injectResize(); // Observable<ResizeResult>
}
