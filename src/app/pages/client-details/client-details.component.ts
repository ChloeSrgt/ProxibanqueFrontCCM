import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

// client details page with client details
@Component({
  selector: 'app-client-details',
  standalone: false,
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.css'
})
export class ClientDetailsComponent implements OnInit{

    id = this.activatedRoute.snapshot.params['id'];
    clientDetails: any = {};

    constructor(private service: ClientService, private activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.service.getClient(this.id).subscribe((data: {}) => {
            this.clientDetails = data;
        })
    }

    gotoList() {
        this.router.navigate(['/clients-list']);
        return false;
    }


}
