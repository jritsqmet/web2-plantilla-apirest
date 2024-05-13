import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NosotrosService } from '../../services/nosotros.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  id: any;
  nombre: any;
  edad: any;
  genero: any
  python:any;
  cpp:any;

  servicio = inject(NosotrosService)

  guadar( datos: NgForm){
    console.log(datos.value);
    this.servicio.postNosotros(datos.value).subscribe()
    window.location.reload()
    //window.location.href = "nosotros"
  }

}
