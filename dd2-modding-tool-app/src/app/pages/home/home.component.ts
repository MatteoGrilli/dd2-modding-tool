import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalPathModalComponent, LocalPathModalComponentConfig } from 'src/app/components/modals/local-path-modal/local-path-modal.component';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly dialog: MatDialog,
    private readonly router: Router,
    private readonly profileService: ProfileService
  ) { }

  ngOnInit(): void { }

  openOriginalProfile() {
    this.profileService.setActiveProfileOriginal();
    this.router.navigate(['dashboard']);
  }

  openModFolderSelectionModal(editMode: boolean) {
    const config: MatDialogConfig<LocalPathModalComponentConfig> = {
      data: { mode: 'SELECT_FOLDER' },
      panelClass: 'TransparentModalBox'
    }
    this.dialog.open(LocalPathModalComponent, config).afterClosed().subscribe(path => {
      // this.profileService.setActiveProfileMod();
      console.log(path);
    });
  }
}

