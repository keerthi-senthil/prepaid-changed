import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Plan } from 'src/app/plan'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminApiService { 
  private apiServerUrl=environment.apiBaseUrl;
  
  constructor(private http : HttpClient) { }
  
  public getPlans(): Observable<Plan[]> {
    return this.http.get<Plan[]>(`${this.apiServerUrl}/prepaid-plan/all`);
  }
  public getPlanData(planId:number): Observable<Plan>{
    return this.http.get<Plan>(`${this.apiServerUrl}/prepaid-plan/find/`+planId);

  }

  public addPlan(plan: Plan): Observable<Plan> {
    return this.http.post<Plan>(`${this.apiServerUrl}/prepaid-plan/add`, plan);
  }

  updatePlan(planId:number,plan:Plan): Observable<Plan>{
    return this.http.put<Plan>(`${this.apiServerUrl}/prepaid-plan/update/`+planId,plan);
  }

  public deletePlan(planId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/prepaid-plan/delete/${planId}`);
  }

  
  


  
}
