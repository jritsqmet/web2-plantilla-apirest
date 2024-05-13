import { Component, inject } from '@angular/core';
import { NosotrosService } from '../../services/nosotros.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  servicio = inject(NosotrosService)
  personas :any

  ngOnInit(){
    this.servicio.getNosotros().subscribe( p =>{
      this.personas = p;
    })
  }

  eliminar( id :any){
    this.servicio.deleteNosotrosID(id).subscribe()
  }



}
