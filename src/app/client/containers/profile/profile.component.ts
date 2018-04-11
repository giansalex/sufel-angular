import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ProfileService } from '../../services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  pass: any = {};
  @ViewChild("passForm") form: NgForm;

  constructor(
    private api: ProfileService,
    public snackBar: MatSnackBar
  ) { }

  changePassword() {
    if (!this.form.valid) {
      return;
    }

    this.api.changePassword(this.pass)
    .subscribe(
      res => this.showMessage("Contraseña Actualizada"),
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
