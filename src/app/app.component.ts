import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public specificName:string;
public productName:string;
public code:number;
public marketer:string;
public price:number;

public TreatmentType:string;
public treatmentName:string;
public treatmentCode:number;


public city:string;
public address:string;
public phone:number;

public userId:string;
public userFirstName:string;
public userLastName:string;
public userPhone:number;

public cosmeticianId:string;
public cosmeticianFirstName:string;
public cosmeticianLastName:string;
public cosmeticianPhone:number;


public managerId:string;
public managerFirstName:string;
public managerLastName:string;
public managerPhone:number;


  //public name: string;
 // public lname: string;
  //public id: number;
 // private itemDoc: AngularFirestoreDocument<any>;
  //private col:AngularFirestoreCollection<any>;
  //private prod:AngularFirestoreCollection<any>;
  //private users;
  //public ob;
  //private product;
  


  constructor(private afs: AngularFirestore){
    //this.itemDoc = this.afs.doc('users/1');
    //this.col=this.afs.collection('users');
    //this.prod=this.afs.collection('products');
    //this.prod.valueChanges().subscribe(res=>{
//this.product=res;
  //  });

    //this.col=this.afs.collection('')
    //this.col.valueChanges().subscribe(res=>{
    //  console.log(res);
    //  this.users=res;
   // });
  // this.ob=this.col.valueChanges();


  }


 /* 
  constructor(private afs: AngularFirestore){
    this.itemDoc = this.afs.doc('users/1');
    let item = this.itemDoc.valueChanges().subscribe(res=>{
      this.name = res.name
    });
  }
*/


// delete(){

//   this.afs.collection('users').doc('ZKLtTI9ie5P4jXusU6tT').delete().then(function() {
//     console.log("Document successfully deleted!");
// }).catch(function(error) {
//     console.error("Error removing document: ", error);
// });

// }


  // send(){
  //   //this.pushProducts('face cream','mmt','123','uriel');
      


  //   this.col.add({name: this.name, lname: this.lname}).then(res=>{
  //   //  alert(res);
  //   //alert(this.name + ", " + this.lname);
  //  })
  // }


addProducts(name,specificName,code,marketer,price){

  var prodRef = this.afs.collection("products");
   
    prodRef.doc(this.productName).set({
      name: this.specificName,
      code: this.code, 
      marketer: this.marketer, 
      price:this.price
    });

}


addTreatment(name,code){
  
    var  treatmentRef = this.afs.collection("treatments");
      
      treatmentRef.doc(this.TreatmentType).set({
        name: this.treatmentName, 
        code: this.treatmentCode
      });
  
  }

  addLocation(address,phone){
    
      var  locationtRef = this.afs.collection("locations");
       
        locationtRef.doc(this.city).set({
          address: this.address, 
          phone: this.phone
        });
    
    }
  

addUser(firstName,lastName, id,phone){
  var  usersRef = this.afs.collection("users");
  
  usersRef.doc(this.userId).set({
    name: this.userFirstName,
    lname: this.userLastName,
    phone:this.userPhone
  });

  }


addCosmetician(firstName,lastName, id,phone){
  var  cosmeticiansRef = this.afs.collection("cosmeticians");
  
  cosmeticiansRef.doc(this.cosmeticianId).set({
    name: this.cosmeticianFirstName,
    lname: this.cosmeticianLastName,
    phone:this.cosmeticianPhone
  });

}

addManager(firstName,lastName, id,phone){
  var  managerRef = this.afs.collection("manager");
  
  managerRef.doc(this.managerId).set({
    name: this.managerFirstName,
    lname: this.managerLastName,
    phone:this.managerPhone
  });

}




}
