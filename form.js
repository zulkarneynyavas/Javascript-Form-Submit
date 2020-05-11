function FormSubmit(form) {
	var xhr = new XMLHttpRequest(),
		serialize = new FormData(form),
		button = form.getElementsByTagName("button");
	xhr.addEventListener("load", function(event){
		button[0].innerHTML = event.target.responseText;
	});
	xhr.addEventListener("error", function(event){
		button[0].innerHTML = 'error';
	});
	xhr.open('post', 'post.php');
	xhr.send(serialize);
	return false;
}
