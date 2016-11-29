$(function(){

    var btnContact = $("#btnContact")

    $(btnContact).click(sendContact)


    function sendContact(){

         emailjs.init("user_l5EiYiYN6h0h8azZ2Ef7d");


         emailjs.send("gmail","template_HAVMor0T",{name: "dfsdfs",email:"juli",asunto:"uulio", message:"julio"})
             .then(function(res){
                 console.log("success",res.status+" - "+res.text);
             },function(err){
                 console.log("ERROR",err);
             })
     }


})
