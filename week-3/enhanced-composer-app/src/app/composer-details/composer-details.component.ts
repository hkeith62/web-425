 /*
============================================
; Title: App CSS
; Author: Professor Krasso
; Date: 01/14/2022
; Modified By: Keith Hall
; Description: CSS file for main app component
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute ) {

    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

      if (this.composerId) {
        this.composer = new Composer().getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
