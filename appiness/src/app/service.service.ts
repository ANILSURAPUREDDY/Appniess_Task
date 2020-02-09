import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpHandler, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';

let httpOptions = { headers : new HttpHeaders({
  "Content-Type":'application/json'
  // "Access-Control-Allow-Headers":"Content-Type,Authorization",
  // "Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,OPTIONS",
  // "Access-Control-Allow-Credentials":"true"
})}


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get<any>('https://api.github.com/users',httpOptions);
  }

  getRepo(user:string){
    return this.http.get<any>(`https://api.github.com/users/${user}/repos`,httpOptions)
  }
} 
