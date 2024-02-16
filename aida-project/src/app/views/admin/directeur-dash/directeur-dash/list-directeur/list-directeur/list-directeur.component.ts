import { Component } from '@angular/core';

@Component({
  selector: 'app-list-directeur',
  templateUrl: './list-directeur.component.html',
  styleUrls: ['./list-directeur.component.css']
})
export class ListDirecteurComponent {
  motDePasse: string = '';  // Initialisez avec une valeur par défaut
  confirmationMotDePasse: string = '';
}
