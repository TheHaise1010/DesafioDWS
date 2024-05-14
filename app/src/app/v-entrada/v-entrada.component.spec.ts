import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VEntradaComponent } from './v-entrada.component';

describe('VEntradaComponent', () => {
  let component: VEntradaComponent;
  let fixture: ComponentFixture<VEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VEntradaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
