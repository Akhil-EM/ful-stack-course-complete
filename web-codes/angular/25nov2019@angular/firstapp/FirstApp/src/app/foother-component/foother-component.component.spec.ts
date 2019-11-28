import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootherComponentComponent } from './foother-component.component';

describe('FootherComponentComponent', () => {
  let component: FootherComponentComponent;
  let fixture: ComponentFixture<FootherComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootherComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
