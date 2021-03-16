import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CourseDetailComponent } from './courses/course-card/course-detail/course-detail.component';
import { GreetingComponent } from './greeting/greeting.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { CourseEditComponent } from './courses/course-card/course-edit/course-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    CourseCardComponent,
    CourseDetailComponent,
    GreetingComponent,
    NotFoundComponent,
    FooterComponent,
    CourseEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
