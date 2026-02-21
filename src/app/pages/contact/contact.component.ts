import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  // Replace these with your EmailJS credentials
  // Sign up free at emailjs.com → create service → create template
  SERVICE_ID = 'YOUR_SERVICE_ID';
  TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  formData = { name: '', email: '', subject: '', message: '' };
  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  contactInfo = [
    { icon: '📧', label: 'Email', value: 'anoopsingh635@gmail.com' },
    { icon: '📍', label: 'Location', value: 'Delhi, India' },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/anoop-singh-331208b0/',
    },
    { icon: '🐙', label: 'GitHub', value: 'https://github.com/Anoop-Singh-FE' },
  ];

  async onSubmit(form: NgForm) {
    if (form.invalid) return;
    this.isSubmitting = true;
    this.submitStatus = 'idle';

    try {
      await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          subject: this.formData.subject,
          message: this.formData.message,
        },
        this.PUBLIC_KEY,
      );
      this.submitStatus = 'success';
      form.resetForm();
      this.formData = { name: '', email: '', subject: '', message: '' };
    } catch {
      this.submitStatus = 'error';
    } finally {
      this.isSubmitting = false;
    }
  }
}
