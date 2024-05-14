import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSalidaComponent } from './r-salida.component';

describe('RSalidaComponent', () => {
  let component: RSalidaComponent;
  let fixture: ComponentFixture<RSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RSalidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
