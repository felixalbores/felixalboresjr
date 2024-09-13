const darkModeToggle  = document.getElementById('darkModeToggle');
var darkModeBody =  document.body;

darkModeToggle.addEventListener('click',function(){
	darkModeToggle.classList.toggle("darkModeToggleActive");
	darkModeBody.classList.toggle("darkMode");
});

