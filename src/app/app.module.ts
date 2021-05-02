import { FormsComponent } from './forms/forms.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingComponent } from './routing/routing.component';
import { ComponentAComponent } from './routing/childComp/component-a/component-a.component';
import { ComponentBComponent } from './routing/childComp/component-b/component-b.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './forms/template-forms/template-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    ComponentAComponent,
    ComponentBComponent,
    FormsComponent,
    ReactiveFormsComponent,
    TemplateFormsComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
