import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    // The component's ngOnInit lifecycle hook calls the HeroService method, not the constructor.
    this.getHeroes();
  }

}
