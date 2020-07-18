import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  activeSelectedTab = 'recipes';
  @Output() featureSelected = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    console.log('header selectedTab = ' + this.activeSelectedTab);

  }

  onSelect(feature: string): void {
    this.featureSelected.emit(feature);
    this.activeSelectedTab = feature;
  }
}
