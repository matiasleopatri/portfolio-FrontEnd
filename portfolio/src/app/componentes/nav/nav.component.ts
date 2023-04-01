import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  datosPortfolio: any;

  constructor(private obtenerDatos:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos();
    
  }

}


