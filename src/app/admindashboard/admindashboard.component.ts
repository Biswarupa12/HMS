import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  patients:Patient[]=[];
constructor(private patientService:PatientService){}
ngOnInit():void{
  this.getPatients();
}
getPatients(){
  this.patientService.getPatientList().subscribe(data=>{
this.patients=data;
  })
}
}
