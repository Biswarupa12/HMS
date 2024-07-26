import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css'
})
export class CreateMedicineComponent {
medicine: any = {
    drugName: '',
    stock: ''
   
  };


constructor(private medicineService:MedicineService,private router:Router){}


onSubmit(medicine:any) {
  this.medicineService.createMedicine(this.medicine).subscribe(data=>{
    console.log(data);
    this.goToViewMedicine();


})
}
goToViewMedicine(){
  this.router.navigate(['/view-medicine'])
}
}


