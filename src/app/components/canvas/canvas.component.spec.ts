import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CanvasComponent} from './canvas.component';
import {TranslateModule} from '@ngx-translate/core';
import {RouterTestingModule} from '@angular/router/testing';

describe('CanvasComponent', () => {
  let component: CanvasComponent;
  let fixture: ComponentFixture<CanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasComponent],
      imports: [TranslateModule.forRoot(), RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
