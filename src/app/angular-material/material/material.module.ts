import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatCardModule],

  exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatCardModule],
})
export class MaterialModule { }
