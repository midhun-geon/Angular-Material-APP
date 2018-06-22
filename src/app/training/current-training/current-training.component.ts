import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material';
import {StopComponent} from './stop-training.component';
@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingexit=new EventEmitter<void>();
progress=0;
timer:number;
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  this.startOrStopTimer();
  }
  startOrStopTimer(){
    this.timer=setInterval(()=>{
      this.progress=this.progress+5;
      if(this.progress>=100){
        clearInterval(this.timer)
      }
      },1000
    )
  }
  onStop(){
    clearInterval(this.timer);
    const dialogref=this.dialog.open(StopComponent,{
      data:{
        progress:this.progress
      }
    });
    dialogref.afterClosed().subscribe(
      result=>{
        if(result){
          this.trainingexit.emit();
        }else{
          this.startOrStopTimer();
        }
      }
    )
  }
}
