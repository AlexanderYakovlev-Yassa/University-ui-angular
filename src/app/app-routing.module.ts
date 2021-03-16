import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GreetingComponent} from "./greeting/greeting.component";
import {CoursesComponent} from "./courses/courses.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: '', component: GreetingComponent },
  { path: 'courses', component: CoursesComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
