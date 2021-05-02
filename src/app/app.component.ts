import { Component, OnInit } from '@angular/core';
import { Paths } from './interfaces/Paths';
import { routes } from './Paths';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-learn';
  paths: Paths[] = [];

  ngOnInit(): void {
    this.paths = routes;
    console.log(this.paths);
  }
}
