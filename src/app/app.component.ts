import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Front-End';

  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
    });
  }

  ngAfterViewInit(): void {
    // Força refresh se conteúdo for renderizado dinamicamente
    setTimeout(() => AOS.refresh(), 200);
  }

  openMenu: boolean = false;
  toggleMenu() {
    this.openMenu = !this.openMenu;
  }

  download() {
    const link = document.createElement('a');
    link.href = 'assets/Curriculo_Ronaldo_Sabino.pdf';
    link.download = 'Curriculo_Ronaldo_Sabino.pdf';
    link.click();
  }
  controlCarousel: boolean = false;
  control() {
    this.controlCarousel = true;
    console.log('control', this.controlCarousel);
  }

  carouselItems: any[] = [
    {
      title: 'Angular',
      description: 'Framework baseado em TypeScript',
      image: 'assets/angular.png',
    },
    {
      title: 'TypeScript',
      description: 'Linguagem de programação',
      image: 'assets/typescript.png',
    },
    {
      title: 'Bootstrap',
      description: 'Biblioteca de estilização',
      image: 'assets/bootstrap.png',
    },
    {
      title: 'GitLab',
      description: 'Ferramenta de versionamento',
      image: 'assets/gitlab.png',
    },
    {
      title: 'K6 Grafana',
      description: 'Ferramenta de testes de carga',
      image: 'assets/k6.png',
    },
  ];
}
