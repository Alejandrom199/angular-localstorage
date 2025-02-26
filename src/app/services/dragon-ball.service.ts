import {effect, Injectable, signal} from '@angular/core';
import {Character} from '../interfaces/character.interface';

//Método para leer desde el LocalStorage
function loadFromLocalStorage(): Character[] {
  const characters = localStorage.getItem('characters')
  return characters ? JSON.parse(characters) : [];
}

@Injectable({
  providedIn: 'root'
})
export class DragonBallService {

  //LinkedSignal
  characters = signal<Character[]>(loadFromLocalStorage());

  //effect es esta pendiente de algo y se llama en cada cambio, un uso es guardar en localstorage
  //effect solo funciona con signals? (BUSCARLO)
  saveToLocalStorage = effect(() => {
    //console.log(`Character count ${this.characters().length}`)
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  })


  addCharacterReceive(newCharacter: Character) {
    this.characters.update(
      list => [...list, newCharacter]
    );
  }
}
