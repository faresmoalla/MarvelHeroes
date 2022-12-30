import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject, combineLatest, forkJoin ,concat } from "rxjs";

import { map, tap } from "rxjs/operators";@Injectable({
  providedIn: 'root'
})




export class HeroesServiceService {

  constructor(private http: HttpClient) { }


number:number = 0;
list : any[]  = [];
url = `http://gateway.marvel.com/v1/public/characters?limit=100&orderBy=name&offset=${this.number}&ts=1&apikey=d8d95bf1ada42023ae168922f0ceff66&hash=a8d715a0464ea40033ca53eb9450a523`;
url1 = "http://gateway.marvel.com/v1/public/characters?limit=100&orderBy=name&offset=100&ts=1&apikey=d8d95bf1ada42023ae168922f0ceff66&hash=a8d715a0464ea40033ca53eb9450a523";
 observable = new Observable<any>;
 observable2 = new Observable<any>;
 observable3 = new Observable<any>;
allHeroes():Observable<any>
{


 
  
  this.observable3=
  concat (this.http.get(`http://gateway.marvel.com/v1/public/characters?limit=100&orderBy=name&offset=0&ts=1&apikey=d8d95bf1ada42023ae168922f0ceff66&hash=a8d715a0464ea40033ca53eb9450a523`)  ,
  this.http.get(`http://gateway.marvel.com/v1/public/characters?limit=100&orderBy=name&offset=100&ts=1&apikey=d8d95bf1ada42023ae168922f0ceff66&hash=a8d715a0464ea40033ca53eb9450a523`));
console.log("//////"+this.observable3);
  return   concat (this.http.get("http://gateway.marvel.com/v1/public/characters?limit=100&offset=0&ts=1&apikey=d8d95bf1ada42023ae168922f0ceff66&hash=a8d715a0464ea40033ca53eb9450a523")  ,
  this.http.get("http://gateway.marvel.com/v1/public/characters?limit=100&offset=200&ts=1&apikey=d8d95bf1ada42023ae168922f0ceff66&hash=a8d715a0464ea40033ca53eb9450a523"),

  this.http.get("http://gateway.marvel.com/v1/public/characters?limit=100&offset=100&ts=1&apikey=d8d95bf1ada42023ae168922f0ceff66&hash=a8d715a0464ea40033ca53eb9450a523"));
  

}

allHeroes2():Observable<any>
{
  return this.http.get(this.url1);
}


getHero(characterName:string):Observable<any>
{
  const hero = `https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&ts=1&apikey=d8d95bf1ada42023ae168922f0ceff66&hash=a8d715a0464ea40033ca53eb9450a523`;
  return this.http.get(hero);
}



}
