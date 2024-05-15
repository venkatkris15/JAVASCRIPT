function checkEligibility() {
    var qualification = document.querySelector('input[name="qualification"]:checked').value;
    var result = document.getElementById("result");
  
    switch (qualification) {
      case 'illiterate':
      case 'highschool':
      case 'ug':
        result.innerHTML = "You are eligible for the job!";
        break;
      case 'pg':
      case 'doctorate':
        result.innerHTML = "You are not eligible for the job.";
        break;
      default:
        result.innerHTML = "Please select a qualification.";
    }
  }
   