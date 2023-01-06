import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from './../../../services/utility.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/common/interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isLoggedIn() {
    return sessionStorage.getItem('token') != null;
  }

  loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private utilityService:UtilityService, private http:HttpClient) {
    this.isLoggedIn() ? this.loggedIn.next(true) : this.loggedIn.next(false);
  }

  login(url: string, body: {}): Observable<any> {
    return this.http
      .post(environment.apiUrl + url, body)
  }

  logout() {
    this.utilityService.openSnackbar(`You are <strong>logged off</strong> successfully`)
    sessionStorage.clear();
    this.router.navigate(['/auth']);
    this.loggedIn.next(false);
  }
}
