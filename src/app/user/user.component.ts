import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { allUser } from "../allusers";

interface userType {
  name: String;
  address: String;
  mobile: String;
  workExperience: String;
  previousEmployer: String;
  previousJob: String;
  highSchool: String;
  university: String;
}

@Component({
  selector: "user-root",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  title: String;
  userDelete: boolean = false;
  uUser: any;
  user;
  invalid: boolean;
  updateSingleUser(user: any) {}
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.user = allUser.find(e => {
        return param.id === e.id;
      });
    });
    this.uUser = this.user;
  }

  deleteUser() {
    this.route.params.subscribe(param => {
      for (let i = 0; i < allUser.length; i++) {
        if (param.id === allUser[i].id) {
          this.user = null;
          this.userDelete = true;
        }
      }
    });
  }

  updateUser(form: any) {
    this.route.params.subscribe(param => {
      console.log(param);
      if (form.valid) {
        let formValue = form.value;
        let UpdateUser = {
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
              university: formValue.university
            }
          ]
        };
        console.log(UpdateUser);
        for (let i = 0; i < allUser.length; i++) {
          if (param.id === allUser[i].id) {
            allUser[i] = UpdateUser;
            this.user = allUser[i];
            //  console.log(this.user)
          }
        }
      } else {
        this.invalid = true;
      }
    });
  }
}
