import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPetugasMedisComponent } from './list-petugas-medis.component';

describe('ListPetugasMedisComponent', () => {
  let component: ListPetugasMedisComponent;
  let fixture: ComponentFixture<ListPetugasMedisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPetugasMedisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPetugasMedisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
