import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { SearchComponent } from './search/search.component';
import { LogTableComponent } from './log-table/log-table.component';



@NgModule({
  declarations: [SearchComponent, LogTableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxJsonViewerModule,
    RouterModule.forRoot([
      {
        path: 'logs',
        component: SearchComponent
      }
    ]),
  ],
  exports:[
    SearchComponent    
  ]
})
export class LoglistModule { }
