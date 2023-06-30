import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameFilesService {

  private originalGameFiles: any;
  private modGameFiles: any;

  constructor() { }

  public OriginalGameFilesLoaded = () => this.originalGameFiles !== undefined;

  public LoadOriginalGameFiles() {

  }
}
