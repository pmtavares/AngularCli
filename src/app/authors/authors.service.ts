import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }

  getAuthors() {
    return ["Author1", "Author2", "Author3", "Author4"];
  }

}
