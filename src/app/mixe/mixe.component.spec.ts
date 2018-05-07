import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixeComponent } from './mixe.component';

describe('MixeComponent', () => {
  let component: MixeComponent;
  let fixture: ComponentFixture<MixeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
