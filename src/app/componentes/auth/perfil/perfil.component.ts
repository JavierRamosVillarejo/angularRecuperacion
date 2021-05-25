import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/user';
import { UserService } from 'src/app/servicios/user.service';
import { dniValido2 } from 'src/app/validaciones/dni-valido';
import { telefonoValido } from 'src/app/validaciones/telefono-valido';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: User = {}
  mostrarEditar: boolean = false
  formPerfil = this.fb.group({
    nombre: [''],
    apellidos: [''],
    password: ['', [Validators.required, Validators.minLength(4)]],
    repassword:['',[Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    dni: ['', [Validators.required,dniValido2()]],
    telefono: [undefined, [telefonoValido()]] 
  })

  constructor(private servicioUsuario: UserService, private fb: FormBuilder, private irHacia: Router) { }

  ngOnInit(): void {
    this.cargarPerfil()
  }

  cargarPerfil():void{
    this.servicioUsuario.obtenerPerfil().subscribe(
      respuesta =>{
        console.log(respuesta)
        this.perfil= respuesta
        this.formPerfil.patchValue(respuesta)

      },
      error => {console.log(error)}
    )
  }
  editarPerfil():void{
    this.servicioUsuario.editarPerfil(this.formPerfil.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.cargarPerfil()
        this.mostrarEditar = false
      },
      error => console.log(error)
    )
  }
  eliminarUsuario():void{
    this.servicioUsuario.eliminarPerfil().subscribe(
      respuesta => {
        console.log(respuesta)
        this.servicioUsuario.logout()
        this.irHacia.navigate(['/login'])
      },
      error => console.log(error)
    )
  }

}
