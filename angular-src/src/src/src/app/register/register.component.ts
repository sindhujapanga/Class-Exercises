import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rName ='';
  rAddress = '';
  rComments = '';
  rCountry = 'India';
  rGender = 'Male';
  rHobbies = null;
  rGames = false;
  rRead = false;
  rMale = true;
  rFemale = false;

  show = false;
  userDetails = null;
  showDetails(){
    if(this.rFemale){
      this.rGender = this.rFemale + '';
      this.userDetails = [this.rName ,this.rGender, this.rAddress, this.rCountry, this.rComments];
    }
    else{
      this.rGender = this.rMale + '';
      this.userDetails = [this.rName ,this.rGender, this.rAddress, this.rCountry, this.rComments];
    }

    if(this.rGames && this.rRead){
      this.rHobbies = 'Games' + ',' + 'Read';
      this.userDetails = [this.rName ,this.rGender, this.rAddress, this.rCountry, this.rComments, this.rHobbies];
    }
    else if(this.rGames && !this.rRead){
      this.rHobbies = 'Games' ;
      this.userDetails = [this.rName ,this.rGender, this.rAddress, this.rCountry, this.rComments, this.rHobbies];
    }
    else if(!this.rGames && this.rRead){
      this.rHobbies = 'Read';
      this.userDetails = [this.rName ,this.rGender, this.rAddress, this.rCountry, this.rComments, this.rHobbies];
    }
    else{
      this.rHobbies = '-';
      this.userDetails = [this.rName ,this.rGender, this.rAddress, this.rCountry, this.rComments, this.rHobbies];
    }
    
    this.show= true;
    // this.rName ='';
    // this.rAddress = '';
    // this.rComments = '';
    // this.rCountry = '';
  }

  unshowDetails(){
    this.show= false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
