/**
 * Title: Home Component.ts
 * Author: Professor Krasso
 * Date: 01/19/2022
 * Modified By: Keith Hall
 * Description: Home compnent.ts file for enhanced-profile-app.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

}
