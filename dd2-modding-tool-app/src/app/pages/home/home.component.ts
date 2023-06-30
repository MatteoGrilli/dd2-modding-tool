import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LocalPathModalComponent, LocalPathModalComponentConfig } from 'src/app/components/modals/local-path-modal/local-path-modal.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  openLocalPathModal(editMode: boolean) {
    const config: MatDialogConfig<LocalPathModalComponentConfig> = {
      data: { mode: 'SELECT_FOLDER' },
      panelClass: 'TransparentModalBox'
    }
    this.dialog.open(LocalPathModalComponent, config).afterClosed().subscribe(path => {
      console.log(path);
    });
  }
}

