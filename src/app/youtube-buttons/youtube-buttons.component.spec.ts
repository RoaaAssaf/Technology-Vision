import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeButtonsComponent } from './youtube-buttons.component';

describe('YoutubeButtonsComponent', () => {
  let component: YoutubeButtonsComponent;
  let fixture: ComponentFixture<YoutubeButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
