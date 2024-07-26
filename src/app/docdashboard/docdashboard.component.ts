import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docdashboard',
  templateUrl: './docdashboard.component.html',
  styleUrl: './docdashboard.component.css'
})
export class DocdashboardComponent {

  constructor(private patientService:PatientService,private router:Router){}
patients: Patient[]=[];
ngOnInit():void{
  this.getPatients();
}
getPatients(){
  this.patientService.getPatientList().subscribe(data=>{
    this.patients=data;
  })

}
update(patientId:number){
this.router.navigate(['update-patient',patientId])
}
}
