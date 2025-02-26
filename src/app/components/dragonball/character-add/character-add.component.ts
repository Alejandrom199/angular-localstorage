import {Component, input, output, signal} from '@angular/core';
import {Character} from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  standalone: true,
  styleUrl: './character-add.component.css'
})
export class CharacterAddComponent {

  name = signal("")//Los signals también funcionan como Inputs
  power = signal(0)

  //Emisor por el cual se enviara un valor al Padre
  newCharacterEmit = output<Character>();

  addCharacterEmit() {
    if(!this.name() || !this.power() || this.power() <= 0){
      return
    }

    const newCharacter:Character = {
      id:Math.floor(Math.random() * 1000000),
      name: this.name(),
      power: this.power()
    }

    //this.characters.update((list) => [...list, newCharacter])
    this.newCharacterEmit.emit(newCharacter);
    this.resetFields()
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }

  protected readonly Number = Number;
}
