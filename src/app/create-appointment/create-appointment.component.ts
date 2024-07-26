import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {
  appointment: any = {
    name: '',
    age: null,
    symptoms: '',
    number: ''
  };

 
constructor(private appointmentService:AppointmentService,private router:Router){}

onSubmit(appointment:any) {
  this.appointmentService.createAppointment(this.appointment).subscribe(data=>{
    console.log(data);
    this.goToAppointment();
  })

}
goToAppointment(){
  this.router.navigate(['/appointmentlist']);
}

}


