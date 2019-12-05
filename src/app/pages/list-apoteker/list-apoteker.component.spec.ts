import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApotekerComponent } from './list-apoteker.component';

describe('ListApotekerComponent', () => {
  let component: ListApotekerComponent;
  let fixture: ComponentFixture<ListApotekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListApotekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListApotekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
