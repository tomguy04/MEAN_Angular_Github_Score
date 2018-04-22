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

  constructor(private _http: HttpClient) { }

  retrieveRepos(user:User){
    this._http.get<any[]>(this.base+`${user.name}`+'/repos').subscribe(
      (reposArray:any[])=> {this.reposArray$.next(reposArray);}
    )
    // console.log(this.reposArray);
  }

  retrieveNumberOfFollowers(user:User){
  // retrieveUser(user:User): Observable<number>{
    console.log('in service', user)
    console.log('the get is...');

    //below, we need to define the type of information we are getting.  It needs to conform to the 
    //tpe of informatio we are returning..Observable<User>
    //whatever we are getting back from the base api will return to us <User> information
    //*we dont need map, the http.get is trandforming the data to json data.
    // return this._http.get<number>(`this.base+${user}`);

    // this._http.get<number>(this.base+`${user.name}`+'/followers').subscribe(
    //   (numOfFollowers:number)=> {this.followers$.next(numOfFollowers);}
    // )

    this._http.get<any[]>(this.base+`${user.name}`+'/followers?per_page=100').subscribe(
      (followersArray:any[])=> {this.followersArray$.next(followersArray);}
    )


    // this._http.get(`https://api.github.com/users/${user.name}/followers`).subscribe(
    //   (followers: number) => {this.followers$.next(followers);}
    // )
    
    // this._http.get(`https://api.github.com/users/${user.name}`)
    
    
    // .toPromise()
    // .then(map(response => response.json())
    // .catch(this.handleError);

    // .then(response => response.json().data as Hero[])
    // .catch(this.handleError);
    // .map(response => response.json())

    //.subscribe(result => this.result =result.toPromise());

    // http.get('friends.json')
    // .map(response => response.json())
    // .subscribe(result => this.result =result);
    }
  }



    // let httpParams = new HttpParams().set(name,user.name);
    // this._http.get('https://api.github.com/users/${user}', {params: name})
