import { Component, inject } from '@angular/core';
import { PersonalService } from '../../services/personal.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detales-personal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detales-personal.component.html',
  styleUrl: './detales-personal.component.css'
})
export class DetalesPersonalComponent {

  servicios = inject(PersonalService)
  ruta = inject(ActivatedRoute)

  id:any
  persona: any

  ngOnInit(){
    this.ruta.params.subscribe(p =>{
      this.id= p['idPersonal']
      console.log(p['idPersonal']);
      
      this.servicios.getPersonalUnico(this.id).subscribe(personal=>{
        this.persona = personal
      })
    })
  }

}
