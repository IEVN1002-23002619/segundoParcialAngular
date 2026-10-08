import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrl: './zodiaco.css',
  templateUrl: './zodiaco.html',
})
export class Zodiaco {
  nombre: string = '';
  apaterno: string = '';
  amaterno: string = '';
  dia: string = '';
  mes: string = '';
  anio: string = '';
  sexo: string = '';
  
  edadcalculada: number | null = null;
  signo: string = '';
  mostrargriterio: boolean = false;

  calcular(): void {
    if (!this.anio) return;

    const anioNum = parseInt(this.anio);
    const anioActual = new Date().getFullYear();

    // Cálculo exacto de la edad
    this.edadcalculada = anioActual - anioNum;

    // Cálculo del signo del horóscopo chino por residuo
    const signos = [
      'Mono', 'Gallo', 'Perro', 'Cerdo', 
      'Rata', 'Buey', 'Tigre', 'Conejo', 
      'Dragón', 'Serpiente', 'Caballo', 'Cabra'
    ];

    this.signo = signos[anioNum % 12];
    this.mostrargriterio = true;
  }
}