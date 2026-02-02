import { Component } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-showcase',
  imports: [],
  templateUrl: './showcase.html',
  styleUrl: './showcase.scss',
})
export class Showcase {
  ngOnInit(): void {
    // And this is a Timeline, containing three sequenced tweens
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#showcase",
        start: "top top",
        end: "bottom top",
        scrub: true,  // animate the timeline with our scroll
        pin: true,
      }
    });
    timeline.to(".mask img", { transform: 'scale(1.1)' })
      .to(".content", { opacity: 1, y: 0, ease: 'power1.in' })
  }
}
