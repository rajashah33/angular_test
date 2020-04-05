if(sessionStorage.getItem("email") == null){
	document.write("Login first");
} else{
	document.write("Welcome " + sessionStorage.getItem("email"));
	myFunction();
	function myFunction() {
		setTimeout(function(){ alert("Login Again");
		location.reload();
		sessionStorage.removeItem("email");
		document.cookie = "JSESSIONID= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
		}, 30000);
		}
}