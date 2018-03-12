import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthServiceService {

  constructor(private router : Router) { }

  isAuthenticated = () => {
    firebase.auth().onAuthStateChanged(authUser => {
      if (!authUser)
        this.router.navigate(['']);
    });
  }

}
