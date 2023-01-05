import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})

// les "!" évitent les erreurs pour non init directe des valeurs
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imgUrl!: string;
  btnText!: string;

  ngOnInit(){
    this.title = 'Lacs de Fusine';
    this.description = 'Tarvisio, UD, Italia | Claudia Chiavazza';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imgUrl = 'https://images.unsplash.com/photo-1583244685026-d8519b5e3d21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    this.btnText = 'Oh Snap!'
  }

  onSnap(){
    if (this.btnText === 'Oh Snap!'){
      this.faceSnap.snaps++;
      this.btnText = 'Oops, unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.btnText = 'Oh Snap!';
    }

  }
}
