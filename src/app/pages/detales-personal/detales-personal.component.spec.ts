import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalesPersonalComponent } from './detales-personal.component';

describe('DetalesPersonalComponent', () => {
  let component: DetalesPersonalComponent;
  let fixture: ComponentFixture<DetalesPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalesPersonalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalesPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
