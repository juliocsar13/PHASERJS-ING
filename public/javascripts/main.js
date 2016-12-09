$(function(){

    var btnLogin = $('#btnLogin')
    btnLogin.click(signIn)

    var btnRegister = $('#btnRegister')
    btnRegister.click(signUp)

    var btnContact = $('#btnContact')
    btnContact.click(SubmitContact)
/*
    var btnBasicoSuscripcion = $('#btnBasicoSuscripcion')
    btnBasicoSuscripcion.click(AddSuscripcionBasic)

    var btnIntermedioSuscripcion = $('#btnIntermedioSuscripcion')
    btnIntermedioSuscripcion.click(AddSuscripcionIntermedio)

    var btnAvanzadoSuscripcion = $('#btnAvanzadoSuscripcion')
    btnAvanzadoSuscripcion.click(AddSuscripcionAvanzado)
*/
    $("#imgInp").change(function(){
        readURL(this);
    });

})
/*
function AddSuscripcionBasic(){

        $.ajax({
            type         : 'POST',
            url          : 'http://localhost:3000/login',
            data         : data,
            success: function (result) {
                console.log("HOLA",result);
                return window.location.pathname = '/entretenimiento'
          }
        })
}
function AddSuscripcionIntermedio(){

        $.ajax({
            type         : 'POST',
            url          : 'http://localhost:3000/login',
            data         : data,
            success: function (result) {
                console.log("HOLA",result);
                return window.location.pathname = '/entretenimiento'
          }
        })
}
function AddSuscripcionAvanzado(){

        $.ajax({
            type         : 'POST',
            url          : 'http://localhost:3000/login',
            data         : data,
            success: function (result) {
                console.log("HOLA",result);
                return window.location.pathname = '/entretenimiento'
          }
        })
}
*/

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

    var data_submit = JSON.stringify(data)
    console.log(data_submit);
    /*
    $.post('/login' , data_submit)
        .done(function(result){
            console.log("HOLA MUNDO");
            return window.location.pathname = '/entretenimiento'
        })*/
        //return window.location.pathname = '/entrete'
    $.ajax({
        type         : 'POST',
        url          : 'http://localhost:3000/login/',
        data         :  data,
        success: function (result) {
            console.log("HOLA",window.location.pathname);
            return window.location.pathname = '/entretenimiento'

      },
      error: function (req, status, err,res) {
            if (err) {
                console.log(err);
            }
      }
  })
}

function signUp(){

    var born_  = $('#dayProfile').val() +' '+ $('#monthProfile').val() +' '+ $('#yearProfile').val()
    var data        =    {};
    data.name       =    $('#nameProfile').val()
    data.lastname   =    $('#lastnameProfile').val()
    data.nick_name  =    $('#nick_nameProfile').val()
    data.sexo       =    $('#sexoProfile').val()
    data.email      =    $('#emailProfile').val()
    data.password   =    $('#passwordProfile').val()
    data.born       =    born_




    console.log('FECHA DE NACIMIENTO',data)
    $.ajax({

      type          : 'POST',
      url           : '/usuarios',
      data          : data,

      success: function (result) {
          $('#ModalRegisterUser').modal('hide');
      },
      error: function (req, status, err,res) {
            if (err) {
                console.log('el email ya esta registrado')
            }
      }
    })
}
function SubmitContact(){
    var data = {};

    data.name    = $('#nameContact').val()
    data.email   = $('#emailContact').val()
    data.subject = $('#subjectContact').val()
    data.message = $('#messageContact').val()

    $.ajax({
        type        : 'POST',
        url         : 'http://localhost:3000/contactanos',
        data        : data,
        success: function (result) {

            console.log('SE REALIZO CON EXITO')
            //return window.location.pathname = '/contactanos'
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
