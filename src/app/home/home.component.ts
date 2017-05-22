import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Beef } from '../models/beef.model';
import { Chicken } from '../models/chicken.model';
import { Pork } from '../models/pork.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  /* Create toggles for visible area */
  private beefvis = false;
  private chickenvis = false;
  private porkvis = false;
  private buttonvis = true;

  beefmodel = new Beef('120-130F','130-135F','135-145F','155F or more');
  chickenmodel = new Chicken('160-165F','165F or more');
  porkmodel = new Pork('135-145F','145F or More', '190-205F');


  constructor(private http:Http, private router: Router){

    }

  beef(){
    this.beefvis = true;
    this.chickenvis = false;
    this.porkvis = false;
    this.buttonvis = false;
  }
  chicken(){
    this.beefvis = false;
    this.chickenvis = true;
    this.porkvis = false;
    this.buttonvis = false;
  }
  pork(){
    this.beefvis = false;
    this.chickenvis = false;
    this.porkvis = true;
    this.buttonvis = false;
  }
  back(){
    this.beefvis = false;
    this.chickenvis = false;
    this.porkvis = false;
    this.buttonvis = true;
  }

}
