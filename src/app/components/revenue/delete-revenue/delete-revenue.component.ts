import { ExtractServices } from '../../../services/extract.services';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-revenue',
  templateUrl: './delete-revenue.component.html',
  styleUrls: ['./delete-revenue.component.css']
})
export class DeleteRevenueComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteRevenueComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number,
    private extractServices: ExtractServices,
    private matSnackBar: MatSnackBar
  ) { }

  onSave(): void {
    const obj = {
      status: true
    }

    this.extractServices.cancelExtract(this.id, obj).subscribe(() => {
      this.openSnackBar('Operação cancelada com sucesso.', 'Fechar')
      this.dialogRef.close();
    }, (err) => {
      this.openSnackBar('Ocorreu um erro ao cancelar o lançamento.', 'Fechar');
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
