import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelHeroesComponent } from './marvel-heroes.component';

describe('MarvelHeroesComponent', () => {
  let component: MarvelHeroesComponent;
  let fixture: ComponentFixture<MarvelHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
