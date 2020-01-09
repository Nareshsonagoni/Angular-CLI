import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    <input (keyup.enter)= "keyUp($event)"/>

        <button (click)= "onSave($event)">Save</button>
        `
})
export class CoursesComponent {
    title = 'List of Courses';
    courses;

    keyUp($event) {
        console.log($event.target.value);
    }

    onSave($event) {
        console.log("Button clicked...", $event);
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}