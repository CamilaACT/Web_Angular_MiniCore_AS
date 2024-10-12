import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';
import { TareaFechas } from '../../interfaces/tarea-fechas';
import { UtilidadService } from '../../Reutilizable/utilidad-service';

import { MAT_DATE_FORMATS } from '@angular/material/core';
import moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export const MY_DATE_FORMATS={
  parse:{
    dateInput: 'YYYYMMDD'
  },
  display:{
    dateInput : 'YYYYMMDD',
    monthYearLabel:'MMMM YYYY'
  }
}


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css',
  providers: [
    {
      provide:MAT_DATE_FORMATS,useValue:MY_DATE_FORMATS
    }
  ]
})
export class TareaComponent implements OnInit {
  formularioBusqueda:FormGroup;
  mostrarLoading:boolean=false;
  tareas: any[] = []; // Lista para almacenar las tareas
  displayedColumns: string[] = ['NombreUsuario', 'NombreTarea', 'Descripcion', 'FechaInicio', 'EstadoTarea', 'DiasRetraso'];
  datosListaTarea = new MatTableDataSource(this.tareas);
  @ViewChild(MatPaginator) paginacionTabla!:MatPaginator;

  constructor(

    private fb:FormBuilder,

    private _tareaServicio:TareaService,
    private _utilidadServicio:UtilidadService
    
  ){

    this.formularioBusqueda=this.fb.group({
    fechainic:["",Validators.required],
    fechafin:["",Validators.required],

    });

  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.datosListaTarea.paginator=this.paginacionTabla;
  }

  aplicarFiltroTabla(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.datosListaTarea.filter=filterValue.trim().toLocaleLowerCase();
    //this.buscarUsuarioPorNombre(filterValue);
  }

  buscarPendientes(){
    this.mostrarLoading=true;
    const request:TareaFechas={
      fecha_inic: moment(this.formularioBusqueda.value.fechainic).format('YYYYMMDD'),
      fecha_fin:moment(this.formularioBusqueda.value.fechafin).format('YYYYMMDD')

      
    }

    this._tareaServicio.buscarTareasAtrasadas(request).subscribe({
      next:(data)=>{
        if(data.codigoError === -1){
          this.tareas = data.result; 
          this._utilidadServicio.mostrarAlerta(data.message,"Usuario encontrado")

        }else{
          this._utilidadServicio.mostrarAlerta(data.message,"Intentelo nuevamente")
        }
      },
      complete:()=>{
        this.mostrarLoading=false;
      },
      error:()=>{
        this._utilidadServicio.mostrarAlerta("Error inesperado","Intentelo nuevamente")
      }
    })
  }
}
