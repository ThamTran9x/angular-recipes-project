import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipes';
  constructor() {}

  ngOnInit(): void {

  }

  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
