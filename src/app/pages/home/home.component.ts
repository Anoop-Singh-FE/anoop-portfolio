import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  roles = [
    'Senior Frontend Engineer',
    'Angular Specialist',
    'RxJS Expert',
    'UI Architect',
  ];
  currentRoleIndex = 0;
  currentRole = this.roles[0];
  isDeleting = false;
  displayText = '';
  charIndex = 0;

  skills = [
    { name: 'Angular', level: 95, color: '#dd0031' },
    { name: 'TypeScript', level: 90, color: '#3178c6' },
    { name: 'RxJS', level: 88, color: '#b7178c' },
    { name: 'NgRx', level: 82, color: '#ba2bd2' },
    { name: 'JavaScript', level: 90, color: '#f7df1e' },
    { name: 'HTML5/CSS3', level: 92, color: '#e34f26' },
    { name: 'SCSS/SASS', level: 88, color: '#cc6699' },
    { name: 'Angular Material', level: 85, color: '#6c8eff' },
    { name: 'Node.js', level: 65, color: '#339933' },
    { name: 'Git/GitHub', level: 85, color: '#f05032' },
    { name: 'REST APIs', level: 88, color: '#4ecdc4' },
    { name: 'Jasmine/Karma', level: 75, color: '#8dc63f' },
  ];

  experiences = [
    {
      role: 'Senior Software Engineer – Frontend',
      company: 'Coforge Limited',
      client: 'Standard Chartered Bank',
      period: 'Mar 2023 – Sep 2024',
      points: [
        'Led end-to-end frontend for a large-scale enterprise banking platform',
        'Improved app performance by 30–35% via lazy loading and OnPush change detection',
        'Architected complex async data flows using RxJS (switchMap, combineLatest, forkJoin)',
        'Built reusable Angular component libraries reducing onboarding time significantly',
      ],
    },
    {
      role: 'Software Engineer II – Frontend',
      company: 'Reward360 Global Services',
      client: 'Regalia Milestone Loyalty Platform',
      period: 'Apr 2022 – Sep 2022',
      points: [
        'Developed Angular UI features for a consumer-facing loyalty and rewards platform',
        'Built modular, reusable components following component-driven development',
        'Maintained technical documentation for features, APIs, and UI components',
      ],
    },
    {
      role: 'Solution Engineer – Frontend',
      company: 'ClearTax',
      client: '',
      period: 'Feb 2020 – Mar 2022',
      points: [
        'Built Angular UI components and dashboards for enterprise GST/e-invoicing clients',
        'Integrated client ERP systems with company APIs for seamless data flow',
        'Delivered technical demos and post-sale support improving client retention',
      ],
    },
    {
      role: 'Software Engineer – Full Stack',
      company: 'NTT DATA FA Insurance Systems',
      client: '',
      period: 'Mar 2018 – Aug 2019',
      points: [
        'Built responsive UIs using Angular 4, HTML5, CSS3 and JavaScript ES6',
        'Contributed to backend development using Java and Node.js',
        'Designed and optimised MySQL database schemas',
      ],
    },
  ];

  ngOnInit() {
    this.startTypewriter();
    this.initScrollAnimations();
  }

  startTypewriter() {
    const type = () => {
      const full = this.roles[this.currentRoleIndex];
      if (!this.isDeleting) {
        this.displayText = full.substring(0, this.charIndex + 1);
        this.charIndex++;
        if (this.charIndex === full.length) {
          this.isDeleting = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        this.displayText = full.substring(0, this.charIndex - 1);
        this.charIndex--;
        if (this.charIndex === 0) {
          this.isDeleting = false;
          this.currentRoleIndex =
            (this.currentRoleIndex + 1) % this.roles.length;
        }
      }
      setTimeout(type, this.isDeleting ? 60 : 100);
    };
    type();
  }

  initScrollAnimations() {
    setTimeout(() => {
      // Hero entrance
      gsap.from('.hero-content', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
      });

      // Skills stagger
      gsap.from('.skill-tag', {
        scrollTrigger: { trigger: '.skills-section', start: 'top 80%' },
        opacity: 0,
        y: 30,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power2.out',
      });

      // Experience cards
      gsap.from('.exp-card', {
        scrollTrigger: { trigger: '.experience-section', start: 'top 80%' },
        opacity: 0,
        x: -40,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, 100);
  }
}
