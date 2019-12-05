import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahpasienComponent } from './tambahpasien.component';

describe('TambahpasienComponent', () => {
  let component: TambahpasienComponent;
  let fixture: ComponentFixture<TambahpasienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahpasienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahpasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
