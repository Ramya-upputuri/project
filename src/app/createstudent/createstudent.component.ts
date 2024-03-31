import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CreatestudentService } from '../createstudent.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent {
public createstudent:FormGroup=new FormGroup(
  {
    name:new FormControl(),
    gender:new FormControl(),
    mobile:new FormControl(),
    email:new FormControl(),
    batch:new FormControl(),
    address:new FormGroup(
      {
        city:new FormControl(),
        mandal:new FormControl(),
        district:new FormControl(),
        state:new FormControl(),
        pincode:new FormControl()
      }
    ),
    education:new FormArray([]),
    company:new FormGroup({
      name:new FormControl(),
      location:new FormControl(),
      package:new FormControl(),
      offerdate:new FormControl()
    }),
    sourcetype:new FormControl(),
    // sourceform:new FormControl(),
    // refferalpersons:new FormControl(),
    // refferalname:new FormControl(),
  }
)

submit(){
  console.log(this.createstudent.value);
  this._CreatestudentService.Create_student(this.createstudent.value).subscribe(
    (data:any)=>{
      alert("Create Successfully")
      location.reload();
    },
    (err:any)=>{
      alert("Internal Server Error")
    }
  )
}
get educationform(){
 return this.createstudent.get("education") as FormArray
}
add(){  this.educationform.push(
    new FormGroup(
      {
        qualification:new FormControl(),
        year:new FormControl(),
        percentage:new FormControl(
        )
      }
    )
  )
}
delete(i:number){
this.educationform.removeAt(i);
}

constructor(private _CreatestudentService:CreatestudentService){
  this.createstudent.get('sourcetype')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=="direct"){
        this.createstudent.addControl("sourceform",new FormControl),
        this.createstudent.removeControl("refferalpersons"),
        this.createstudent.removeControl("refferalname")
      }
      else{
        this.createstudent.addControl("refferalpersons", new FormControl),
        this.createstudent.addControl("refferalname",new FormControl),
        this.createstudent.removeControl("sourceform")
      }
    })
  }
}
