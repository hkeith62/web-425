 /*
============================================
; Title: Composer Details.ts
; Author: Professor Krasso
; Date: 01/25/2022
; Modified By: Keith Hall
; Description: Composer-details-component of enterprise-composer-app
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute, private composerService: ComposerService ) {

    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

      if (this.composerId) {

        this.composer = this.composerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
