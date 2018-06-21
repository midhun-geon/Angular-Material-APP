import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'stop-component',
  template:`<h1 mat-dialog-title>Are You Sure?</h1>
  <mat-dialog-content>
  <p>You already got {{passeddata.progress}}</p>
  </mat-dialog-content>
  <mat-dialog-actions>
  <button mat-button [mat-dialog-close]="true">YES</button>
  <button mat-button [mat-dialog-close]="false">NO</button>
  </mat-dialog-actions>`
  
})
export class StopComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public passeddata:any) { }

  ngOnInit() {
  }

}
