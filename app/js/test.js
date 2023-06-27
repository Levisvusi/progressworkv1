
function validateForm() {
    var x = document.forms["myForm"]["don_name"].value;
    if (x == "" || x == null) {
        alert("Name must be filled out");
        return false;
    } else {
        alert('there data');
        return false;
    }
 }
