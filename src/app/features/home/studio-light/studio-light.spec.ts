import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioLight } from './studio-light';

describe('StudioLight', () => {
  let component: StudioLight;
  let fixture: ComponentFixture<StudioLight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudioLight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudioLight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
