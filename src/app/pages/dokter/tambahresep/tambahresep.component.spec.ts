import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahresepComponent } from './tambahresep.component';

describe('TambahresepComponent', () => {
  let component: TambahresepComponent;
  let fixture: ComponentFixture<TambahresepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahresepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahresepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
