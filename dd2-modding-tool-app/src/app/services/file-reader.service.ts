import { Injectable } from '@angular/core';
import { ProfileService } from './profile.service';
import { readObject } from '../utils/reader.utils';

@Injectable({
  providedIn: 'root'
})
export class FileReaderService {

  constructor(
    private readonly profileService: ProfileService
  ) { }

  public async readFileObjects(fileName: string): Promise<any[]> {
    const fileContents = await this.profileService.getFileContents(fileName);
    const objectDescriptions = fileContents.match(
      /(?<=element_start)(.+?)(?=element_end)/gs
    );
    return objectDescriptions?.map(description => readObject<any>(description)) ?? [];
  }
}
