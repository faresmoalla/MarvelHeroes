import { Component } from '@angular/core';
import { HeroesServiceService } from '../services/heroes-service.service';

@Component({
  selector: 'app-marvel-heroes',
  templateUrl: './marvel-heroes.component.html',
  styleUrls: ['./marvel-heroes.component.css']
})
export class MarvelHeroesComponent {
constructor(private service:HeroesServiceService){}

listHeroes:any=[]
characterName:string;
hero:any=[]



 playSound(){


 let audio = new Audio()
 audio.src= "../assets/confirm2.mp3"
 audio.load();
 audio.play();
}



ngOnInit(): void{
  let audio = new Audio()
  audio.src= "../assets/confirm2.mp3"
  audio.load();
  audio.play();



  
  this.service.allHeroes().subscribe((result)=>{
    console.log(result);
  

   this.listHeroes= result.data.results;
  })




}



findHero(event:any)
{
   this.characterName = event.target.value;
   
   this.service.getHero(this.characterName).subscribe((result)=>{
    
  
     
       this.hero = result.data.results;
     
  

       this.ngOnInit();
     
   })
}

}
