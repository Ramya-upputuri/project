import { Component } from '@angular/core';
import { AllstudentsService } from '../allstudents.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent {
  public studentsdata:any=[];
  public term:string='';
  public pageno:number=0;
  public sortby:string="";
  public order:string="";
  
  public queries:any={
    filter:"",
    limit:5,
    pageNO:0,
    sortBy:"",
    order:""
  }
constructor(private _allstudentsService:AllstudentsService){
  _allstudentsService.allstudents().subscribe(
    (data:any)=>{
    this.studentsdata=data;
    },
    (err:any)=>{
      alert("Internal Server Error")
    }
  )
}
filtered(){
  this._allstudentsService.allfilter(this.term
    ).subscribe(
    (data:any)=>{
      this.studentsdata=data;
    },
    (err:any)=>{
      alert("Internal Server Error")
    }
  )
}
getpages(){
  console.log(this.pageno);
  this._allstudentsService.pagedstudents(this.pageno).subscribe(
   (data:any)=>{
    this.studentsdata=data;
   },
   (err:any)=>{
    alert("Internal server error")
   }
  )
}

sorting(){
  this._allstudentsService.sortedstudents(this.sortby,this.order).subscribe(
    (data:any)=>{
      this.studentsdata=data;
    },
    (err:any)=>{
      alert("Internal Server Error")
    }
  )
}
deleted(id:string){
this._allstudentsService.deletestudents(id).subscribe(
  (data:any)=>{
    console.log(id);
    alert("Deleted Successfully");
    location.reload();
  },
  (err:any)=>{
    alert("Internal Server Error")
  }
)
}
loaddata(){
  console.log(this.queries)
 this._allstudentsService.query(this.queries).subscribe(
  (data:any)=>{
    this.studentsdata=data;
    
  },
  (err:any)=>{
    alert("Internal Server Error")
  }
 )
}
}
 

