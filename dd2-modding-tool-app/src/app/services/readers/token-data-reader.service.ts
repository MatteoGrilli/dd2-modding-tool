import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { firstValueFrom, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenDataReaderService {

  private DEBUG = true;

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public async readTokenDataExport(path: string): Promise<Token> {
    return await firstValueFrom(this.httpClient.get(`/imports/${path}`, {responseType: 'text'})
      .pipe(
        tap(res => this.DEBUG ? console.log(res) : ''),
        map(res => ({} as Token))
      ));
  }
}
