$(function(){

    var btnLogin = $('#btnLogin')
    btnLogin.click(signIn)

    var btnRegister = $('#btnRegister')
    btnRegister.click(signUp)
    $("#imgInp").change(function(){
        readURL(this);
    });

})
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


function signIn(){

    var data = {};

    data.email     = $('#emailUserLogIn').val();
    data.password  = $('#passwordUserLogIn').val();

    console.log('data',data)

    $.ajax({
        type         : 'POST',
        url          : 'http://localhost:3000/login',
        data         : data,
        success: function (result) {
            console.log();
            return window.location.pathname = '/entretenimiento'
      }
    })
}

function signUp(){

    var data        =    {};
    data.name       =    $('#nameProfile').val()
    data.lastname   =    $('#lastnameProfile').val()
    data.nick_name  =    $('#nick_nameProfile').val()
    data.sexo       =    $('#sexoProfile').val()
    data.email      =    $('#emailProfile').val()
    data.password   =    $('#passwordProfile').val()
    data.born       =    $('#bornProfile').val()

    $.ajax({

      type          : 'POST',
      url           : 'http://localhost:3000/usuarios',
      data          : data,
      dataType      : "json",
      contentType   : "application/json; charset=utf-8",

      success: function (result) {

      }
    })
}
function getProfile(){
    self = $(this)

    var id = data('id')

    $.ajax({
        type        : 'GET'+id,
        url         : '/usuarios',
        data        : data,
        success: function (result) {

            $('#idProfile_').val(result.id)
            $('#nameProfile_').val(result.name)
            $('#lastnameProfile_').val(result.lastname)
            $('#nick_nameProfile_').val(result.nick_name)
            $('#sexoProfile_').val(result.sexo)
            $('#emailProfile_').val(result.email)
            $('#passwordProfile_').val(result.password)
            $('#bornProfile_').val(result.born)
        }
    })
}
function SubmitProfile(){

    var data = {};

    data.name          = $('#nameProfile_').val()
    data.lastname      = $('#lastnameProfile_').val()
    data.nick_name     = $('#nick_nameProfile_').val()
    data.sexo          = $('#sexoProfile_').val()
    data.email         = $('#emailProfile_').val()
    data.password      = $('#passwordProfile_').val()
    data.born          = $('#bornProfile_').val()


    $.ajax({
        type        : 'POST',
        url         : 'http://localhost:3000/usuarios',
        data        :  data,
        success:function(result){

        }
    })
}
