import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDokterComponent } from './add-dokter.component';

describe('AddDokterComponent', () => {
  let component: AddDokterComponent;
  let fixture: ComponentFixture<AddDokterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDokterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDokterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
