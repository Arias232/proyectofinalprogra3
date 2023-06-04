import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TabVehiculoItem } from '../components/tab-vehiculo/tab-vehiculo-datasource';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
 
  url='http://localhost:8080/estacionamientos';

  constructor(private http: HttpClient) { }

  getvehiculos(): Observable<TabVehiculoItem []>{
    return this.http.get<TabVehiculoItem []>(this.url)
  }

  addVehiculo(Vehiculo:Vehiculo){
    return this.http.post(this.url, Vehiculo);
  }
 
   getunVehiculo(id:string){
    return this.http.get<Vehiculo>(this.url+'/'+id);//[] debe de devolver un valor tipo object no arreglo return this.http.get<Vehiculo>[](this.url+'/'+id)
  }
  
  updateVehiculo(id:string, Vehiculo:Vehiculo){
    this.http.put(this.url+'/'+id, Vehiculo).subscribe(
      res=>console.log(res),


      
      err=>console.log(err)
    )
  }

  deleteVehiculo(id:string){
this.http.delete(this.url+'/'+id).subscribe(
  res=>console.log(res),
      err=>alert(err(""))
)
  }
 

}
export interface Vehiculo{
  id?:any;
  nombre: string;
  marca: string;
  modelo: string;
  placa: string;
  average: string;
  createAt: string;
  hora: string;
  precio: string;
}