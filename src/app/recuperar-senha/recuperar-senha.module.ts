import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';  // ← CUSTOM_ELEMENTS_SCHEMA importado
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecuperarSenhaPageRoutingModule } from './recuperar-senha-routing.module';
import { RecuperarSenhaPage } from './recuperar-senha.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RecuperarSenhaPageRoutingModule],
  declarations: [RecuperarSenhaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // ← presente
})
export class RecuperarSenhaPageModule {}