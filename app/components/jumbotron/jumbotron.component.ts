import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})

export class JumbotronComponent  {

    private jbtHeading:string;
    private jbtText:string;
    private jbtBtnText:string;
    private jbtBtnUrl:string;

    constructor () {
        this.jbtHeading = 'Hello World!';
        this.jbtText = 'This is a random text from some resource. It has a purpose of just showcasing what we can do with all this stuff!';
        this.jbtBtnText = 'Read More';
        this.jbtBtnUrl = '/about';
    }
}
