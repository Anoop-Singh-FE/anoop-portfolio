import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  safeResumeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // DomSanitizer tells Angular: "I trust this URL, it's safe to embed"
    this.safeResumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://drive.google.com/file/d/1-Sz7XFsBw2Xb_jCoV-gmwE0VfspoOxXS/preview',
    );
  }

  downloadResume() {
    window.open(
      'https://drive.google.com/file/d/1-Sz7XFsBw2Xb_jCoV-gmwE0VfspoOxXS/view?usp=drive_link',
      '_blank',
    );
  }
}
