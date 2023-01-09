import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          title: 'Lacs de Fusine',
          description: 'Tarvisio, UD, Italie | Claudia Chiavazza',
          imgUrl: 'https://images.unsplash.com/photo-1583244685026-d8519b5e3d21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          createdDate: new Date(),
          snaps: 320,
        },
        {
          title: 'Death Valley',
          description: 'California, United States | Marina Šurniene',
          imgUrl: 'https://images.unsplash.com/photo-1611498387485-bf35d4e8e18c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          createdDate: new Date(),
          snaps: 150,
          location: 'United States'
        },
        {
          title: 'Lost Lake',
          description: 'United States | Jackson Hendry',
          imgUrl: 'https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
          createdDate: new Date(),
          snaps: 0,
          location: 'United States'
        },
      ]
}