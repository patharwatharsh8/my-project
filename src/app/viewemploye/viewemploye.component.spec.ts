import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemployeComponent } from './viewemploye.component';

describe('ViewemployeComponent', () => {
  let component: ViewemployeComponent;
  let fixture: ComponentFixture<ViewemployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewemployeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
