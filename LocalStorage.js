var names;

function loadSearches(){
    if (!sessionStorage.getItem("herePreviously")){
        sessionStorage.setItem("herePreviously","true");
        document.getElementById("welcomeMessage").innerHTML = "Welcome to my website! Thank you again for using this website. I really hope you get to learn more about dogs!";
    }

function getName(){
    return localStorage.getItem("userName");
}
function updateHTML(){
    var name = getName();
    document.getElementById("greeting").innerHTML = "Hello, " + name + "! Welcome to my website! Thank you again for using this website. I really hope you get to learn more about dogs!";
    document.getElementById("storedName").innerHTML = name;
}

function myFunction(){
    //gets input value
    var name = document.getElementById("myInput").value;
    localStorage.setItem("userName", name);

    updateHTML();
}
    var length = localStorage.length;
    names = [];

    for (var i = 0; i < length; ++i) {
        names[i] = localStorage.key(i);
    }

    names.sort();

    var markup = "<ul>";
    
    function clearAllSearches(){
        localStorage.clear();
        loadSearches();
    }

    function saveSearch(){
        var nameInput = document.getElementById("nameInput");
        localStorage.setItem(query.value);
        query.value = "";
        loadSearches();
    }

    function deleteTag(tag){
        localStorage.removeItem(userName);
        loadSearches();
    }
}