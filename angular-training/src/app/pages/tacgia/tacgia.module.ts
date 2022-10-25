import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TacgiaRoutingModule } from './tacgia-routing.module';
import { TacgiaComponent } from './tacgia.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { SharedModule } from "../../shared/shared.module";
import { MatRadioModule } from "@angular/material/radio";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";


@NgModule({
  declarations: [
    TacgiaComponent
  ],
  imports: [
    CommonModule,
    TacgiaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    MatRadioModule,
    NgxDatatableModule,
  ],
  providers:[
    
  ]
})
export class TacgiaModule { }
