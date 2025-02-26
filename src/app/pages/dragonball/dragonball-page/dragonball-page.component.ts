import {Component, computed, signal} from '@angular/core';
import {DecimalPipe} from '@angular/common';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [
  ],
  templateUrl: './dragonball-page.component.html',
  standalone: true,
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id:1, name: 'Goku', power:9001},
    /*{id:2, name: 'Veggeta', power:8000},
    {id:3, name: 'Piccolo', power:3000},
    {id:4, name: 'Yamcha', power:500},*/
  ]);

  /*powerClasses = computed(() => {
    return{
      'text-danger': true,
    }
  })*/

  addCharacter() {
    if(!this.name() || !this.power() || this.power() <= 0){
      return
    }

    const newCharacter:Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }
    //console.log(this.name(), this.power());

    //this.characters().push(newCharacter);//<-- No es la mejor manera usar push si estamos usando un signal computado

    this.characters.update((list) => [...list, newCharacter])
    this.resetFields()
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }

  protected readonly Number = Number;
}
