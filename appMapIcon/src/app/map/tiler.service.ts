import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TilerService {

  constructor(private http: HttpClient) {

   }

   public getTiler(): void {
     // https://api.maptiler.com/maps/basic/style.json?key=BuNi4FPIgsaSVnVlaLoQ

     // tslint:disable-next-line: max-line-length
     this.http.get('https://api.maptiler.com/maps/basic/style.json?key=BuNi4FPIgsaSVnVlaLoQ').subscribe((data) => {

     });

   }
}
