import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Constans } from 'src/app/share/lib/constants';
import { ApiResponse } from 'src/app/share/models/api-response.models';
import { EmpleadoResponse } from '../models/empleado-response.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private _httpClient: HttpClient) { }

  getEmpleados():Observable<ApiResponse<EmpleadoResponse>>{
    return this._httpClient.get<ApiResponse<EmpleadoResponse>>(
      `${environment.baseApiUrl}/${Constans.DEV_NAME}`
    );
  }
}
