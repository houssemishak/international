import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { CreateAdminModule } from './views/admin/admin-dash/admin-dash/create-admin/create-admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    CreateAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
