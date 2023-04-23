import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachComponent } from './teach.component';

describe('TeachComponent', () => {
  let component: TeachComponent;
  let fixture: ComponentFixture<TeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
