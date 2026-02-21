import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
  status: 'completed' | 'in-progress';
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  activeFilter = 'all';

  filters = ['all', 'angular', 'typescript', 'rxjs', 'node'];

  projects: Project[] = [
    {
      title: 'Enterprise Banking Dashboard',
      description:
        'Large-scale Angular platform for Standard Chartered Bank. Features real-time data, complex RxJS data flows, OnPush change detection and reusable component libraries.',
      tags: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Angular Material'],
      github: '#',
      live: '#',
      featured: true,
      status: 'completed',
    },
    {
      title: 'Loyalty & Rewards Platform',
      description:
        'Consumer-facing Angular platform serving multiple banking clients. Modular component architecture with complex state management and REST API integration.',
      tags: ['Angular', 'TypeScript', 'RxJS', 'REST API'],
      github: '#',
      live: '#',
      featured: true,
      status: 'completed',
    },
    {
      title: 'GST Compliance Dashboard',
      description:
        'Angular dashboards and UI components for enterprise clients integrating with ClearTax GST and e-invoicing platform. ERP system integration.',
      tags: ['Angular', 'TypeScript', 'Node.js', 'REST API'],
      github: '#',
      live: '#',
      featured: false,
      status: 'completed',
    },
    {
      title: 'Portfolio Website',
      description:
        'This portfolio — built with Angular 17+, standalone components, signals, GSAP animations and TailwindCSS. Deployed on Netlify with CI/CD.',
      tags: ['Angular', 'TypeScript', 'GSAP', 'TailwindCSS', 'SCSS'],
      github: 'https://github.com/Anoop-Singh-FE/anoop-portfolio',
      live: '#',
      featured: false,
      status: 'completed',
    },
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter((p) =>
      p.tags.some((t) => t.toLowerCase().includes(this.activeFilter)),
    );
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}
