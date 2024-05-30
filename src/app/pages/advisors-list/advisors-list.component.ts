import { Component, OnInit } from '@angular/core';
import { Advisor } from '../../model/advisor';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/client';

@Component({
  selector: 'app-advisors-list',
  standalone: false,
  templateUrl: './advisors-list.component.html',
  styleUrl: './advisors-list.component.css'
})
export class AdvisorsListComponent implements OnInit {

  advisors: Advisor[] = [
    {
      lastName: 'Ramiandrisoa',
      firstName: 'Agnès',
      email: 'aramiandrisoa@proxibanque.fr',
      clients: [
        new Client({ firstName: 'Marina', lastName: 'Sinai' }),
        new Client({ firstName: 'Christophe', lastName: 'Galtier' }),
        new Client({ firstName: 'Grégoire', lastName: 'Bassora' }),
        new Client({ firstName: 'Maurice', lastName: 'Arica' }),
        new Client({ firstName: 'Josette', lastName: 'Dumont' })
      ]
    },
    {
      lastName: 'Boureau',
      firstName: 'Audrey',
      email: 'aboureau@proxibanque.fr',
      clients: [
        new Client({ firstName: 'Didier', lastName: 'Deschamps' }),
        new Client({ firstName: 'Cindy', lastName: 'Galliano' }),
        new Client({ firstName: 'Laurie', lastName: 'Damiette' }),
        new Client({ firstName: 'Paul', lastName: 'Calera' })
      ]
    },
    {
      lastName: 'Asri',
      firstName: 'Elias',
      email: 'easri@proxibanque.fr',
      clients: [
        new Client({ firstName: 'Philippe', lastName: 'Lucas' }),
        new Client({ firstName: 'Mireille', lastName: 'Matthieu' }),
        new Client({ firstName: 'Tatiana', lastName: 'Thane' }),
        new Client({ firstName: 'Pablo', lastName: 'Molina' })
      ]
    },
    {
      lastName: 'Durozier',
      firstName: 'Alexane',
      email: 'adurozier@proxibanque.fr',
      clients: [
        new Client({ firstName: 'Emilie', lastName: 'Jones' }),
        new Client({ firstName: 'Peter', lastName: 'Parker' }),
        new Client({ firstName: 'Theophil', lastName: 'Delamare' }),
        new Client({ firstName: 'Carlos', lastName: 'Duboc' }),
        new Client({ firstName: 'Pierre', lastName: 'Simon' }),
        new Client({ firstName: 'Lily', lastName: 'Potter' })
      ]
    },
    {
      lastName: 'Spaak',
      firstName: 'Marine',
      email: 'mspaak@proxibanque.fr',
      clients: [
        new Client({ firstName: 'Coralie', lastName: 'Lannion' }),
        new Client({ firstName: 'Marie', lastName: 'Erquy' }),
        new Client({ firstName: 'Barnabé', lastName: 'Le Faou' }),
        new Client({ firstName: 'Renée', lastName: 'Guirec' })
      ]
    }
  ];

  selectedAdvisor: Advisor | null = null;

  constructor(
    private route: ActivatedRoute
  ) { }

  sortAdvisors(): void {
    this.advisors.sort((a, b) => a.lastName.localeCompare(b.lastName));
  }

  sortClients(): void {
    this.advisors.forEach(advisor => {
      advisor.clients.sort((a, b) => a.lastName.localeCompare(b.lastName));
    });
  }

  selectAdvisor(advisor: Advisor): void {
    this.selectedAdvisor = advisor;
  }

  ngOnInit(): void {
    this.sortAdvisors();
    this.sortClients();
  }
}
