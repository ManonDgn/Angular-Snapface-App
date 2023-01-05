import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;

  ngOnInit(){
    this.mySnap = new FaceSnap(
      'Lacs de Fusine',
      'Tarvisio, UD, Italia | Claudia Chiavazza',
      'https://images.unsplash.com/photo-1583244685026-d8519b5e3d21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      new Date(),
      0
    )
  }
}
