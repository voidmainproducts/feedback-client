import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  feedback = {
    ratingValue:'',
    comment:''
  }

  submitFeedback() {
console.log("feedback will be submitted: ",this.feedback)
  }
}
