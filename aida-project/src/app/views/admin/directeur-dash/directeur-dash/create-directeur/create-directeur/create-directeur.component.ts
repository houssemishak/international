import { Component } from '@angular/core';

@Component({
  selector: 'app-create-directeur',
  templateUrl: './create-directeur.component.html',
  styleUrls: ['./create-directeur.component.css']
})
export class CreateDirecteurComponent {
  motDePasse: string = '';  // Initialisez avec une valeur par défaut
  confirmationMotDePasse: string = '';
}
