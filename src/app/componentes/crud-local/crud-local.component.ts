import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/clases/nota';

@Component({
  selector: 'app-crud-local',
  templateUrl: './crud-local.component.html',
  styleUrls: ['./crud-local.component.css']
})
export class CrudLocalComponent implements OnInit {

  notaNueva: Nota = new Nota
  notas: Nota[]=[]
  indice: number

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("crudlocal")!=null){
      this.notas = JSON.parse(localStorage.getItem("crudlocal"))
      console.log(this.notas)
      this.indice = this.notas[this.notas.length].id+1
    }else this.indice=0

    
  }
  insertarNota(): void{
    
    this.notaNueva.id = this.indice
    this.notas.push(this.notaNueva)
    this.notaNueva = new Nota()

    localStorage.setItem("crudlocal", JSON.stringify(this.notas))
  }

}
