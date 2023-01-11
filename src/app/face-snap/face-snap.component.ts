import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})

// les "!" évitent les erreurs pour non init directe des valeurs
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  constructor (
    private faceSnapsService: FaceSnapsService,
    private router: Router){
  }

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imgUrl!: string;
  btnText!: string;

  ngOnInit(){
    this.btnText = 'Oh Snap!'
  }

  onSnap(){
    if (this.btnText === 'Oh Snap!'){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap' )
      this.btnText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap' )
      this.btnText = 'Oh Snap!';
    }
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
