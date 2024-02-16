import { Component } from '@angular/core';

@Component({
  selector: 'app-create-assistant',
  templateUrl: './create-assistant.component.html',
  styleUrls: ['./create-assistant.component.css']
})
export class CreateAssistantComponent {
  motDePasse: string = '';  // Initialisez avec une valeur par défaut
  confirmationMotDePasse: string = '';
}
