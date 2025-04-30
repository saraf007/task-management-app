import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbidProfileComponent } from './ubid-profile.component';

describe('UbidProfileComponent', () => {
  let component: UbidProfileComponent;
  let fixture: ComponentFixture<UbidProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UbidProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbidProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
