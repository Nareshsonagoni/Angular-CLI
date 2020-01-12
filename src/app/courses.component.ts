import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    <input #email (keyup.enter)= "keyUp(email.value)"/>

        <button (click)= "onSave($event)">Save</button>
        `
})
export class CoursesComponent {
    title = 'List of Courses';
    courses;

    keyUp(email) {
        console.log(email);
    }

    onSave($event) {
        console.log("Button clicked...", $event);
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}