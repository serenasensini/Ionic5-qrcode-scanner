import { Component } from '@angular/core';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  codice: any;

  constructor(private barcodeScanner: BarcodeScanner) { }

  leggi(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.codice = barcodeData;
    }).catch(err => {
      console.log('Errore durante il recupero delle informazioni', err);
    });
  }
}
