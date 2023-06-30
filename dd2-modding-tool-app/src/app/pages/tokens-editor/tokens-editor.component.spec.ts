import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensEditorComponent } from './tokens-editor.component';

describe('TokensEditorComponent', () => {
  let component: TokensEditorComponent;
  let fixture: ComponentFixture<TokensEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokensEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokensEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
