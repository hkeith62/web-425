/**
 * Title: Home component.ts
 * Author: Professor Krasso
 * Date: 01/19/2022
 * Modified By Keith Hall
 * Description: Home component.ts file.
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;    // Value of isLoggedIn is set to true

  constructor(private route: ActivatedRoute) {

    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
   }

  ngOnInit(): void {
  }

}
