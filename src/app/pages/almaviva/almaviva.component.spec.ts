import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmavivaComponent } from './almaviva.component';

describe('AlmavivaComponent', () => {
  let component: AlmavivaComponent;
  let fixture: ComponentFixture<AlmavivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmavivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmavivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
