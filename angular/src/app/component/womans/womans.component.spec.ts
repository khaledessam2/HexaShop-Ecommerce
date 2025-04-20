import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomansComponent } from './womans.component';

describe('WomansComponent', () => {
  let component: WomansComponent;
  let fixture: ComponentFixture<WomansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
