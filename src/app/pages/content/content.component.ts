import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: String =
    'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/80C64C0B63382CD3ED2653356125F275F63D036028A77D38DC3286AD851A6833/scale?width=1200&aspectRatio=1.78&format=webp';
  contentTitle: String = 'MINHA NOTICIA';
  contentDescription: String =
    'Após cinco anos do estalar de Thanos, Scott Lang, o Homem-Formiga, emerge do Reino Quântico e propõe aos Vingadores sobreviventes a ideia de viajar no tempo para resgatar os desaparecidos, desencadeando o enredo principal de “Vingadores: Ultimato”.  Atualmente, Tony Stark está aposentado e desfrutando de sua vida com sua filha, Morgan. Inicialmente, ele hesita em relação à ideia de ressuscitar os desaparecidos, ciente dos riscos envolvidos.';

  constructor() {}

  ngOnInit(): void {}
}
