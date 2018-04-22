import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './alpha/user';

@Injectable()
export class DataService {
  score:number;
  score$ = new BehaviorSubject (0);
  followers:number;
  followers$ = new BehaviorSubject(0);
  constructor(private _http: HttpClient) { }

  retrieveUser(user:User){
    console.log('in service', user)
    this.followers=this._http.get(`https://api.github.com/users/${user}/followers`)
  }

}

    // let httpParams = new HttpParams().set(name,user.name);
    // this._http.get('https://api.github.com/users/${user}', {params: name})
