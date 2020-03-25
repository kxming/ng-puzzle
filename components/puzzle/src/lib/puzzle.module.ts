import { NgModule } from '@angular/core';
import { PuzzleComponent } from './puzzle.component';

import { ButtonModule } from './button';
import { IconModule } from './icon';

@NgModule({
  declarations: [PuzzleComponent],
  exports: [
    PuzzleComponent,
    ButtonModule,
    IconModule
  ]
})
export class PuzzleModule { }
