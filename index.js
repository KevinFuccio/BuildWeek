
document.getElementById("myBtn").disabled = true;
const checkbox = document.querySelector("input[name=checkbox]");
checkbox.addEventListener('change', function() {
    if (this.checked) {
      console.log("Checkbox is checked..");
      document.getElementById("myBtn").disabled = false;
    } else {
      console.log("Checkbox is not checked..");
      document.getElementById("myBtn").disabled = true;
    }
  });
  