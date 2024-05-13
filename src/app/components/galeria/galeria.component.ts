import { Component } from '@angular/core';
import { PersonalService } from '../../services/personal.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  constructor( private servicios: PersonalService){}

  especie: string='Mutant';

  personal :any

  ngOnInit(){
    this.servicios.getPersonal().subscribe( p =>{
      this.personal= p
    })
  }

}
