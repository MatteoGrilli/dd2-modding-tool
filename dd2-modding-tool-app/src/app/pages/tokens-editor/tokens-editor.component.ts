import { Component, OnInit } from '@angular/core';
import { TokenDataReaderService } from 'src/app/services/readers/token-data-reader.service';

@Component({
  templateUrl: './tokens-editor.component.html',
  styleUrls: ['./tokens-editor.component.scss']
})
export class TokensEditorComponent implements OnInit {

  constructor(
    private readonly tokenDataReader: TokenDataReaderService
  ) { }

  async ngOnInit(): Promise<void> {
    const result = await this.tokenDataReader.readTokenDataExport('token_data_export.Group.csv');
  }

}
