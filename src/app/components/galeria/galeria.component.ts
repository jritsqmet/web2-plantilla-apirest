import { Component } from '@angular/core';
import { PersonalService } from '../../services/personal.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  constructor( private servicios: PersonalService){}

  personal :any

  ngOnInit(){
    this.servicios.getPersonal().subscribe( p =>{
      this.personal= p
    })
  }

}
