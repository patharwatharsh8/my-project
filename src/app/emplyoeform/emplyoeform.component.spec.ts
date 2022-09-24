import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyoeformComponent } from './emplyoeform.component';

describe('EmplyoeformComponent', () => {
  let component: EmplyoeformComponent;
  let fixture: ComponentFixture<EmplyoeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplyoeformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplyoeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
