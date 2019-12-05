import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApotekerComponent } from './add-apoteker.component';

describe('AddApotekerComponent', () => {
  let component: AddApotekerComponent;
  let fixture: ComponentFixture<AddApotekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddApotekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApotekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
