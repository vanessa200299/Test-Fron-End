import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RouteLink } from 'src/app/share/models/route-link.model';
import { Empleado } from '../models/empleado.model';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss'],
})
export class EmpleadosComponent implements OnInit {
  displayedColumns: string[] = ['name', 'last_name', 'birthday'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Empleado>();
  public createLink: RouteLink;
  constructor(private empleadoService: EmpleadoService) {
    this.createLink = {
      name: 'CreateEmpleado',
      route: 'create',
    };
  }

  ngAfterViewInit() {
    this.paginator.pageSize = 10;
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe((response) => {
      this.dataSource.data = response.data.employees;
    });
  }
}
