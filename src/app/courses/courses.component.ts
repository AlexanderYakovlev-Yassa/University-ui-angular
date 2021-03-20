import { Component, OnInit } from '@angular/core';
import {Course, CourseService} from '../shared/course.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  id: FormControl = new FormControl(0);
  name: FormControl = new FormControl('');
  description: FormControl = new FormControl('');
  courses: Course[] = [];
  isLoaded = false;

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

  selectCourse(course: Course): void {

    this.id.setValue(course.id);
    this.name.setValue(course.name);
    this.description.setValue(course.description);
  }

  createCourse(): void {

    const newCourse: Course = {id: 0, name: this.name.value, description: this.description.value};

    this.courseService.createCourse(newCourse)
      .subscribe(c => {
        this.name.setValue(c.name);
        this.description.setValue(c.description);
        this.getCourses();
      });
  }

  updateCourse(): void {

    const modifiedCourse: Course = {id: this.id.value, name: this.name.value, description: this.description.value};

    this.courseService.updateCourse(modifiedCourse)
      .subscribe(c => {
        this.name.setValue(c.name);
        this.description.setValue(c.description);
        this.getCourses();
      });
  }

  deleteCourse(): void {

    const id: number = this.id.value;

    this.courseService.deleteCourse(id)
      .subscribe(() => {
        this.clearForm();
        this.getCourses();
      });
  }

  private clearForm(): void {
    this.id.setValue(0);
    this.name.setValue('');
    this.description.setValue('');
  }
}
