import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';  // ← adicione

register();  // ← adicione antes do @Component

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
  standalone: false,
})
export class RecuperarSenhaPage implements OnInit {
  constructor() { }
  ngOnInit() { }
}