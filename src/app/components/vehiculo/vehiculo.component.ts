import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { VehiculoService, Vehiculo } from 'src/app/services/vehiculo.service'; 
import { Router } from '@angular/router';
import { permute } from 'd3';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit{

  Vehiculo: Vehiculo= {
    id:'',
    nombre:'',
    marca:'',
    modelo:'',
    placa:'',
    average:'',
    createAt:'',
    hora:'',
    precio: ''
  }

  addressForm = this.fb.group({
    Nombre: [null, Validators.required],
    Marca: [null, Validators.required],
    Modelo: [null, Validators.required],
    Placa: [null, Validators.required],
    Average: [null, Validators.required],
    CreateAt: [null, Validators.required],
    Hora: [null, Validators.required],
    Precio: [null, Validators.required],

  });

  hasUnitNumber = false;


  constructor(private fb: FormBuilder,private VehiculoService:VehiculoService, private router:Router, private activate: ActivatedRoute) {}

  onSubmit(): void {
    alert('Thanks!');
  }

  ngOnInit(): void { 
    this.Vehiculo.id=this.activate.snapshot.params['id'];
    if (this.Vehiculo.id) {
      this.VehiculoService.getunVehiculo(this.Vehiculo.id).subscribe(
      
        res=>{
          console.log(res)
            let Docente=res;
           
           
            this.Vehiculo.nombre=Docente.nombre;
            this.Vehiculo.marca=Docente.marca;
           
            this.Vehiculo.modelo=Docente.modelo;
            this.Vehiculo.placa=Docente.placa;
            this.Vehiculo.average=Docente.average;
            this.Vehiculo.createAt=Docente.createAt;
            this.Vehiculo.hora=Docente.hora;
            this.Vehiculo.precio=Docente.precio;
           
          
        },
        
        err=>console.log(err)
        
        
      )
    } 
  }

  
  agregar(){
    if (this.Vehiculo.id) {
      this.Vehiculo.id=this.Vehiculo.id
      this.router.navigate(['vehiculo']);
      this.VehiculoService.updateVehiculo(this.Vehiculo.id, this.Vehiculo)
      alert('Actualizado Correctamente');
    } else {
      this.router.navigate(['vehiculo']);
      this.VehiculoService.addVehiculo(this.Vehiculo).subscribe();
      this.router.navigate(['vehiculo']);
      alert('Guardado Correctamente');
    }
    this.router.navigate(['vehiculo']);
  }
   
  Oneliminar(id: string) {
    if(confirm("Esta Seguro de eliminar el producto: "+id)) {
      this.VehiculoService.deleteVehiculo(this.Vehiculo.id)
      this.router.navigate(["vehiculo"])
    }
    else{
      this.router.navigate(["vehiculo"])
    }
  }
  
  Onvehiculo(){
    this.router.navigate(["tab-vehiculo"])
    
  }


}
