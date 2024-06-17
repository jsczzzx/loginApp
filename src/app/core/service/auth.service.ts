import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private users = new Map<string, any>();

  constructor() { }

  register(user: any): Observable<any> {
    if (localStorage.getItem(user.email) != null) {
      return throwError(() => new Error('User already exists'));
    }

    //this.users.set(user.email, user);
    localStorage.setItem(user.email, JSON.stringify(user));
    return of({ message: 'User registered successfully' });
  }

  login(credentials: any): Observable<any> {
    const user = localStorage.getItem(credentials.email);

    if (user) {

      if (JSON.parse(user).email != credentials.email) {
        return throwError(() => new Error('Wrong password'));
      }
      localStorage.setItem('currentUser', JSON.parse(user).email);
      return of({ message: 'Login successfully', user });
    }
    return throwError(() => new Error("User doesn't exist."));
  }
}
