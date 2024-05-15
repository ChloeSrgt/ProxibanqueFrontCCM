/* import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../servicesYann/client.service';

@Component({
    selector: 'app-client-show',
    templateUrl: './client-show.component.html',
    styleUrls: ['./client-show.component.css']
})
export class ClientShowComponent implements OnInit {

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
 */