
/* ----------------------- Toggler Style Switcher --------------------- */

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
	document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style - switcher on scroll
window.addEventListener("scroll", () =>   {
	if(document.querySelector(".style-switcher").classList.contains("open"))
	{
		document.querySelector(".style-switcher").classList.remove("open");
	}
})

// theme color
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
	alternateStyles.forEach((style) => {
		if(color === style.getAttribute("title"))
		{
			style.removeAttribute("disabled");
		}
		else
		{
			style.setAttribute("disabled","true");	
		}
	})
}

// theme light and dark mode 
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
	dayNight.querySelector("i").classList.toggle("fa-sun");
	dayNight.querySelector("i").classList.toggle("fa-moon");
	document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
	if(document.body.classList.contains("dark"))
	{
		dayNight.querySelector("i").classList.add("fa-sun");
	}
	else
	{
		dayNight.querySelector("i").classList.add("fa-moon");
	}
})

// send the email to owner
function Send() {
	console.log("function call");
	var uname = document.getElementById("name").value;
	var gmail = document.getElementById("email").value;
	var sub = document.getElementById("subject").value;
	var msg = document.getElementById("massage").value;

	var body = "Name: " + uname + "<br/> Email: " + gmail + "<br/> Subject: " + sub + "<br/> Massage: " + msg;

	console.log(body);

	Email.send({
		SecureToken : "13e7ad6c-ba97-4a25-b616-6c82b1b97dd2",
		To: 'udapurehimanshu@gmail.com',
		From: "udapurehimanshu@gmail.com",
		Subject: sub,
		Body: body
	}).then(
		message =>{
			if(message=='OK'){
				swal("Successfull", "Your Data Successfully Received", "success");
			}
			else{
				swal("Something Wrong", "Your Data is Not Received", "error");
			}
		}
	);
}