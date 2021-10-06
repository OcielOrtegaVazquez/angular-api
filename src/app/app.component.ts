import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

/* Importamos el servicio creado */
import { CarpetaInvestigacionService } from './services/carpeta-investigacion.service'; 

/* Importamos Mat Table Source */
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

/* Importamos la interface */
import { CarpetaInvestigacion } from './interfaces/carpeta-investigacion';

const ELEMENT_DATA_CARPETA : CarpetaInvestigacion[] = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Angular-API';

  displayedColumnsCarpeta: string[] = ['ID_CARPETA', 'NUM_CARPETA_INVESTIGACION', 'FECHA_INICIO', 'HORA_INICIO','SINTESIS','FECHA_HECHOS','ID_SEDE_SUBSEDE','ID_BIEN_ASEGURADO'];
  dataSourceCarpeta = new MatTableDataSource<CarpetaInvestigacion>(ELEMENT_DATA_CARPETA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort ;

  constructor(
    private carpetaInvestigacionService: CarpetaInvestigacionService,
  ){
    
  }

  ngOnInit(){
    this.getAllCarpetaInvestigacion();
  }

  ngAfterViewInit(){
  
    /* Paginator Carpetas de Investigacion */
    this.dataSourceCarpeta.paginator = this.paginator;
    this.dataSourceCarpeta.sort = this.sort;
  }

  getAllCarpetaInvestigacion(){
    this.carpetaInvestigacionService.getAllCarpetaInvestigacion()
    .subscribe(allCarpeta => this.dataSourceCarpeta.data=allCarpeta as CarpetaInvestigacion[])
  }

  getCarpetaInvestigacion(){
    this.carpetaInvestigacionService.getCarpetaInvestigacion(4)
    .subscribe(carpeta => {
      console.log(carpeta);
    })
  }

  /* Filtro de busqueda carpetas de Investigacion */  
  applyFilterCarpeta(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceCarpeta.filter = filterValue.trim().toLowerCase();
  }
  
}
