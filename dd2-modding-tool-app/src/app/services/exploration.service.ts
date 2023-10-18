import { Injectable } from '@angular/core';
import { ProfileService } from './profile.service';

type FieldValue = string;
type FieldName = string;
type InterfaceName = string;
type FieldInfo = { values: FieldValue[]; count: number };
type Interface = Record<FieldName, FieldInfo>;

@Injectable({
  providedIn: 'root',
})
export class ExplorationService {
  constructor(private readonly profileService: ProfileService) {}

  public async exploreFile(fileName: string): Promise<any> {
    const fileContents = await this.profileService.getFileContents(fileName);
    const lines = fileContents.split('\r\n');
    lines.pop();

    this.printInterfaces(fileContents);
  }

  public printInterfaces(fileContents: string) {
    const fileItems = fileContents.match(
      /(?<=element_start)(.+?)(?=element_end)/gs
    );
    const allInterfaces: Record<InterfaceName, Interface> = {};

    // Extract interfaces
    fileItems?.forEach((fileItem) => {
      const lines = fileItem.split('\r\n').filter((line) => line !== '');
      const firstLineTokens = lines.shift()?.split(',');

      if (!firstLineTokens) {
        console.error('Incorrect file format!');
        return;
      }
      const id = firstLineTokens[1];
      const interfaceName = firstLineTokens[2];

      // Initialize if not present
      if (!allInterfaces[interfaceName]) {
        allInterfaces[interfaceName] = {};
        allInterfaces[interfaceName]['id'] = {
          values: [],
          count: 0,
        };
      }

      const currentInterface = allInterfaces[interfaceName];

      // Add new id
      currentInterface['id'].count++;
      if (!currentInterface['id'].values.includes(id)) {
        currentInterface['id'].values.push(id);
      }

      // Populate fields
      lines.forEach((line) => {
        const tokens = line.split(',').filter((token) => token !== '');
        const fieldName = tokens.shift();
        if (!fieldName) {
          console.error('Invalid file format!');
          return;
        }

        // Check if not present
        if (!currentInterface[fieldName]) {
          currentInterface[fieldName] = {
            values: [],
            count: 0,
          };
        }

        currentInterface[fieldName].count++;
        tokens.forEach((token) => {
          // Add new field
          if (!currentInterface[fieldName].values.includes(token)) {
            currentInterface[fieldName].values.push(token);
          }
        });
      });
    });

    // Print interfaces
    console.log(allInterfaces);
    Object.entries(allInterfaces).forEach((interfaceEntry) => {
      const interfaceName = interfaceEntry[0];
      const interfaceInfo = interfaceEntry[1];
      const interfaceDescription =
        `export interface ${interfaceName} {\r\n\t` +
        Object.entries(interfaceInfo)
          .map((fieldEntry) => {
            const fieldName = fieldEntry[0];
            const fieldInfo = fieldEntry[1];
            return (
              fieldName +
              (fieldInfo.count === interfaceInfo['id'].count ? '' : '?')
            );
          })
          .sort((a, b) => a.localeCompare(b))
          .join(': any,\r\n\t') +
        ': any\r\n}';

      console.log(interfaceDescription);
    });
  }
}
