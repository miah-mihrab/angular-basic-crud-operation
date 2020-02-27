
// let idInvalid: Boolean = false;
// let nameInvalid: Boolean = false;
// let addressInvalid: Boolean = false;
// let mobileInvalid: Boolean = false;
// let highSchoolInvalid: Boolean = false;
// let universityInvalid: Boolean = false;
// let workExpInvalid: Boolean = false;
// let prevEmployer: Boolean = false;
// let prevJob: Boolean = false;
let errors= [];
export function formValidate(formValue: any){
  console.log(formValue)
  let invalid = false;
    if(formValue.id=== undefined) {
      invalid = true;
      errors.push({id: "ID is required",})
    };
    if(formValue.name===undefined){
      invalid=true;
      errors.push({name: "Name is required",})
    };
    if(formValue.address===undefined){
      invalid=true;
      errors.push({address: "Address is required",})
    };
    if(formValue.mobile===undefined){
      invalid=true;
      errors.push({mobile: "Mobile number is required and length should be exactly 11", })
    }
    if(formValue.highSchool===undefined){
      invalid = true;
      errors.push({highSchool: "High School is required",})
    }
    if(formValue.university===undefined){
      invalid = true;
      errors.push({university: "University is required",})
    }
    if(formValue.workExperience===undefined){
      invalid=true;
      errors.push({workExperience: "Work Experience is required",})
    }
    if(formValue.previousJob===undefined){
      invalid=true;
      errors.push({prevJob: "Previous Job is required",})
    }
    if(formValue.previousEmployer===undefined){
      invalid=true;
      errors.push({prevEmployer: "Previous Employer is required",})
    }

    if(invalid){
      return errors;
    }
    else return invalid;
}
