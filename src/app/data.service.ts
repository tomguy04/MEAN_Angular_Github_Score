import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './alpha/user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  private base = `https://api.github.com/users/`;
  score:number;
  score$ = new BehaviorSubject (0);
  // followers:number;
  followers$ = new BehaviorSubject(0);
  // numOfFollowers:any;
  numOfRepos$ = new BehaviorSubject(0);
  result:any;
  followersArray$ =  new BehaviorSubject([]);
  reposArray$ =  new BehaviorSubject([]);
  // reposArray : Array<any>=[];
  user$ = new BehaviorSubject([])
  

  constructor(private _http: HttpClient) { }

  // updateUser(username: string) {    
  //   this.url  = this.base + username
  //   this.http.get(this.base + username).subscribe(
  //     (user: any[]) => {this.user.next(user)}
  //   )
  //   console.log('getUser ', this.user)
  //   return this.url
  // }

  handleError(error) {
    console.log('GOT AN error**********');
  }

  retrieveUser(user:User){
    console.log('retrieving**********');
    this._http.get<any[]>(this.base+`${user.name}`)
    .subscribe(
      (user:any[])=> {this.user$.next(user);
        (error) => this.handleError(error);
      }
    )
    return(this.base+`${user.name}`); 
  }
  

  retrieveRepos(user:User){
    this._http.get<any[]>(this.base+`${user.name}`+'/repos').subscribe(
      (reposArray:any[])=> {this.reposArray$.next(reposArray);}
    )
  }

  retrieveNumberOfFollowers(user:User){
  // retrieveUser(user:User): Observable<number>{
    console.log('in service', user)
    console.log('the get is...');

    //below, we need to define the type of information we are getting.  It needs to conform to the 
    //type of information we are returning..Observable<User>
    //whatever we are getting back from the base api will return to us <User> information
    //*we dont need map, the http.get is trandforming the data to json data.

    this._http.get<any[]>(this.base+`${user.name}`+'/followers?per_page=100')
    .subscribe(
      (followersArray:any[])=> {this.followersArray$.next(followersArray);}
    )

    }
  }

