import { Component } from '@angular/core';

@Component({
  selector: 'app-create-consultant',
  templateUrl: './create-consultant.component.html',
  styleUrls: ['./create-consultant.component.css']
})
export class CreateConsultantComponent {
  motDePasse: string = '';  // Initialisez avec une valeur par défaut
  confirmationMotDePasse: string = '';
}
