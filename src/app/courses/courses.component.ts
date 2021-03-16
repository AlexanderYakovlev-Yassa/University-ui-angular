import { Component, OnInit } from '@angular/core';
import {Course, CourseService} from "../shared/course.service";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  isLoaded: boolean = false;

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.isLoaded = false;
    this.courseService.getCourses()
      .subscribe(courses => {
        this.courses = courses;
        this.isLoaded = true;
      });
  }

  createCourse() {

  }
}
