import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private apiServerUrl=environment.apiBaseUrl;

    constructor (private http: HttpClient){}
    
    public getEmployee(): Observable<Employee[]>{
        return this.http.get<Employee[]>('http://localhost:8080/employee/all');
    }
    public addEmployee(employee: Employee): Observable<Employee>{
        return this.http.post<Employee>('http://localhost:8080/employee/add' , employee);
    }
    public updateEmployee(employee: Employee): Observable<Employee>{
        return this.http.put<Employee>('http://localhost:8080/employee/update' , employee);
    }
    public deleteEmployee(employeeId: number): Observable<void>{
        return this.http.delete<void>('http://localhost:8080/employee/delete/${employeeId}');
    }
}
