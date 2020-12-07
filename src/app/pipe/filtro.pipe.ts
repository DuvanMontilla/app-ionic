import { Pipe, PipeTransform } from '@angular/core';
import { title } from 'process';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(
    arreglo: any[],
     texto: string = '',
     columna: string = 'title'
     ): any [] {

    texto = texto.toLowerCase();
    console.log('columna', columna);
    console.log('texto', texto);
    

    if(texto === '') {
      return arreglo;
    }

    if(!arreglo) {
      return arreglo;
    }

    return arreglo.filter(
      item => item[columna].toLowerCase().includes(texto)
      )  
  }

}
