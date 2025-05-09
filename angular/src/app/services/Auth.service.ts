import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private Http : HttpClient) { }
  showComponent:boolean=false;
  isLogin:EventEmitter<boolean>=new EventEmitter<boolean>();
  handleEvent(boolean:boolean){
    this.isLogin.emit(boolean)
    this.showComponent=boolean
  }
  signUp(email:any , password :any){
    const data={email : email , password : password , returnSecureToken:true}
    return this.Http.post<any>
      (
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDS95XLDxHmawOYqV9xKoHJO4GaYzCvagA" , data
      ).pipe(catchError(this.HandleError))
  }
  login(email:any , password:any){
    const data={email : email , password : password , returnSecureToken:true}
    return this.Http.post<any>
        (
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDS95XLDxHmawOYqV9xKoHJO4GaYzCvagA' , data
        ).pipe(catchError(this.HandleError))
  }

  private HandleError(err:HttpErrorResponse){
    let errorMessage="An Unknown error has occured"
        if(!err.error || !err.error.error){
          return throwError(()=> errorMessage)
        }else{
          switch (err.error.error.message){
            case 'EMAIL_EXISTS':
              errorMessage="this email is already exist";
              break;
            case 'OPERATION_NOT_ALLOWED':
              errorMessage="this operation is not allowed";
              break;
            case 'INVALID_LOGIN_CREDENTIALS':
              errorMessage="this email or password is not correct";
              break;
        }
      }
    return throwError(()=> errorMessage)
  }

}
