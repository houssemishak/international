import { Component } from '@angular/core';

@Component({
  selector: 'app-list-consultant',
  templateUrl: './list-consultant.component.html',
  styleUrls: ['./list-consultant.component.css']
})
export class ListConsultantComponent {
  motDePasse: string = '';  // Initialisez avec une valeur par défaut
  confirmationMotDePasse: string = '';
}
