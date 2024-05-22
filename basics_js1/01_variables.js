const account_Id = 144553
let account_Email = "dikshaycoc@gmail.com"
var account_Password = "12345"
account_City = "Jammu"   // not preffered to do declare variable like this 
let account_State;

// account_Id = 2    // NOT ALLOWED

account_Email = "hc@gmail.com"
account_Password = "2121212"
account_City = "mumbai"

console.log(account_Id);


/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([account_Id,account_Email,account_Password,account_City,account_State])