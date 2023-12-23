import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-con',
  standalone: true,
  imports: [],
  templateUrl: './view-child-con.component.html',
  styleUrl: './view-child-con.component.css',
})
export class ViewChildConComponent implements OnInit {
  newEmailId: string = '';
  @ViewChild('emails', { static: false }) emailId: ElementRef | undefined;

  updateEmailId() {
    this.newEmailId = this.emailId?.nativeElement.value;
    console.log(this.newEmailId);
  }
  ngOnInit(): void {
    this.updateEmailId();
  }
}
