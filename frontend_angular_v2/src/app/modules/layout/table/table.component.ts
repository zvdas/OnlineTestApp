import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit, AfterViewInit {

  @Input() tableData: any;
  @Input() formInputData: any;
  @Output() formDataEvent = new EventEmitter();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  data: any[] = [];

  columns: any;

  dataSource = new MatTableDataSource(this.data);
  
  displayedColumns: any;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getTableNames();
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getTableNames() {
    console.log(this.tableData)
    this.dataSource.data = this.tableData.data;
    this.columns = this.tableData.columns;
    this.displayedColumns = this.columns.map((x: { key: any; }) => x.key);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openAddTableDialog() {
    const dialogRef = this.dialog.open(this.formInputData.component, {
      disableClose: true,
      maxWidth: '100vw',
      width: '50%',
      data: {
        object: {},
        formTitles: this.formInputData.formTitles,
        formControlNames: this.formInputData.formControlNames,
        inputFormGroup: this.formInputData.inputFormGroup
      }
    })

    dialogRef.afterClosed().subscribe(res=>this.formDataEvent.emit(res));
  }

  openEditDialog(object: any) {
    const dialogRef = this.dialog.open(this.formInputData.component, {
      disableClose: true,
      maxWidth: '100vw',
      width: '50%',
      data: {
        object: object,
        formTitles: this.formInputData.formTitles,
        formControlNames: this.formInputData.formControlNames,
        inputFormGroup: this.formInputData.inputFormGroup
      }
    })

    dialogRef.afterClosed().subscribe(res=>this.formDataEvent.emit(res));
  }

  deleteSelected(id: string) {
    this.formDataEvent.emit(id);
  }

}
