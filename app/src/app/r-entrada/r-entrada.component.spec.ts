import { ComponentFixture, TestBed } from '@angular/core/testing';

import { REntradaComponent } from './r-entrada.component';

describe('REntradaComponent', () => {
  let component: REntradaComponent;
  let fixture: ComponentFixture<REntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [REntradaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(REntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
