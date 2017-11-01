import { Component, OnInit } from '@angular/core';
import { ClientService, AuthService, FileSaverService } from '../../services';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ClientService, FileSaverService]
})
export class HomeComponent implements OnInit {
  doc: any;
  constructor(
    private auth: AuthService,
    private client: ClientService,
    private saver: FileSaverService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.client.getDocument('info')
      .subscribe(
        r => this.doc = r,
        er => {
          this.logout();
        });
  }

  downloadXml() {
    if (this.doc.xmlFile) {
      this.saveFile(this.doc.xmlFile, 'text/xml');
      return;
    }

    this.openSnackBar('Descargando XML');
    this.client.getDocument('xml')
    .subscribe(f => {
      this.doc.xmlFile = f.xml;
      this.saveFile(f.xml, 'text/xml');
    });
  }

  downloadPdf() {
    if (this.doc.pdfFile) {
      this.saveFile(this.doc.pdfFile, 'application/pdf');
      return;
    }

    this.openSnackBar('Descargando PDF');
    this.client.getDocument('pdf')
    .subscribe(f => {
      this.doc.pdfFile = f.pdf;
      this.saveFile(f.pdf, 'application/pdf');
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

  logout() {
    this.auth.signOut();
  }

  getTipo(code: string) {
    switch (code) {
      case '03':
        return 'BOLETA ELECTRÓNICA';
      case '07':
        return 'NOTA DE CRÉDITO ELECTRÓNICA';
      case '08':
        return 'NOTA DE DÉBITO ELECTRÓNICA';
      default:
        return 'FACTURA ELECTRÓNICA';
    }
  }

  private saveFile(file, type) {
    this.saver.save64(file, this.doc.filename, type);
  }
}
