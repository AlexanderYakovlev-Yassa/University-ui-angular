import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../shared/course.service";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input() course: Course = {id: 0, name: "", description: ""};
  isDetailExposed: boolean = false;
  isEditExposed: boolean = false;

  constructor() { }

  hideAll() {
    this.hideEditing();
    this.hideDetail();
  }

  showEditing() {
    this.isEditExposed = true;
    this.hideDetail();
  }

  hideEditing() {
    this.isEditExposed = false;
  }

  showDetail() {
    this.isDetailExposed = true;
    this.hideEditing();
  }

  hideDetail() {
    this.isDetailExposed = false;
  }

  courseUpdateHandler(updatedCourse: Course) {
    this.course = updatedCourse;
  }
}
