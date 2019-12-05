import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahobatComponent } from './tambahobat.component';

describe('TambahobatComponent', () => {
  let component: TambahobatComponent;
  let fixture: ComponentFixture<TambahobatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahobatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahobatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
