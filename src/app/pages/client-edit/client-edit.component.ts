import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { Client } from '../../model/client';
import { Address } from '../../model/address';

// client edit page with form to edit client, pop up dialog for confirmation edit client
@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  id = this.activatedRoute.snapshot.params['id'];
  clientDetails: any = {};

  constructor(
    private service: ClientService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.clientDetails = new Client();
    this.clientDetails.address = new Address();
  }

  ngOnInit() {
    this.service.getClient(this.id).subscribe((data: {}) => {
      this.clientDetails = data;
    });
  }

  editClient() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Are you sure you want to update?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.updateClient(this.id, this.clientDetails).subscribe(() => {
          this.router.navigate(['/client-list']);
        });
      }
    });
  }
}
