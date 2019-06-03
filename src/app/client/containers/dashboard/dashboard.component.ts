import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { LocalDataSource } from 'ng2-smart-table';
import { DocumentService } from '../../services';
import { FileSaverService } from '../../../shared/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  @ViewChild('filterForm', { static: false }) form: NgForm;
  filter: any = {};
  companies$: Observable<any>;
  currentDoc: any;
  select2Options: Select2Options = {
    allowClear: true,
    placeholder: 'Seleccionar Empresa',
    theme: 'bootstrap'
  };
  tipoDocs = [
    {value: '01', viewValue: 'Factura'},
    {value: '03', viewValue: 'Boleta'},
    {value: '07', viewValue: 'Nota de Crédito'},
    {value: '08', viewValue: 'Nota de Débito'}
  ];
  docSiglas = {
    '01': 'FAC',
    '03': 'BOL',
    '07': 'NCR',
    '08': 'NDB',
  };
  settings = null;

  data = new LocalDataSource();

  constructor (
    private api: DocumentService,
    private saver: FileSaverService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.filter.start =
    this.filter.end = new Date();
    this.filter.tipoDoc = '';
    this.settings = this.getColumnSettings();
    this.companies$ = this.api.getCompanies()
      .pipe(map(items => items.map(item => {
        return {
          id: item.ruc,
          text: item.ruc + ' - ' + item.nombre
        };
      })));
  }

  search() {
    if (!this.form.valid) {
      return;
    }

    this.api.filter(this.filter)
    .subscribe(values => this.data.load(values));
  }

  onSelect(event: any) {
    if (!event.isSelected) {
      this.currentDoc = null;
      return;
    }

    this.currentDoc = event.data;
  }

  onChangeCompany(event: any) {
    this.filter.emisor = event.value;
  }

  downloadXml() {
    if (!this.checkSelectedDoc()) {
      return;
    }

    this.openSnackBar('Descargando XML');

    this.api.getXml(this.currentDoc.id)
    .subscribe(f => {
      this.saveFile(f);
    });
  }

  downloadPdf() {
    if (!this.checkSelectedDoc()) {
      return;
    }

    this.openSnackBar('Descargando PDF');

    this.api.getPdf(this.currentDoc.id)
    .subscribe(f => {
      this.saveFile(f);
    });
  }

  trackByFn(index: number, item: any) {
    if (!item) { return null; }

    return item.value;
  }

  private getColumnSettings() {
    const siglas = this.docSiglas;

    return {
      actions: false,
      columns: {
        emisor: {
          title: 'Emisor'
        },
        tipo: {
          title: 'Tipo',
          valuePrepareFunction: function (cell, row) {
            if (siglas[cell]) {
              return siglas[cell];
            }

            return cell;
          }
        },
        serie: {
          title: 'Serie'
        },
        correlativo: {
          title: 'Correlativo'
        },
        fecha: {
          title: 'Fecha Emisión'
        },
        total: {
          title: 'Total'
        }
      }
    };
  }

  private checkSelectedDoc(): boolean {
    if (this.currentDoc) {
      return true;
    }
    this.openSnackBar('Seleccione un comprobante');

    return false;
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

  private saveFile(file: Blob) {
    const doc = this.currentDoc;
    const filename = [
      doc.emisor,
      doc.tipo,
      doc.serie,
      doc.correlativo
    ].join('-');

    this.saver.saveAs(file, filename);
  }
}
