import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PainelComponent } from './dashboard/components/painel/painel.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskComponent } from './dashboard/components/task/task.component';
import { IndexComponent } from './dashboard/components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PainelComponent,
    TaskComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
