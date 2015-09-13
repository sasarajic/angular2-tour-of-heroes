import {bootstrap} from 'angular2/angular2';
import {ROUTER_BINDINGS} from 'angular2/router';
import {HeroService} from './hero-service';
import {FilterService} from './filter-service';
import {AppComponent} from './app-component';

bootstrap(AppComponent, [ROUTER_BINDINGS, FilterService, HeroService]);
