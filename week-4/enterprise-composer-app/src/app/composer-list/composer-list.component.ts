/*
============================================
; Title:  Composer-List component
; Author: Professor Krasso
; Date: 01/25/2022
; Modified By: Keith Hall
; Description: File implementing enterprise-composer service
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import {Observable } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {

  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {

    this.composers = this.composerService.getComposers();
    this.txtSearchControl.valueChanges.pipe(debounceTime(5000)).subscribe(val => this.filterComposers(val));
  }
  ngOnInit(): void {
  }

  filterComposers(name: string) {
     this.composers = this.composerService.filterComposers(name);
  }
}
