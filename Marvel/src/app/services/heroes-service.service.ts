import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroesServiceService {

  constructor(private http: HttpClient) { }

url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150";

allHeroes():Observable<any>
{
  return this.http.get(this.url);
}

}
