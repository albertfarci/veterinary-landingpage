import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrizioneComponent } from './nutrizione.component';

describe('NutrizioneComponent', () => {
  let component: NutrizioneComponent;
  let fixture: ComponentFixture<NutrizioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NutrizioneComponent]
    });
    fixture = TestBed.createComponent(NutrizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
