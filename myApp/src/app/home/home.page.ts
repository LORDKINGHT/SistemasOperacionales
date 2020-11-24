import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { AlertController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public suma = 0;
  public multiplicacion = 1;
  public division = Number.MAX_VALUE;

  public getSumando = 1;
  public getMultiplicando = 2;
  public getDividendo = 2;
  public getDelay = 1000;

  public sumando = 1;
  public multiplicando = 2;
  public dividendo = 2;
  public delay = 1000;

  constructor(
    public alertController: AlertController,
  ) {}

  async multiplicar(){
    setTimeout( () => {
      console.log('Mult:' + this.multiplicacion);
      this.multiplicacion *= this.multiplicando;
      if (this.multiplicacion < Number.MAX_VALUE) {
        this.multiplicar();
      }
    }, this.delay);
}

  async sumar(){
      setTimeout( () => {
        console.log('Suma:' + this.suma);
        this.suma += this.sumando;
        if (this.suma < Number.MAX_VALUE) {
          this.sumar();
        }
      }, this.delay);
  }

async dividir(){
  setTimeout( () => {
    console.log('Div:' + this.division);
    this.division /= this.dividendo;
    if (this.division > 1) {
      this.dividir();
    }
  }, this.delay);
}

async getData(){
  this.delay = this.getDelay;
  this.dividendo = this.getDividendo;
  this.sumando = this.getSumando;
  this.multiplicando = this.getMultiplicando;
  this.presentAlert();
}

async presentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-alert',
    message: 'Datos modificados, puede iniciar las operaciones.',
    buttons: ['Gracias']
  });
  await alert.present();
}

async reiniciarSuma(){
this.suma = 0;
}

async reiniciarMultiplicacion(){
this.multiplicacion = 1;
}

async reiniciarDivision(){
this.division = Number.MAX_VALUE;
}
}
