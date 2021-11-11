import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { NavsidebarComponent } from './navsidebar/navsidebar.component';
import { RouterModule} from '@angular/router';
import { AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material';
import { HttpClientModule} from '@angular/common/http';
import { LogsComponent } from './logs/logs.component';
import { HistoriesComponent } from './histories/histories.component';
import { LoglistModule } from './loglist/loglist.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { ExamplemoduleModule } from './examplemodule/examplemodule.module';
@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    NavsidebarComponent,
    LogsComponent,
    HistoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoglistModule,
    NgxJsonViewerModule,
    ExamplemoduleModule,
    RouterModule.forRoot([
      { path: '',
        redirectTo: 'jobs',
        pathMatch: 'full'
      },
      {
         path: 'jobs',
         component: JobsComponent
      },
      {
        path: 'jobs/histories/:jobname',
        component: HistoriesComponent
      },
      {
        path: 'jobs/histories/:jobname/:id/logs',
        component: LogsComponent
      },
      {
        path: 'jobs/example',
        loadChildren: () => import('./examplemodule/examplemodule.module').then(mod => mod.ExamplemoduleModule)
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
