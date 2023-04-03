import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from './testimonials.component';
import { RouterModule } from '@angular/router';
import { testimonialsRoutes } from './testimonials.routes';

@NgModule({
  declarations: [TestimonialsComponent],
  imports: [CommonModule, RouterModule.forChild(testimonialsRoutes)],
})
export class TestimonialsModule {}
