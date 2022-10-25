import { NXBService } from './../../shared/services/nxb.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NxbRoutingModule } from './nxb-routing.module';
import { NxbComponent } from './nxb.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../shared/shared.module";
import {MatRadioModule} from "@angular/material/radio";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    NxbComponent
  ],
  imports: [
    CommonModule,
    NxbRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    MatRadioModule,
    MatIconModule,
    MatPaginatorModule,
    NgxDatatableModule,
    MatTableModule
  ],
  providers:[
    NXBService
  ]
})
export class NxbModule { }
