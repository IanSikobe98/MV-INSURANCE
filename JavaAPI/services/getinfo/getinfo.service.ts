import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Platform } from '@ionic/angular'; // Import Platform here
@Injectable({
  providedIn: 'root'
})
export class GetinfoService {

  constructor(private storage:Storage,private platform: Platform) { }
  getToken(){
    return this.storage.ready()
    .then(() => this.storage.get('userdetails'))
 }
 static get parameters() {
  return [ [Storage]];
}

}
