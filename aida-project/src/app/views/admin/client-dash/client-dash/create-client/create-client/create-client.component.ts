import { Component } from '@angular/core';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent {
  motDePasse: string = '';  // Initialisez avec une valeur par défaut
  confirmationMotDePasse: string = '';
}
