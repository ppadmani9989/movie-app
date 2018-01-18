import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {observable} from 'rxjs/symbol/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
  apikey: string;
  constructor(private __jsonp: Jsonp) {
    this.apikey = 'd1d9104c8c84a8aefed5b1f164e3ea43';
    console.log('MovieService Initialized');
  }
  getPopular() {
   return this.__jsonp.request('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+ this.apikey)
      .map(res => res.json());
  }
  getInTheaters() {
    return this.__jsonp.request('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2018-01-23&primary_release_date.lte=2018-02-28&api_key='+this.apikey)
      .map(res => res.json());
  }
}
