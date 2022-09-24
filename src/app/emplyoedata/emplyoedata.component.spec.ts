import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyoedataComponent } from './emplyoedata.component';

describe('EmplyoedataComponent', () => {
  let component: EmplyoedataComponent;
  let fixture: ComponentFixture<EmplyoedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplyoedataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplyoedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
