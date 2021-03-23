import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent {
  hero: Hero = new Hero();
  superPowers: Array<string> = [
    'magnetic',
    'really smart',
    'rich',
    'hard',
    'biking',
    'driving',
    'drinking',
  ];

  constructor(private ar: ActivatedRoute, private hService: HeroService) {
    this.ar.params.subscribe((params) => {
      this.hService.getOne(params.id).forEach((hero) => {
        this.hero = hero;
      });
    });
  }

  onSubmit(): void {
    this.hService
      .update(this.hero)
      .forEach((value) => console.log('Updated hero: ', value));
  }
}
