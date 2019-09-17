import { NgModule } from '@angular/core';
import { PuzzleComponent } from './puzzle.component';

import { ButtonModule } from './button';

@NgModule({
  declarations: [PuzzleComponent],
  exports: [
    PuzzleComponent,
    ButtonModule
  ]
})
export class PuzzleModule { }
