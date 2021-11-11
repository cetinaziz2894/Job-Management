import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient: HttpClient) { }

  getJobDetail(url: string) {
    return this.httpClient.get<any>(url);
  }

  // async trigger(item:any, url:string ){
  //   return await this.httpClient.post(url,{"scheduleName": item}).toPromise();
  // }

  public getJSON(): Observable<any> {
    return this.httpClient.get("./assets/jobs.json");
  }

  getHistoriesLast() {
    return this.randomDate(new Date(2012, 0, 1), new Date());
  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  getJobHistories(): Observable<any>{
    return this.httpClient.get("./assets/jobHistories.json");;
  }

  getJobHistoriesLog(): Observable<any>{
    return this.httpClient.get("./assets/jobHistoriesLog.json");
  }

  getJobSchedules():Observable<any>{
    return this.httpClient.get("./assets/jobSchedules.json");
  }

  getLogs():Observable<any>{
    return this.httpClient.get("./assets/logs.json");
  }

  triggerManuel(item:any){
    return {
      "message":"POST call successful value returned in body",
      "status":200,
      "result":"Success.",
      "cond":"success",
      "data":item
    }
  }
}
