import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { of } from 'rxjs';
import { catchError, retry, retryWhen } from 'rxjs/operators';
import { PagesService } from '../pages.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  @ViewChild(DatatableComponent) table: DatatableComponent;
  employeeList = [];
  selected = [];
  totalSize: number;
  pageSize: number;
  currentPage: number;
  limitList = [];
  limit: number = 10
  columns = [];
  loading: boolean = false;

  constructor(
    private employeeService: PagesService,
    private matDialog: MatDialog,
    private toastr: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {   
    this.loading = true;
    this.employeeService.getEmployeeList()
      // .pipe(retryWhen(this.retry.genericRetryStrategy()),
      //   catchError(error => of(error)))
      .subscribe((resp: any) => {
        if (resp.error != undefined) {
          this.toastr.open(resp.error.ExceptionMessage);
        }
        else {
          this.employeeList = resp;
        }
        this.loading = false;
      },
        error => {
          this.loading = false;
          this.toastr.open('This is not good!', 'Oops!');
        })
  }

  addEditEmployee(rowData, isEdit) {
    // const dialog = this.matDialog.open(EmployeeFormComponent, {
    //   disableClose: true,
    //   data: {
    //     row: rowData,
    //     isEdit: isEdit,
    //   }
    // })

    // dialog.afterClosed().subscribe(result => {
    //   if (result == true) {
    //     this.getEmployeeList();
    //   }
    // })
  }

  deleteEmployee(employeeId) {
    // employeeId = employeeId.toString();
    // this.employeeService.deleteEmployee(employeeId)
    //   .subscribe((resp: any) => {
    //     this.toastr.successToastr('Employee deleted successfully', 'Success!');
    //     this.getEmployeeList();
    //     this.loading = false;
    //   },
    //     error => {
    //       this.loading = false;
    //       this.toastr.errorToastr(error.error.ExceptionMessage, 'Oops!');
       // })
  }

  uploadEmployee() {
    // const dialog = this.matDialog.open(UploadEmployeeComponent, {
    //   disableClose: true,
    //   data: {
    //   }
    // })
    // dialog.afterClosed().subscribe(result => {
    //   if (result == true) {
    //     this.getEmployeeList();
    //   }
    // })
  }

  bulkDeleteEmployee() {
    // var empId = [];
    // for (let emp of this.selected) {
    //   empId.push(emp.EmployeeId.toString());
    // }
    // var bulk = new BulkEmployeeDeleteMetaData();
    // bulk.EmployeeId = empId;
    // this.loading = true;
    // this.employeeService.bulkDeleteEmployee(bulk)
    //   .subscribe((resp: any) => {
    //     this.toastr.successToastr('Employee deleted successfully', 'Success!');
    //     this.getEmployeeList();
    //     this.selected = [];
    //   },
    //     error => {
    //       this.loading = false;
    //       this.toastr.errorToastr(error.error.ExceptionMessage, 'Oops!');
    //     })
  }

  onActivate(event) {
    if (event.type == "click") {
      // if (event.column.prop != undefined && event.column.prop != "CompanyId") {
      //   this.routeService.redirectToURL("company/viewcompany/" + event.row.CompanyId);
      // }
    }
  }

  onSelect(event) {
    this.selected = event.selected;
  }





}
