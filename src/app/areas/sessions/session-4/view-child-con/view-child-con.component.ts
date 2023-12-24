import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-con',
  standalone: true,
  imports: [],
  templateUrl: './view-child-con.component.html',
  styleUrl: './view-child-con.component.css',
})
export class ViewChildConComponent implements OnInit, AfterViewInit {
  newEmailId: string = '';
  @ViewChild('emails', { static: false }) emailId!: ElementRef;

  ngOnInit(): void {
    // this.updateEmailId();
  }
  ngAfterViewInit(): void {
     this.updateEmailId();
  }

  updateEmailId() {
    this.newEmailId = this.emailId?.nativeElement.value;
    console.log(this.newEmailId);
  }
}
