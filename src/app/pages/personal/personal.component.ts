import { Component } from '@angular/core';
import { GaleriaComponent } from '../../components/galeria/galeria.component';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [GaleriaComponent],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {

}
