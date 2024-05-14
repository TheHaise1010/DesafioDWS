import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VSalidaComponent } from './v-salida.component';

describe('VSalidaComponent', () => {
  let component: VSalidaComponent;
  let fixture: ComponentFixture<VSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VSalidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
