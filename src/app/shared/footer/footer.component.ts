import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  year = new Date().getFullYear();
  openBracket = '<';
  closeBracket = '/>';

  links = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' },
  ];

  socials = [
    { label: 'GitHub', url: 'https://github.com/Anoop-Singh-FE' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anoop-singh-331208b0/',
    },
  ];
}
