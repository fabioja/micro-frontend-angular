/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerFooterComponent } from './banner-footer.component';

describe('BannerFooterComponent', () => {
  let component: BannerFooterComponent;
  let fixture: ComponentFixture<BannerFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
