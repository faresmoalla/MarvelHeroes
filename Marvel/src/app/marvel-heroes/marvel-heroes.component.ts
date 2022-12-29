import { Component } from '@angular/core';
import { HeroesServiceService } from '../services/heroes-service.service';

@Component({
  selector: 'app-marvel-heroes',
  templateUrl: './marvel-heroes.component.html',
  styleUrls: ['./marvel-heroes.component.css']
})
export class MarvelHeroesComponent {
constructor(private service:HeroesServiceService){}
}
