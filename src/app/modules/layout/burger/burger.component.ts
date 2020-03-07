import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-burger',
    templateUrl: './burger.component.html',
    styleUrls: ['./burger.component.scss'],
})

export class BurgerComponent {

    @Output() toggle:EventEmitter<void>;

    constructor() {
        this.toggle = new EventEmitter<void>();
    }

    onToggle() {
        this.toggle.emit();
    }

}