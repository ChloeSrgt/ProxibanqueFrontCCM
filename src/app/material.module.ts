import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

const modules =[MatButtonModule, MatToolbarModule, MatIconModule, MatTooltipModule]

@NgModule({
  exports:modules
})
export class MaterialModule { }
