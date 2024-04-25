import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { FormsModule } from '@angular/forms';
import { DoublePipe } from './double.pipe';
import { CapitalizePipe } from './capitalize.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PersonComponent, FormsModule, DoublePipe, CapitalizePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes-demo';
  today: Date = new Date();
  message: string = "hello all and welcome";
  salary: number = 45000;
  value:number = 0.25;
  person: any = {name: "kalyani", age: 30, email: "sankpalkalyani93@gmail.com", city: "nashik"}

  // custom pipe usage
  numValue: number = 1234;
  messageValue: string = "hello all";
  // applying getter and setter to filter data
  private _filterData: string = "";

  // getColor()
  titleColor: string = "red";

  set filterData(value: string){
    this._filterData = value.toLowerCase();
  }

  get filterData(): string{
    return this._filterData.toUpperCase();
  }

}
