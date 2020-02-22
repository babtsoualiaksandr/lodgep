import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropSvgComponent } from './drop-svg.component';

describe('DropSvgComponent', () => {
  let component: DropSvgComponent;
  let fixture: ComponentFixture<DropSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
