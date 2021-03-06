import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLMetadata } from '../core/metadata/api.metadata';
import { ApiService, API_URL } from '../core/services/api-configuration';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  urlMetadata: URLMetadata;

  constructor(
    private apiService: ApiService,
    private http: HttpClient,
  ) {
    this.urlMetadata = new URLMetadata();
  }

  getEmployeeList() {
    this.urlMetadata.URL = API_URL.Employee_URL;
    this.urlMetadata.MethodName = "GetEmployeeList()";
    this.urlMetadata.Params = null;
    return this.apiService.get(this.urlMetadata);
  }

  getEmployeeInfo(employeeId) {
    this.urlMetadata.URL = API_URL.Employee_URL;
    this.urlMetadata.MethodName = "GetEmployeeInfo(employeeId=" + employeeId + ")";
    this.urlMetadata.Params = null;
    return this.apiService.get(this.urlMetadata);
  }

  addEditEmployee(employee) {
    this.urlMetadata.URL = API_URL.Employee_URL;
    this.urlMetadata.MethodName = "AddEditEmployee";
    this.urlMetadata.Params = employee;
    return this.apiService.post(this.urlMetadata);
  }

  deleteEmployee(employeeId) {
    this.urlMetadata.URL = API_URL.Employee_URL;
    this.urlMetadata.MethodName = "DeleteEmployee(employeeId=" + employeeId + ")";
    this.urlMetadata.Params = null;
    return this.apiService.delete(this.urlMetadata);
  }

  bulkDeleteEmployee(bulk) {
    this.urlMetadata.URL = API_URL.Employee_URL;
    this.urlMetadata.MethodName = "BulkDeleteEmployee";
    this.urlMetadata.Params = bulk;
    return this.apiService.post(this.urlMetadata);
  }

  uploladImage(formData) {
    this.urlMetadata.URL = API_URL.Common_URL;
    this.urlMetadata.MethodName = "UploadImage";
    this.urlMetadata.Params = formData;
    return this.apiService.post(this.urlMetadata);
  }

  uploadEmployeeExcel(formData: FormData) {
    this.urlMetadata.URL = API_URL.Employee_URL;
    this.urlMetadata.MethodName = "UploadEmployee";
    this.urlMetadata.Params = formData;
    return this.apiService.uploadFile(this.urlMetadata, formData);
  }

  getDynamicEmployeeList(dynamicEmp) {
    this.urlMetadata.URL = API_URL.Employee_URL;
    this.urlMetadata.MethodName = "GetDynamicEmployeeList";
    this.urlMetadata.Params = dynamicEmp;
    return this.apiService.post(this.urlMetadata);
  }



}