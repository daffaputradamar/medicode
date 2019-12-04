import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPoliComponent } from './list-poli.component';

describe('ListPoliComponent', () => {
  let component: ListPoliComponent;
  let fixture: ComponentFixture<ListPoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
