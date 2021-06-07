import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  id = '';
  changeInput: any = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.router.navigateByUrl('/post/' + this.id).then(() => location.reload());
  }

  onChange() {
    this.changeInput = (<HTMLInputElement>(
      document.getElementById('change')
    )).value;
  }
}
