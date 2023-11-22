import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExtractServices } from 'src/app/services/extract.services';

@Component({
  selector: 'app-edit-revenue',
  templateUrl: './edit-revenue.component.html',
  styleUrls: ['./edit-revenue.component.css']
})
export class EditRevenueComponent {

  constructor(
    public dialogRef: MatDialogRef<EditRevenueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number; description: string; date: Date; },
    private extractServices: ExtractServices,
    private matSnackBar: MatSnackBar
  ) { }

  onSave(): void {

    const obj = {
      description: this.data.description,
      date: this.data.date
    }

    this.extractServices.editExtract(this.data.id, obj).subscribe(() => {
      this.openSnackBar('Alteração realizada com sucesso.', 'Fechar')
      this.dialogRef.close();
    }, (err) => {
      this.openSnackBar('Ocorreu um erro ao alterar o lançamento.', 'Fechar');
      console.error('Erro ao criar a receita ou despesa:', err);
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}