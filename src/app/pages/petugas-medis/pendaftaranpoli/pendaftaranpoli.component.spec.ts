import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftaranpoliComponent } from './pendaftaranpoli.component';

describe('PendaftaranpoliComponent', () => {
  let component: PendaftaranpoliComponent;
  let fixture: ComponentFixture<PendaftaranpoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendaftaranpoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendaftaranpoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
