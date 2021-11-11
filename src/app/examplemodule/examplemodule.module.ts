import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { TriggerComponent} from './trigger/trigger.component';
import { GeneralComponent } from './general/general.component';


@NgModule({
  declarations: [DetailComponent, TriggerComponent, GeneralComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '',
        redirectTo: 'jobs',
        pathMatch: 'full'
      },
      {
        path: 'jobs/example/trigger/:id',
        component: TriggerComponent
      },
      {
        path: 'jobs/example/detail/:id',
        component: DetailComponent
      },
    ]),
  ],
  exports:[
    GeneralComponent,
    DetailComponent,
    TriggerComponent
  ]
})
export class ExamplemoduleModule { }
