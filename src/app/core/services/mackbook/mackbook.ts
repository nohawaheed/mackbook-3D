import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Mackbook {
  color: string = "#c8d8e0";
  scale: number = 0.08;
  setColor(color: string) {
    this.color = color;
  }
  setScale(scale: number) {
    this.scale = scale;
  }
  reset() {
    this.color = "#c8d8e0";
    this.scale = 0.08;
  }
}
