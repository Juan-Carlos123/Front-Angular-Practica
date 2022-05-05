import { Component, OnInit } from '@angular/core';
import { DocService } from '../_services/doc.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  content = '';
  documento = {
    codigo: '',
    descripcion: '',
    estado: false,
    nombre: ''
  };

  submitted = false;

  constructor(private docService: DocService) { }

  ngOnInit() {
  }

  saveDocumento() {
    const data = {
      codigo: this.documento.codigo,
      descripcion: this.documento.descripcion,
      nombre: this.documento.nombre
    };
    this.docService.createDocumento(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newDocumento() {
    this.submitted = false;
    this.documento = {
      codigo: '',
      descripcion: '',
      estado: false,
      nombre: ''
    };
  }
}
