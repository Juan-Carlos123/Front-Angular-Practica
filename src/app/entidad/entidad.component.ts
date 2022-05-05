import { Component, OnInit } from '@angular/core';
import { EntService } from '../_services/ent.service';

@Component({
  selector: 'app-entidad',
  templateUrl: './entidad.component.html',
  styleUrls: ['./entidad.component.css']
})
export class EntidadComponent implements OnInit {
  content = '';
  entidad = {
    id_tipo_documento: '',
    id_tipo_contribuyente: '',
    nro_documento: '',
    razon_social: '',
    nombre_comercial: '',
    direccion: '',
    telefono: '',
    estado: false,
  };

  submitted = false;

  constructor(private entService: EntService) { }

  ngOnInit() {
  }

  saveEntidad() {
    const data = {
      id_tipo_documento: this.entidad.id_tipo_documento,
      id_tipo_contribuyente: this.entidad.id_tipo_contribuyente,
      nro_documento: this.entidad.nro_documento,
      razon_social: this.entidad.razon_social,
      nombre_comercial: this.entidad.nombre_comercial,
      direccion: this.entidad.direccion,
      telefono: this.entidad.telefono,
    };
    this.entService.createEntidad(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newEntidad() {
    this.submitted = false;
    this.entidad = {
      id_tipo_documento: '',
      id_tipo_contribuyente: '',
      nro_documento: '',
      razon_social: '',
      nombre_comercial: '',
      direccion: '',
      telefono: '',
      estado: false,
    };
  }
}
