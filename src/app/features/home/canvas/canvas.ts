import { Component } from '@angular/core';
import { NgtCanvas } from "angular-three/dom";
import { SceneGraph } from "../scene-graph/scene-graph";

@Component({
  selector: 'app-canvas',
  imports: [NgtCanvas, SceneGraph],
  templateUrl: './canvas.html',
  styleUrl: './canvas.scss',
})
export class Canvas {
}
