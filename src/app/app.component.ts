import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentService } from './Services/student.service';
import { CommonModule } from '@angular/common';
import { WeatherService } from './Services/weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  students : any = [];
  weather : any =[];
  constructor(private studentService:StudentService, private weatherService:WeatherService){}
 
  ngOnInit(): void {
    this.studentService.GetStudentData().subscribe(
      (data) =>{
         this.students = data.students;
        }
      );
    this.weatherService.GetWeatherData().subscribe(
      (data)=>{
        this.weather= data.weather;
      }
    );
  }


}
