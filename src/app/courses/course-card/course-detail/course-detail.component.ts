import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../../shared/course.service";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input() course: Course = {id:0, name: "", description: ""};
  @Input() isDetailExposed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


}
