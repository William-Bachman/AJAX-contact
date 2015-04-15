//firebase database(noSQL) url
var firebaseURL = "https://contactapp2.firebaseio.com/.json"
// Contact Constructor
var contact = function (Name, Phone, Email) {
    this.Name = Name;
    this.Phone = Phone;
    this.Email = Email;
}
// Contact array

var Contacts = [];

//create Contacts for firebase
var createContacts = function () {
    var Name = document.getElementById('inputName').value;
    var Phone = document.getElementById('inputPhone').value;
    var Email = document.getElementById('inputEmail').value;
    var contactObj = new contact(Name, Phone, Email);
    PostAjax(contactObj);
}
// Send the contact to Ajax
var PostAjax = function (contact) {
    var request = new XMLHttpRequest();
    request.open('POST', firebaseURL, true);
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            Contacts.push(contact);
            console.log("You win the game");
        }
        else {
            console.error("No contact for you");
        }
    }
    console.log(JSON.stringify(contact));
    request.send(JSON.stringify(contact));
}
//Get from firebase
var getAjax = function () {
    var request = new XMLHttpRequest
    request.open('GET', firebaseURL, true);
    request.onload = function () {
        var response = JSON.parse(this.response);
        {
            for (var prop in response) {
                Contact.push(response[prop]);
            }
        }
        console.log(Contacts);
    }
    request.send();
}
getAjax();
