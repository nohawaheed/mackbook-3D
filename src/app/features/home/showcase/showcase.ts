import { Component, DestroyRef, ElementRef, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { gsap } from 'gsap';;
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-showcase',
  imports: [],
  templateUrl: './showcase.html',
  styleUrl: './showcase.scss',
})
export class Showcase {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  private destroyRef = inject(DestroyRef);

  @ViewChild('maskImg') maskImg!: ElementRef<HTMLImageElement>;
  @ViewChild('showcase') showcase!: ElementRef<HTMLElement>;
  @ViewChild('content', { static: true }) content!: ElementRef<HTMLElement>;
  private ctx?: gsap.Context;


  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    this.ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: this.showcase.nativeElement,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
          }
        });
        tl
          .to(this.maskImg.nativeElement, { scale: 1.1 })
          .to(this.content.nativeElement, { opacity: 1, y: 0, ease: 'power1.in' })
        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });
      // Remove animation
      mm.add("(max-width: 1023px)", () => {
        gsap.set(this.maskImg.nativeElement, { clearProps: "all" });
        gsap.set(this.content.nativeElement, { clearProps: "all" });
      });
    });

    // Final safety cleanup on destroy
    this.destroyRef.onDestroy(() => {
      this.ctx?.revert();
    });
  }
}

