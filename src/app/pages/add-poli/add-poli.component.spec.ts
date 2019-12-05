import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoliComponent } from './add-poli.component';

describe('AddPoliComponent', () => {
  let component: AddPoliComponent;
  let fixture: ComponentFixture<AddPoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
