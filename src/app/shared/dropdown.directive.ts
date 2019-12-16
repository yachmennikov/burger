import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class Dropdown {

    @HostBinding('class.open') isOpen: boolean = false;
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}