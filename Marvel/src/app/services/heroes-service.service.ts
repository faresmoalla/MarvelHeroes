import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})




export class HeroesServiceService {

  constructor(private http: HttpClient) { }

url = "http://gateway.marvel.com/v1/public/characters?limit=100&orderBy=name&offset=100&ts=1&apikey=d8d95bf1ada42023ae168922f0ceff66&hash=a8d715a0464ea40033ca53eb9450a523";

allHeroes():Observable<any>
{
  return this.http.get(this.url);
}
getHero(characterName:string):Observable<any>
{
  const hero = `https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&ts=1&apikey=d8d95bf1ada42023ae168922f0ceff66&hash=a8d715a0464ea40033ca53eb9450a523`;
  return this.http.get(hero);
}



}
