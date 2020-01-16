import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    {{ course.title | uppercase }} <br/>
    {{ course.rating | number:'1.2-2'}} <br/>
    {{ course.students | number }} <br/>
    {{ course.price | currency:'AUD' }} <br/>
    {{ course.releaseDate | date:'mediumDate' }} <br/>

    <br/>
    {{ text | summary:15 }}<br/>


    <br/>
    <input [(ngModel)]='title' type='text'>
    <br/>
    {{ title | titleCase }}<br/>
    `
    // <input [(ngModel)]='email' (keyup.enter)= "keyUp()"/>
    // <button (click)= "onSave($event)">Save</button>
})
export class CoursesComponent {
    // title = 'List of Courses';
    text = "I am junior programmer, who is learning new technologies and implementing them on my personal projects and constantly looking for new opportunities."
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30198,
        price: 190.95,
        releaseDate: new Date()
    };
    title: string;
    courses;
    email = 'me@email.com';

    keyUp() {
        console.log(this.email);
    }

    onSave($event) {
        console.log("Button clicked...", $event);
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}