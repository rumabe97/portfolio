import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatInformationComponent } from './contat-information.component';

describe('ContatInformationComponent', () => {
  let component: ContatInformationComponent;
  let fixture: ComponentFixture<ContatInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
