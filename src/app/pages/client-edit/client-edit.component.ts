import { Component, OnInit } from '@angular/core';
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
  snackBar: any;


  constructor( private service: ClientService, private activatedRoute: ActivatedRoute, private router: Router) {
      this.clientDetails = new Client();
      this.clientDetails.address = new Address();
  }

  ngOnInit() {
    this.service.getClient(this.id).subscribe((data: {}) => {
      this.clientDetails = data;
    })
  }



  editClient(){
    if ( window.confirm('Are you sure, you want to update?')) {
      this.service.updateClient(this.id, this.clientDetails).subscribe(data => {
        this.router.navigate(['/client-list'])
      })
    }
  };


showMessage(message: string, type :string){
  this.snackBar.open(message, 'Close', {
    duration: 2000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: type === 'success' ? 'success-snackbar' : 'error-snackbar'
  });
}

}
