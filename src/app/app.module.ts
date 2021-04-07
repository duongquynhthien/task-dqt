import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TaskListComponent} from './modules/task/task-list/task-list.component';
import {TaskFormComponent} from './modules/task/task-form/task-form.component';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {NgbActiveModal, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbToastModule,
    FormsModule,
  ],
  entryComponents: [
    TaskFormComponent,
  ],
  providers: [AppComponent, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule {
}
