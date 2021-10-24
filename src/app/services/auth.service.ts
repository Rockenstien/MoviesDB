import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError,Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SignUpResponse } from '../models/signup.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logger = new Subject<boolean>();
  constructor(private http: HttpClient ) { }
  
  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }

  signUp(email: string, password: string, displayName: string){
    return this.http
    .post<SignUpResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
    AIzaSyCM1K7etp_CcA34jEpOIi-LDJmxA7vfThY`,
      {
        email: email,
        password: password,
        displayName: displayName,
        returnSecureToken: true
      }
    )
    .pipe(
      catchError(this.handleError),
      tap(responseData => {
        localStorage.setItem("auth", JSON.stringify(responseData));
        this.logger.next(true);
      })
    )
  }

  login(email: string, password: string){
    return this.http
    .post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCM1K7etp_CcA34jEpOIi-LDJmxA7vfThY`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
    .pipe(
      catchError(this.handleError),
      tap(responseData => {
        localStorage.setItem("auth", JSON.stringify(responseData));
        this.logger.next(true);
      })
    )
  }

  logOut(){
    localStorage.removeItem("auth");
    this.logger.next(false);
  }

  handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);  // If error is not present in the system
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }
}
