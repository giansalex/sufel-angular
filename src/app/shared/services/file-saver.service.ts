import { Injectable } from '@angular/core';

declare var saveAs: any;

@Injectable()
export class FileSaverService {

  constructor() { }

  saveAs(blob: Blob, filename: string) {
    saveAs(blob, filename);
  }
}
