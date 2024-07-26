import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashboardComponent } from './docdashboard/docdashboard.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

export const routes: Routes = [
  {path:'admin',component:AdmindashboardComponent},
  {
    path:'appointmentlist',component:AppointmentComponent
},
{
    path:'create-appointment',component:CreateAppointmentComponent
},
{
  path:'home',component:HomeComponent
},
{
  path:'docdash',component:DocdashboardComponent
},
{path:'create-patient',component:CreatePatientComponent

},
{
  path:'view-medicine',component:MedicinelistComponent
},
{
  path:'create-medicine',component:CreateMedicineComponent
},
{
  path:'update-patient/:patientId',component:UpdatePatientComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
 
