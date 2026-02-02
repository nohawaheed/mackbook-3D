import { Component, inject } from '@angular/core';
import { Mackbook } from '../../../core/services/mackbook/mackbook';
import { Canvas } from "../canvas/canvas";

@Component({
  selector: 'app-product-viewer',
  imports: [Canvas],
  templateUrl: './product-viewer.html',
  styleUrl: './product-viewer.scss',
})
export class ProductViewer {

  mackbook = inject(Mackbook);

}
