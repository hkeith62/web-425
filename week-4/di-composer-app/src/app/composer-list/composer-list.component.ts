/*
============================================
; Title:  Composer-List component
; Author: Professor Krasso
; Date: 01/24/2022
; Modified By: Keith Hall
; Description: File implementing di-composer service
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
  }
  ngOnInit(): void {
  }
}
