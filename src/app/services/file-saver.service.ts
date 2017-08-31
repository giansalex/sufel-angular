import { Injectable } from '@angular/core';

declare var saveAs: any;

@Injectable()
export class FileSaverService {

  constructor() { }

  save64(b64, filename, mimeType) {
    const blob = this.b64ToBlob(b64, mimeType);
    saveAs(blob, filename);
  }

  b64ToBlob(b64Data, contentType, sliceSize = 512) {
    contentType = contentType || '';

    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
}
