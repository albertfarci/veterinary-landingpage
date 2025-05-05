import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinaGeneralePreventivaComponent } from './medicina-generale-preventiva.component';

describe('MedicinaGeneralePreventivaComponent', () => {
  let component: MedicinaGeneralePreventivaComponent;
  let fixture: ComponentFixture<MedicinaGeneralePreventivaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicinaGeneralePreventivaComponent]
    });
    fixture = TestBed.createComponent(MedicinaGeneralePreventivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
