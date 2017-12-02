import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name: string;
  public lname: string;
  private itemDoc: AngularFirestoreDocument<any>;


  
  constructor(private afs: AngularFirestore){
    this.itemDoc = this.afs.doc('users/1');
    let item = this.itemDoc.valueChanges().subscribe(res=>{
      this.name = res.name
    });
  }

  send(){
    this.itemDoc.set({name: this.name, lname: this.lname}).then(res=>{
    //  alert(res);
    alert(this.name + ", " + this.lname);
   })
  }


}
