function thisFunction()
{
    var p = document.getElementById("hidden");
    console.log(p);
    if(p.style.display === "block")
    {
        p.style.display = "none";
    }
    else
    {
        p.style.display = "block";
    }
}

function picture()
{
    var p = document.getElementById("picture");
    console.log(p);
    if(p.style.display === "block")
    {
        p.style.display = "none";
    }
    else
    {
        p.style.display = "block";
    }
}

/*
function Login()
{
    var user1 = "Junfengou";
    var password1 = "uno";

    var id = document.getElementById("identification");
    var pass = document.getElementById("pass");
    console.log(id);
    console.log(pass);
    if (id.nodeType != user1)
    {
        alert("Hey! You're not part of the admin group. Who are you?")
    }
    else if (id.nodeType == user1 && pass.nodeType != password1)
    {
        alert("Dummy...did you forget your password?")
    }
}*/
