import { Component, OnInit } from '@angular/core';
import { Advisor } from '../../model/advisor';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';

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
      email: 'aramiandrisoa@proxibanque.fr'
    },
    {
      lastName: 'Boureau',
      firstName: 'Audrey',
      email: 'aboureau@proxibanque.fr'
    },
    {
      lastName: 'Asri',
      firstName: 'Elias',
      email: 'easri@proxibanque.fr'
    }
  ];

  selectedAdvisor: Advisor | null = null;

  constructor(
    private route: ActivatedRoute
  ) { }

  selectAdvisor(advisor: Advisor): void {
    this.selectedAdvisor = advisor;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
