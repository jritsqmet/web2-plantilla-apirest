import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NosotrosService } from '../../services/nosotros.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-editar.component.html',
  styleUrl: './formulario-editar.component.css'
})
export class FormularioEditarComponent {

  id: any;
  nombre: any;
  edad: any;
  genero: any
  python:any;
  cpp:any;

  servicio = inject(NosotrosService)
  ruta= inject(Router)
  router = inject(ActivatedRoute)

  ngOnInit(){
    this.router.params.subscribe( r =>{
      this.servicio.getNosostrosID( r['idNosotros'] ).subscribe( p =>{
        this.id = p.id,
        this.nombre = p.nombre
        this.edad = p.edad
        this.genero = p.genero
        this.python =p.python
      })
    })
  }


  editar( datos: any){
    this.servicio.putNosotros(datos.value).subscribe()
    //window.location.href ="nosotros"
    this.ruta.navigateByUrl("nosotros")
  }

}
