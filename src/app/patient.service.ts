import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private httpClient:HttpClient) { }
private baseUrl='http://localhost:8081/patientapi/getalldata';
getPatientList():Observable<Patient[]>{
  return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
}
 delete(id:number):Observable<object>{
  return this.httpClient.delete(`${this.baseUrl}/${id}`);
 }
 createPatient(patient:Patient):Observable<Patient>{
  return this.httpClient.post<Patient>(`${this.baseUrl}/save`,patient);
 }
}
