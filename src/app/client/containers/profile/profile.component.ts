import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ProfileService } from '../../services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  pass: any = {};
  @ViewChild('passForm', { static: false }) form: NgForm;

  constructor(
    private api: ProfileService,
    public snackBar: MatSnackBar,
    private ref: ChangeDetectorRef
  ) { }

  changePassword() {
    if (!this.form.valid) {
      return;
    }

    if (this.pass.new !== this.pass.repeat) {
      this.showMessage('Las contraseñas no coinciden.');
      return;
    }

    this.api.changePassword(this.pass)
    .subscribe(
      res => {
        this.pass = {};
        this.showMessage('Contraseña Actualizada');
        this.ref.detectChanges();
      },
      err => this.handleError(err)
    );
  }

  private showMessage(message: string) {
    this.snackBar.open(message, 'ACEPTAR', {
      duration: 2000,
    });
  }

  private handleError(er) {
    if (er.error && er.error.message) {
      this.showMessage(er.error.message);
      return;
    }
    this.showMessage('No se pudo actualizar');
  }
}
