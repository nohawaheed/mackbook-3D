import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgtsEnvironment, NgtsLightformer, NgtsSpotLight } from 'angular-three-soba/staging';

@Component({
  selector: 'app-studio-light',
  imports: [NgtsEnvironment, NgtsLightformer, NgtsSpotLight],
  templateUrl: './studio-light.html',
  styleUrl: './studio-light.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StudioLight {
  PI = Math.PI;
}
