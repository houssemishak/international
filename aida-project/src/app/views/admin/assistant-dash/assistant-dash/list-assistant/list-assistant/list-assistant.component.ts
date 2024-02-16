import { Component } from '@angular/core';

@Component({
  selector: 'app-list-assistant',
  templateUrl: './list-assistant.component.html',
  styleUrls: ['./list-assistant.component.css']
})
export class ListAssistantComponent {
  motDePasse: string = '';  // Initialisez avec une valeur par défaut
  confirmationMotDePasse: string = '';
}
