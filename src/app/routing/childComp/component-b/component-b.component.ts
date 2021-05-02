import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {
  paramValue = '';

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.paramValue = params.name;
    });
  }

}
