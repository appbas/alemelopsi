import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Testimonials } from './components/testimonials/testimonials';
import { Footer } from './components/footer/footer';
import { MetodoIc } from './components/metodo-ic/metodo-ic';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Hero,
    About,
    Services,
    Testimonials,
    Footer,
    MetodoIc,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('alemelopsi');
}
