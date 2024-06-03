import { Component, OnInit } from '@angular/core';
import { Advisor } from '../../model/advisor';
import { Client } from '../../model/client';
import { Chart, registerables } from 'chart.js';

// Enregistrer les composants nécessaires
Chart.register(...registerables);

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
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

  transactions: number[] = [];
  overdrawnClients: { client: Client, overDrawn: number, numAccount: string }[] = [];
  selectedAdvisor: Advisor | null = null;

  constructor() { }

  ngOnInit(): void {
    this.sortAdvisors();
    this.sortClients();
    this.generateOverdrawnClients();
    this.generateTransactions();
    this.createChart();
  }

  sortAdvisors(): void {
    this.advisors.sort((a, b) => a.lastName.localeCompare(b.lastName));
  }

  sortClients(): void {
    this.advisors.forEach(advisor => {
      advisor.clients.sort((a, b) => a.lastName.localeCompare(b.lastName));
    });
  }

  generateOverdrawnClients(): void {
    this.advisors.forEach(advisor => {
      advisor.clients.forEach(client => {
        const overDrawn = Math.floor(Math.random() * 250) + 1;
        const numAccount = Math.floor(10000 + Math.random() * 90000).toString();
        this.overdrawnClients.push({ client, overDrawn, numAccount });
      });
    });
  }

  generateTransactions(): void {
    for (let day = 1; day <= 31; day++) {
      this.transactions.push(Math.floor(Math.random() * 8000) + 1);
    }
  }

  createChart(): void {
    const canvas = document.getElementById('transactionChart') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas context not found');
      return;
    }

    const labels = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

    console.log('Chart Data:', this.transactions);
    console.log('Chart Labels:', labels);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'June (€)',
          data: this.transactions,
          backgroundColor: '#413993',
          borderColor: '#413993',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 8000,
            ticks: {
              callback: function(value) {
                return value + ' €';
              }
            }
          }
        }
      }
    });
  }
}
