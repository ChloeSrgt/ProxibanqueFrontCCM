import { Adresse } from './adresse';
export class Client {
  id: number=0;
  nom: string='';
  prenom: string='';
  login: string='';
  motDePasse: string='';
  adresse: Adresse={numero:'', rue:'', ville:''};


}
