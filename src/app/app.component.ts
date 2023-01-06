import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  
  ngOnInit(){
    this.faceSnaps = [
      this.mySnap = {
        title: 'Lacs de Fusine',
        description: 'Tarvisio, UD, Italie | Claudia Chiavazza',
        imgUrl: 'https://images.unsplash.com/photo-1583244685026-d8519b5e3d21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        createdDate: new Date(),
        snaps: 320,
        location: 'Italie'
      },
      this.myOtherSnap = {
        title: 'Death Valley',
        description: 'California, United States | Marina Šurniene',
        imgUrl: 'https://images.unsplash.com/photo-1611498387485-bf35d4e8e18c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        createdDate: new Date(),
        snaps: 150,
        location: 'United States'
      },
      this.myLastSnap = {
        title: 'Lost Lake',
        description: 'United States | Jackson Hendry',
        imgUrl: 'https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        createdDate: new Date(),
        snaps: 0,
        location: 'United States'
      },
    ]
  }
}
