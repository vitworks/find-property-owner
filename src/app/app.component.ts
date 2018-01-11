import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Find Property Owner';
  private apiUrl = 'https://estated.com/api/property?token=3phhjPeBl2iEPGRPF19ihce2WavWRM&address=1512+32nd+ave&city=Sacramento&state=CA&zipcode=95822';
  // data: any = {};

  constructor (private http: HttpClient) {
  }

  getPropertyData(): void {
    this.http.get(this.apiUrl).subscribe(data => {
      console.log(data);
    });
  }
}
