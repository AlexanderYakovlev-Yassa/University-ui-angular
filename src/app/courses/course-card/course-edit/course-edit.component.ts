import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course, CourseService} from "../../../shared/course.service";

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit{

  @Input() course: Course = {id:0, name: "", description: ""};
  courseId: number = 0;
  courseName: string = "";
  courseDescription: string = "";
  @Output() courseUpdated: EventEmitter<Course> = new EventEmitter<Course>();

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseId = this.course.id;
    this.courseName = this.course.name;
    this.courseDescription = this.course.description;
  }

  update(): void {

    const course: Course = {id: this.course.id, name: this.courseName, description: this.courseDescription};

    this.courseService.updateCourse(course)
      .subscribe(course => {
        this.courseUpdated.emit(course);
      });
  }
}
