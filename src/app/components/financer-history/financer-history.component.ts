import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditRevenueComponent } from 'src/app/components/revenue/edit-revenue/edit-revenue.component';
import { DeleteRevenueComponent } from 'src/app/components/revenue/delete-revenue/delete-revenue.component';
import { ExtractServices } from 'src/app/services/extract.services';

@Component({
  selector: 'app-financer-history',
  templateUrl: './financer-history.component.html',
  styleUrls: ['./financer-history.component.css']
})
export class FinancerHistoryComponent {

  dateStartInitial = new Date();
  dateStartEnd = new Date();
  extratoData: any[] = [];
  balance: number = 0;

  range = new FormGroup({
    start: new FormControl<Date | null>(new Date()),
    end: new FormControl<Date | null>(new Date()),
  });

  constructor(
    private router: Router,
    private extractServices: ExtractServices,
    private dialog: MatDialog,
  ) {

    this.dateStartInitial.setDate(this.dateStartEnd.getDate() - 2);

    this.range = new FormGroup({
      start: new FormControl<Date | null>(this.dateStartInitial),
      end: new FormControl<Date | null>(this.dateStartEnd),
    });
  }

  handleNewRevenue() {
    this.router.navigate(['/extrato/novo-lancamento']);
  }

  filterData(): void {
    const start = this.range.get('start')?.value;
    const end = this.range.get('end')?.value;

    this.extractServices.getExtract(start!, end!).subscribe(data => {
      this.extratoData = data.extrato;
      this.balance = data.balance;
    });
  }

  ngOnInit(): void {
    this.range.valueChanges.subscribe(() => {
      this.filterData();
    });

    this.filterData();
  }

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteRevenueComponent, {
      width: '400px',
      height: '150px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      this.filterData();
    });
  }

  openEditModal(element: any): void {
    const dialogRef = this.dialog.open(EditRevenueComponent, {
      width: '600px',
      height: '300px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.filterData();
    });
  }
}
