function displayMessage()
{
 if (confirm("Are you sure?")){
     alert("Hooray");
 } else {
     alert("you make me sad");
 }
}


function purchase() 
{
if (confirm("Would you like to buy this creature?")) {
    alert("Purchase Complete");
} else {
    alert("Your loss");
    }
}

function displayBirthname() 
{
 alert("Your birthname is: " + document.getElementsByName("birthname")[0].value);
}
