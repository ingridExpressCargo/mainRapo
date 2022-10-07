
var datetime = new Date().toLocaleTimeString();
console.log(datetime); // it will represent date in the console of developers tool
document.getElementById("time").textContent = datetime;

// function sendEmail(){
//     Email.send({
//         Host : "smtp.yourisp.com",
//         Username : "username",
//         Password : "password",
//         To : 'them@website.com',
//         From : "you@isp.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
    
// }