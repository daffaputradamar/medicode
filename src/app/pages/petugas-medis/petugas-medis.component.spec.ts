import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetugasMedisComponent } from './petugas-medis.component';

describe('PetugasMedisComponent', () => {
  let component: PetugasMedisComponent;
  let fixture: ComponentFixture<PetugasMedisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetugasMedisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetugasMedisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
