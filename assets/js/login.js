const URLPREFIX = "https://desolate-hollows-29433.herokuapp.com"

$("#login").click(function(){
	data = {}
	data["username"] = $("#username").val()
	data["password"] = $("#password").val()
	$.ajax({
		url: URLPREFIX + "/api-token-auth/",
		data: data,
		type: "POST",
		dataType: "json",
		success: function(response){
			sessionStorage.setItem("validationToken", response.token);
			window.location.replace("html/tasklist.html");
		},
		error: function(response){
			toastr.options = {
                "positionClass": "toast-bottom-center",
                "showDuration": "700",
                "hideDuration": "700",
                "timeOut": "3000",
                "extendedTimeOut": "700",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            Command: toastr["error"]("Nao foi possivel logar", "erro ao logar")
		},
	});
})

// fazer on key press pro enter ja chamar o login
// $(".login-input").onkeypress() 