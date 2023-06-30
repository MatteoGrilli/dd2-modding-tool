import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalPathModalComponent } from './local-path-modal.component';

describe('LocalPathModalComponent', () => {
  let component: LocalPathModalComponent;
  let fixture: ComponentFixture<LocalPathModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalPathModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalPathModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
