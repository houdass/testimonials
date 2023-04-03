import { Component, ViewEncapsulation } from '@angular/core';
import {user1ImgBase64, user2ImgBase64} from "./image.contants";

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestimonialsComponent {
  user1Img: string = user1ImgBase64;
  user2Img: string = user2ImgBase64;
}
