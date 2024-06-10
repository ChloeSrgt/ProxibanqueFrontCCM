import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/client';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';  
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { Address } from '../../model/address';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'city', 'noTel', 'account', 'edit'];
  dataSource: Client[] = [];

  constructor(
    private clientService: ClientService, 
    private router: Router, 
    private dialog: MatDialog,
    private snackBar: MatSnackBar  
  ) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((data: Client[]) => {
      this.dataSource = data.map(client => {
        if (!client.address) {
          client.address = new Address();
        }
        if (!client.noTel) {
          client.noTel = 'N/A'; 
        }
        return client;
      });
    });
  }

  showClient(id: number) {
    this.router.navigate(['/accounts', id]);
  };

  editClient(id: number, client: Client) {
    this.clientService.getClient(id).pipe(
      tap(result => {
        setTimeout(()=> {
          this.goToEditClient(id);
        }, 2000);
      }),
      catchError(error => {
        console.error('There was an error!', error);
        this.showMessage('Error Editing client', 'error');
        return of(null);
      }
    )).subscribe();
  };

  clientInfo(id: number): void {
    this.router.navigate(['/client-info', id]);
  }

  showMessage(message: string, type: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: type === 'success' ? 'success-snackbar' : 'error-snackbar'
    });
  }

  goToEditClient(id: number) {
    this.router.navigate(['/client-edit', id]);
  } 

  deleteClient(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Are you sure you want to delete?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clientService.deleteClient(id).subscribe(() => {
          this.dataSource = this.dataSource.filter(client => client.id !== id);
        });
      }
    });
  }
}
