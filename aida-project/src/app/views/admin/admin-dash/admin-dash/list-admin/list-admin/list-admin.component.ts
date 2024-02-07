import { Component } from '@angular/core';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent {
  motDePasse: string = '';  // Initialisez avec une valeur par défaut
  confirmationMotDePasse: string = '';
}
