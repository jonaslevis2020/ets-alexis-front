import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModulesComponent } from './shared-modules.component';

describe('SharedModulesComponent', () => {
  let component: SharedModulesComponent;
  let fixture: ComponentFixture<SharedModulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedModulesComponent]
    });
    fixture = TestBed.createComponent(SharedModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
