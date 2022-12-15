import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable()
export class AppService {
  httpClient = inject(HttpClient);

  getAllData = this.httpClient
    .get('https://api.publicapis.org/entries')
    .pipe(
      tap((x) => {
        console.log(x);
      })
    )
    .subscribe();
}
