import {Component, inject, signal} from '@angular/core';
import {CharacterListComponent} from '../../../components/dragonball/character-list/character-list.component';
import {Character} from '../../../interfaces/character.interface';
import {CharacterAddComponent} from '../../../components/dragonball/character-add/character-add.component';
import {DragonBallService} from '../../../services/dragon-ball.service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
  ],
  templateUrl: './dragonball-super-page.component.html',
  standalone: true,
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {

  //Inyección de dependencias
  public dragonballService = inject(DragonBallService);

}
