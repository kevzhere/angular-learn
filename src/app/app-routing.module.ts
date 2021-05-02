import { HttpComponent } from './http/http.component';
import { TemplateFormsComponent } from './forms/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { FormsComponent } from './forms/forms.component';
import { ComponentBComponent } from './routing/childComp/component-b/component-b.component';
import { ComponentAComponent } from './routing/childComp/component-a/component-a.component';
import { RoutingComponent } from './routing/routing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'routing', component: RoutingComponent,
    children: [
      {
        path: 'component-a',
        component: ComponentAComponent,
      },
      {
        path: 'component-b',
        component: ComponentBComponent,
      }
    ]
  }, {
    path: 'forms', component: FormsComponent,
    children: [
      {
        path: 'reactive',
        component: ReactiveFormsComponent,
      },
      {
        path: 'template',
        component: TemplateFormsComponent,
      }
    ]
  }, {
    path: 'http', component: HttpComponent,
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
