import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinaInternaComponent } from './medicina-interna.component';

describe('MedicinaInternaComponent', () => {
  let component: MedicinaInternaComponent;
  let fixture: ComponentFixture<MedicinaInternaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicinaInternaComponent]
    });
    fixture = TestBed.createComponent(MedicinaInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
