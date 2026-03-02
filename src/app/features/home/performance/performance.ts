import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, inject, PLATFORM_ID, ViewChild, DestroyRef } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-performance',
  imports: [],
  templateUrl: './performance.html',
  styleUrl: './performance.scss',
})
export class Performance {

  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  private destroyRef = inject(DestroyRef);
  @ViewChild('content') content!: ElementRef<HTMLElement>;
  @ViewChild('performance') performance!: ElementRef<HTMLElement>;
  performanceImages = [
    { id: 'p1', src: '/performance1.png' },
    { id: 'p2', src: '/performance2.png' },
    { id: 'p3', src: '/performance3.png' },
    { id: 'p4', src: '/performance4.png' },
    { id: 'p5', src: '/performance5.jpg' },
    { id: 'p6', src: '/performance6.png' },
    { id: 'p7', src: '/performance7.png' },
  ]
  performanceImgPositions = [
    {
      id: "p1",
      left: 5,
      bottom: 65,
    },
    {
      id: "p2",
      right: 10,
      bottom: 60,
    },
    {
      id: "p3",
      right: -5,
      bottom: 45,
    },
    {
      id: "p4",
      right: -10,
      bottom: 0,
    },
    {
      id: "p5",
      left: 20,
      bottom: 50,
    },
    {
      id: "p6",
      left: 2,
      bottom: 30,
    },
    {
      id: "p7",
      left: -5,
      bottom: 0,
    },
  ];

  private ctx?: gsap.Context;
  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    // 1. Clean up any previous context if it exists (for safety)
    if (this.ctx) this.ctx.revert();
    this.ctx = gsap.context(() => {
      gsap.fromTo(this.content.nativeElement,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: {
            trigger: this.content.nativeElement,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {

        const tl = gsap.timeline({
          defaults: {
            ease: "power1.inOut", duration: 2, overwrite: 'auto'
          },
          scrollTrigger: {
            trigger: this.performance.nativeElement,
            start: "top top",
            end: "+=150%",
            scrub: true,
            invalidateOnRefresh: true,
            pin: true,
            anticipatePin: 1,
          }
        });
        this.performanceImgPositions.forEach((pos) => {
          if (pos.id === 'p5') return;
          const toVars: gsap.TweenVars = {
            left: pos.left !== undefined ? `${pos.left}%` : undefined,
            right: pos.right !== undefined ? `${pos.right}%` : undefined,
            bottom: pos.bottom !== undefined ? `${pos.bottom}%` : undefined,
          };

          tl.to(`.${pos.id}`, toVars, 0);
        })
      });
    }, this.performance.nativeElement);

    // Final safety cleanup on destroy
    this.destroyRef.onDestroy(() => {
      this.ctx?.revert();
    });
  }
}
