import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetugasMedisComponent } from './add-petugas-medis.component';

describe('AddPetugasMedisComponent', () => {
  let component: AddPetugasMedisComponent;
  let fixture: ComponentFixture<AddPetugasMedisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPetugasMedisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPetugasMedisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
