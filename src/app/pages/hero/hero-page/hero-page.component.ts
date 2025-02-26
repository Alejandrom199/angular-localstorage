import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-hero-page',
  imports: [
    UpperCasePipe
  ],
  templateUrl: './hero-page.component.html',
  standalone: true,
  styleUrl: './hero-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroPageComponent {

  //Señales
  name = signal("Ironman");
  age = signal(45);

  //Señales computadas (Osea que dependen del valor de otras señales)
  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`
    return description;
  })

  capitalizedName = computed(() => {
    return this.name().toUpperCase()
  })

  constructor() {
  }

  //Al haber una señal computada que haga lo mismo, este método pierde relevancia
  /*getHeroDescription(){
    return `${this.name()} - ${this.age()}`
  }*/

  changeHero(){
    this.name.set("Spiderman")
    this.age.set(22)
  }

  resetForm(){
    this.name.set("Ironman")
    this.age.set(45)
  }

  changeAge(){
    this.age.set(60)
  }

}
