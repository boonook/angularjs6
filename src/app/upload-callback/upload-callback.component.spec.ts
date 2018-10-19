import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCallbackComponent } from './upload-callback.component';

describe('UploadCallbackComponent', () => {
  let component: UploadCallbackComponent;
  let fixture: ComponentFixture<UploadCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
