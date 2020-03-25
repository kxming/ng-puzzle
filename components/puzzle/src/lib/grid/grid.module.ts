import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColComponent } from './col/col.component';
import { RowComponent } from './row/row.component';



@NgModule({
  declarations: [ColComponent, RowComponent],
  imports: [
    CommonModule
  ],
  exports: [ColComponent, RowComponent]
})
export class GridModule { }
