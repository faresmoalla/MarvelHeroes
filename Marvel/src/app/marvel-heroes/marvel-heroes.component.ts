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

ngOnInit(): void{

  this.service.allHeroes().subscribe((result)=>{
    console.log(result);
    this.listHeroes= result.data.results;
  })
}

applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}

findHero(event:any)
{
   this.characterName = event.target.value;
   
   this.service.getHero(this.characterName).subscribe((result)=>{
    console.log("////////////////"+result);
  
     
       this.hero = result.data.results;
     
  

       this.ngOnInit();
     
   })
}

}
