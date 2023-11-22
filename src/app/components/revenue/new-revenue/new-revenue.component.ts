import { ExtractServices } from '../../../services/extract.services';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-financer-new-revenue',
  templateUrl: './new-revenue.component.html',
  styleUrls: ['./new-revenue.component.css']
})
export class NewRevenueComponent {

  constructor(
    private extractServices: ExtractServices,
    private matSnackBar: MatSnackBar,
  ) { }

  @Output() addedRevenue = new EventEmitter<any>();

  revenueForm = new FormGroup({
    description: new FormControl('', Validators.required),
    value: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
  });

  addRevenue() {
    const value = this.revenueForm.get('value')?.value;
    const description = this.revenueForm.get('description')?.value;
    const date = this.revenueForm.get('date')?.value;

    const obj = {
      "date": date,
      "description": description,
      "value": value,
    };

    this.extractServices.postExtract(obj).subscribe(
      () => {
        const successMessage = value! < 0 ? 'Despesa criada com sucesso!' : 'Receita criada com sucesso!';
        this.openSnackBar(successMessage, 'Fechar');
        this.revenueForm.reset();
      },
      (err) => {
        this.openSnackBar('Ocorreu um erro ao criar a receita ou despesa.', 'Fechar');
        console.error('Erro ao criar a receita ou despesa:', err);
      });
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
