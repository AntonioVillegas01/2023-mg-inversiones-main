import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerravivaComponent } from './terraviva.component';

describe('TerravivaComponent', () => {
  let component: TerravivaComponent;
  let fixture: ComponentFixture<TerravivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerravivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerravivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
