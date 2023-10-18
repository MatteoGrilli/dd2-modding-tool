import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly DEBUG = false;

  private canEdit = false;
  private readonly ORIGINAL_PROFILE_CODE = 'ORIGINAL';
  private activeProfileCode: string = this.ORIGINAL_PROFILE_CODE;
  private fileList: Record<string, FileList> = {};

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  canEditProfile = () => this.canEdit;

  setActiveProfileOriginal() {
    this.canEdit = false;
    this.activeProfileCode = this.ORIGINAL_PROFILE_CODE;
  }

  setActiveProfileMod(code: string) {
    this.canEdit = true;
    // TODO: check if code exists
    this.activeProfileCode = code;
  }

  registerActiveProfileMod(fileList: FileList) {
    // TODO: waiting for official mod support
    const modProfileCode = 'MOD';
    this.activeProfileCode = modProfileCode;
    this.fileList[modProfileCode] = fileList;
    this.canEdit = true;
  }

  async getFileContents(path: string): Promise<string> {
    if (this.activeProfileCode === this.ORIGINAL_PROFILE_CODE) {
      const fileContents = await firstValueFrom(this.httpClient.get(`/imports/${path}`, {responseType: 'text'}));
      if (this.DEBUG) console.log('getFileContents read:', fileContents);
      return fileContents;
    } else {
      // TODO: waiting for official mod support
      const fileList = this.fileList[this.activeProfileCode];
      // TODO: would be good to have a conventional prefix to mod files,
      // but also let the user customize this part!
      console.log(fileList);
      return '';
    }
  }
}
