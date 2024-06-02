import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/client';
import { Router } from '@angular/router';
import { Address } from '../../model/address';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'city', 'noTel', 'account', 'edit'];
  dataSource: Client[] = [];
  snackBar: any;

  constructor(private clientService: ClientService, private router: Router) {}

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
  }


  
  editClient(id: number, client : Client) {
    this.clientService.getClient(id).subscribe(
      result => {
        setTimeout(()=> {
          this.goToEditClient(id);
        }, 2000);
      },
      error=> {
        console.error('This was an error !', error);
        this.showMessage('Error Editing client','error');
      }
    )
  };

  

showMessage(message: string, type :string){
  this.snackBar.open(message, 'Close', {
    duration: 2000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: type === 'success' ? 'success-snackbar' : 'error-snackbar'
  });
}

  goToEditClient(id: number) {
    this.router.navigate(['/client-edit',id]);
  } 
  
  deleteClient(id: number) {
    this.clientService.deleteClient(id).subscribe(() => {
      this.dataSource = this.dataSource.filter(client => client.id !== id);
    });
  }
}
