import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
  standalone: true,
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {
  counter = 10

  //38. Uso de Signals (Señales)
  counterSignal = signal(10)

  constructor() {
    /*setInterval(() => {
      //this.counter += 1; //Counter no se actualiza al estar con changeDetection: ChangeDetectionStrategy.OnPush
      this.counterSignal.update((current => current + 1)) //CounterSignal si se actualiza al estar con changeDetection: ChangeDetectionStrategy.OnPush
      console.log("Tick!")
    }, 2000)*/
  }

  increaseBy(value: number) {
    this.counter += value;

    //this.counterSignal.set(this.counterSignal() + value)
    this.counterSignal.update((current => current + value))
  }

  decrementBy(value: number) {
    this.counter -= value;

    this.counterSignal.update((current => current - value))
  }

  resetCounter() {
    this.counter = 0;

    this.counterSignal.set(0);
  }


}
