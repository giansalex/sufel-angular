import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DocumentService, AuthService } from '../../services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileSaverService } from '../../../shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentComponent implements OnInit {
  doc$: Observable<any>;
  doc: any;
  constructor(
    private auth: AuthService,
    private client: DocumentService,
    private saver: FileSaverService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.doc$ = this.client.getInfo();
    this.doc$.subscribe(
      data => this.doc = data,
      () => this.logout()
    );
  }

  downloadXml() {
    if (this.doc.xmlFile) {
      this.saveFile(this.doc.xmlFile);
      return;
    }

    this.openSnackBar('Descargando XML');
    this.client.getXml()
    .subscribe(f => {
      this.doc.xmlFile = f;
      this.saveFile(f);
    });
  }

  downloadPdf() {
    if (this.doc.pdfFile) {
      this.saveFile(this.doc.pdfFile);
      return;
    }

    this.openSnackBar('Descargando PDF');
    this.client.getPdf()
    .subscribe(f => {
      this.doc.pdfFile = f;
      this.saveFile(f);
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
        return 'BOLETA DE VENTA ELECTRÓNICA';
      case '07':
        return 'NOTA DE CRÉDITO ELECTRÓNICA';
      case '08':
        return 'NOTA DE DÉBITO ELECTRÓNICA';
      default:
        return 'FACTURA ELECTRÓNICA';
    }
  }

  private saveFile(file: Blob) {
    const doc = this.doc;
    const filename = [
      doc.emisor,
      doc.tipo,
      doc.serie,
      doc.correlativo
    ].join('-');

    this.saver.saveAs(file, filename);
  }
}
