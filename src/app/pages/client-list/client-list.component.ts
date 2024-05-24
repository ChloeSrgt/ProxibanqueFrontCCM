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
    displayedColumns: string[] = ['id', 'lastName', 'firstName', 'city', 'noTel', 'actions'];
    dataSource: Client[] = [];

    constructor(private clientService: ClientService, private router: Router) {}

    ngOnInit(): void {
        this.clientService.getClients().subscribe((data: Client[]) => {
            this.dataSource = data.map(client => {
                if (!client.address) {
                    client.address = new Address();
                }
                return client;
            });
        });
    }

    showClient(id: number) {
    }

    editClient(id: number) {
    }

    deleteClient(id: number) {
        this.clientService.deleteClient(id).subscribe(() => {
            this.dataSource = this.dataSource.filter(client => client.id !== id);
        });
    }
}
