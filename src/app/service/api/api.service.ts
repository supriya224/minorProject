import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpResponse, HttpErrorResponse} from '@angular/common/http'
import { map,catchError} from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { LoginService } from '../login/login.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "http://localhost:3000/api";
  header: HttpHeaders;
  constructor(private http: HttpClient) { }
   headers_object = new HttpHeaders().set("Authorization", localStorage.getItem("token"));

  get(endpoint: string, optHeaders?: HttpHeaders) {
    return this.http
      .get(this.url + "/" + endpoint, { headers: optHeaders, observe: "response" })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  post(endpoint: string, body: any, optHeaders?: HttpHeaders) {
    return this.http
      .post(this.url + "/" + endpoint, body, {
        headers: optHeaders,
        observe: "response"
      })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  put(endpoint: string, body: any, optHeaders?: HttpHeaders) {
    return this.http
      .put(this.url + "/" + endpoint, body, {
        headers: optHeaders,
        observe: "response"
      })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  delete(endpoint: string, optHeaders?: HttpHeaders) {
    return this.http
      .delete(this.url + "/" + endpoint, {
        headers: optHeaders,
        observe: "response"
      })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }
  // another method which will use for operations
  extractData = (response: HttpResponse<any>) => {
    if (response.status === 404) {
      this.showalert("Data not Found");
    }
    return response.body || response.status;
  }
  // error handle method
  handleError(errorResponse: HttpErrorResponse) {


    if (errorResponse.status)
      // (errorResponse.error.message || "Something went wrong");
    return throwError(errorResponse);

    // if (errorResponse.error instanceof ErrorEvent) {
    // this.showalert(errorResponse.error.message || "somthing goes wrong!");
    //   console.log("client side error", errorResponse.error.message);
    // } else {
    // this.showalert(errorResponse || "server side error");
    //   console.log("server side error", errorResponse);
    // }
    // return throwError("server side problem ! No data found");
  }
  // alert method
  async showalert(message) {
   alert(message);
  }
}
