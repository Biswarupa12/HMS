import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(private httpClient:HttpClient) { }
  private baseUrl='http://localhost:8081/appointmentapi';
getAllAppointments():Observable<any[]>{
  return this.httpClient.get<any[]>(`${this.baseUrl}`);
}
createAppointment(appointment:any):Observable<any>{
  return this.httpClient.post<any>(`${this.baseUrl}/save`, appointment);
  
  
}
deleteAppointment(id:number):Observable<object>{
  return this.httpClient.delete(`${this.baseUrl}/${id}`);
}
}



