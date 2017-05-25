$("document").ready(function() {

    function addMsg(user, name, msg, timer) {
        var elBox = document.createElement("div");
        var el1 = document.createElement("span");
        var el2= document.createElement("p");
        elBox.style.borderRadius = "3px";
        elBox.style.padding = "7px";
        setTimeout(function () {
            if (user === "client"){
                elBox.style.background = "#eee";
            }
            el1.innerHTML = name;
            el2.innerHTML = msg;
        },timer);
        $("#content").append(elBox);
        elBox.append(el1, el2);
    }


    $("#chat-now").click(function () {
        $("#chat-now").css("visibility", "hidden");
        $("#cover-msg").remove(0);
        $("#form").css("visibility", "visible");
        addMsg("agent", "Mary: ", '"Hi Nicolas this is Mary from Abank. How may I help ypu today?"', 1000);
    });


    $("#form").submit(function (e) {
        e.preventDefault();
        var hook = $("#in").val();
        $("#in").val("");
        addMsg("client", 'Nicholas: ', '"'+hook+'"', 0);
        addMsg("agent", 'Mary: "', 'To reset your password just click' +
            'on the My details menu. Once you have clicked the menu a new page will' +
            'appear Select the link Change password". om this link it will take' +
            'you to a screen where you can change your password"', 3000);
    });

});

