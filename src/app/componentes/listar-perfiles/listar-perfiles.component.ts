import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-listar-perfiles',
  templateUrl: './listar-perfiles.component.html',
  styleUrls: ['./listar-perfiles.component.css']
})
export class ListarPerfilesComponent implements OnInit {
  usuarios: any

  constructor(private servicioUsuario: UserService) { }

  ngOnInit(): void {
    this.obtenerUsuarios()
  }

  obtenerUsuarios():void{
    this.servicioUsuario.listarUsuarios().subscribe(
      respuesta => {
        console.log(respuesta)
        this.usuarios = respuesta
      },
      error =>console.log(error)
    )
  }

}
