import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  appointments:Appointment[]=[];
  constructor(private appointmentService:AppointmentService){}
  delete(id:number) {
    this.appointmentService.deleteAppointment(id).subscribe(data=>{
      console.log(data);
      this.getAppointments();
    })
    }
    ngOnInit():void{
      this.getAppointments();
    }
    getAppointments(){
      this.appointmentService.getAllAppointments().subscribe(data=>{
    this.appointments=data;
      })

}}
