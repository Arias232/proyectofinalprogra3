import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabVehiculoDataSource, TabVehiculoItem } from './tab-vehiculo-datasource';
import { VehiculoService } from 'src/app/services/vehiculo.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-vehiculo',
  templateUrl: './tab-vehiculo.component.html',
  styleUrls: ['./tab-vehiculo.component.css']
})

export class TabVehiculoComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TabVehiculoItem>;
  dataSource: TabVehiculoDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nombre', 'marca', 'modelo', 'placa', 'average', 'createAt','hora', 'precio' ];

  constructor(private Vehiculoservice:VehiculoService, private router:Router) {
    this.dataSource = new TabVehiculoDataSource();
  }

  ngOnInit():void{
    this.dataSource = new TabVehiculoDataSource();
    this.Vehiculoservice.getvehiculos().subscribe(
      res=>{
        this.dataSource.data=res;
        console.log(res)
      }
    )
    
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  Onvehiculo(){
    this.router.navigate(["vehiculo"])
  }
}
