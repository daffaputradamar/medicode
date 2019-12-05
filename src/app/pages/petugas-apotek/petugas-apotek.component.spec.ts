import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetugasApotekComponent } from './petugas-apotek.component';

describe('PetugasApotekComponent', () => {
  let component: PetugasApotekComponent;
  let fixture: ComponentFixture<PetugasApotekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetugasApotekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetugasApotekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
