let menuList = document.getElementById("menuList");

    menuList.style.maxHeight = "0px";
    
    function togglemenu(){
      
      if(menuList.style.maxHeight =="0px")
        {
          menuList.style.maxHeight = "200px";
        }
      
      else
        {
          menuList.style.maxHeight = "0px";
        }
    }












const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');




registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
});






// Loop through Array of Objects
var objPeople = [
	{ // Object @ 0 index
		username: "sam",
		password: "codify"
	},
	{ // Object @ 1 index
		username: "matt",
		password: "academy"
	},
	{ // Object @ 2 index
		username: "chris",
		password: "forever"
	},
	{
	  username: "yunus",
	  password: "artikov"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			alert(username + " is logged in!!!")
			// stop the function if this is found to be true
			return
		}
	}
	alert("incorrect username or password")
}
