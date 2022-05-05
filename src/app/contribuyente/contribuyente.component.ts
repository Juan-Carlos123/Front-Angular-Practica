import { Component, OnInit } from '@angular/core';
import { ContService } from '../_services/cont.service';

@Component({
  selector: 'app-contribuyente',
  templateUrl: './contribuyente.component.html',
  styleUrls: ['./contribuyente.component.css']
})
export class ContribuyenteComponent implements OnInit {
  content = '';
  contribuyente = {
    estado: false,
    nombre: ''
  };

  submitted = false;

  constructor(private contService: ContService) { }

  ngOnInit() {
  }

  saveContribuyente() {
    const data = {
      nombre: this.contribuyente.nombre
    };
    this.contService.createContribuyente(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newContribuyente() {
    this.submitted = false;
    this.contribuyente = {
      estado: false,
      nombre: ''
    };
  }
}
