function validateForm() {
    var x = document.forms["contact_form"]["name"].value;
	var y = document.forms["contact_form"]["email"].value;
	var z = document.forms["contact_form"]["message"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
	

    else if (y == null || y == "") {
        alert("Email must be filled out");
        return false;
    }
	

    else if (z == null || z == "") {
        alert("Message must be filled out");
        return false;
    }
}