import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { accesoUsuario, User } from '../clases/user';
const url = "http://localhost/backendphp/user/"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

registrar(usuario: User): Observable<any>{
  return this.http.post(url, usuario)
}

acceso(usuario: accesoUsuario):Observable<any>{
  return this.http.post(url + "login", usuario)
  
}
obtenerPerfil(): Observable<any>{
  return this.http.get(url)
}

editarPerfil(usuario: User):Observable<any>{
  return this.http.put(url, usuario)
}
eliminarPerfil(): Observable<any>{
  return this.http.delete(url)
}

logout():void{
  localStorage.removeItem("userToken")
}

isLoged():boolean{
  return !!localStorage.getItem('userToken')
}

guardarToken(token: string):void{

  localStorage.setItem("userToken", token)

}
leerToken():string{
  return localStorage.getItem("userToken")
}



}
