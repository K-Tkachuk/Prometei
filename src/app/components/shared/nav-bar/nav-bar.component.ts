import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild(NgbDropdown) dropdown: NgbDropdown;
  constructor() { }

  ngOnInit(): void {
  }

  open() {
    this.dropdown.open();
  }

  close() {
    this.dropdown.close();
  }
}
