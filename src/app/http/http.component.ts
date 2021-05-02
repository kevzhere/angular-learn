import { ApiResponse } from './../interfaces/ApiResponse';
import { CatFacts } from './../interfaces/CatFacts';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  response: CatFacts[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('https://api.publicapis.org/entries')
    .pipe(
      map(
        (val: any) =>  val.entries
      )
    )
    .subscribe(
      (res) => {
        this.response = res;
      }
    );
  }

}
