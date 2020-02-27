import { Component, OnInit } from "@angular/core";
import { allUser } from "../allusers";
import { formValidate } from "../form-validation";

@Component({
  selector: "users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  newUser: Boolean = false;
  nUser: any;
  users: any;
  errors: any;
  invalid: boolean;
  submitted: boolean = false;
  constructor() {}
  ngOnInit(): void {
    this.users = allUser;
  }
  createUser() {
    this.newUser = true;
  }
  createNewUser(form: any) {
    console.log(form);
    // this.errors = formValidate(formValue);
    if (form.valid) {
      const formValue = form.value;
      this.users = allUser;
      let NewUser = {
        id: formValue.id,
        name: formValue.name,
        personalInfo: [
          {
            address: formValue.address,
            mobile: formValue.mobile,
            imageLocation: ""
          }
        ],
        professionInfo: [
          {
            workExperience: formValue.workExperience,
            previousEmployer: formValue.previousEmployer,
            previousJob: formValue.previousJob
          }
        ],
        educationInfo: [
          {
            highSchool: formValue.highSchool,
            university: formValue.highSchool
          }
        ]
      };

      allUser.push(NewUser);
      this.submitted = true;
    } else {
      this.invalid = true;
    }
  }
}
