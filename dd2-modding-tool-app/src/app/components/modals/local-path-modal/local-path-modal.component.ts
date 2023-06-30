import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface LocalPathModalComponentConfig {
  mode: 'SELECT_FILE' | 'SELECT_FOLDER';
}

@Component({
  selector: 'app-local-path-modal',
  templateUrl: './local-path-modal.component.html',
  styleUrls: ['./local-path-modal.component.scss']
})
export class LocalPathModalComponent implements OnInit {

  public selectedFolder: FileList | null = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public config: any, // TODO: type this!
  ) { }

  ngOnInit(): void { }

  public saveSelection(selection: Event) {
    console.log('saveSelection', selection.target);
    this.selectedFolder = (selection.target as HTMLInputElement).files;
    console.log('selectedFolder: ', this.selectedFolder);
  }
}
