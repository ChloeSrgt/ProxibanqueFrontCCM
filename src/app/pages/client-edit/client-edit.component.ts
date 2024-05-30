import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../model/client';
import { Address } from '../../model/address';

@Component({
  selector: 'app-client-edit',
  standalone: false,
  templateUrl: './client-edit.component.html',
  styleUrl: './client-edit.component.css'
})
export class ClientEditComponent implements OnInit{
  id = this.activatedRoute.snapshot.params['id'];
  clientDetails: any = {};


  constructor( private service: ClientService, private activatedRoute: ActivatedRoute, private router: Router) {
      this.clientDetails = new Client();
      this.clientDetails.address = new Address();
  }

  ngOnInit() {
    this.service.getClient(this.id).subscribe((data: {}) => {
      this.clientDetails = data;
    })
  }

/*   updateClient() {
    if ( window.confirm('Are you sure, you want to update?')) {
      this.service.updateClient(this.id, this.clientDetails).subscribe(data => {
        this.router.navigate(['/clients-list'])
      })
    }
  } */

  updateClient(){
    if(window.confirm('Are you sure, you want to update ?')){
      this.service.updateClient(this.id,this.clientDetails).subscribe(result=>{
        this.router.navigate(['/client-list']);
      },
      error=>{
        /* console.error('There was an error', error); */
        this.router.navigate(['/client-list'])
      }
    );
    }
  }

}

/* onSubmit() {
  this.clientService.createClient(this.client).subscribe(
    result => {
      this.showNotification('Client created successfully!', 'success');
      setTimeout(() => {
        this.gotoClientList();
      }, 2000); // Redirection après 2 secondes
    },
    error => {
      console.error('There was an error!', error);
      this.showNotification('Error creating client', 'error');
    }
  );
}

showNotification(message: string, type: string) {
  this.snackBar.open(message, 'Close', {
    duration: 2000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: type === 'success' ? 'success-snackbar' : 'error-snackbar'
  });
}

gotoClientList() {
  this.router.navigate(['/client-list']);
}
} */
