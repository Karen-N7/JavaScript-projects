if ("onhashchange" in window) {
   console.log("supptoring hash")
}
const ROUTES = {
    "profile" : function () {
        root.innerHTML = "PROFILE"
    },
    "login"  : function () {
        root.innerHTML = "LOGIN"
    },
    "logout" : function () {
        root.innerHTML = "LOGOUT"
    }
}

function renderer(url){
    let finalUrl = url.replace("#/","");
    ROUTES[finalUrl]();
}

function locationHashChanged() {
    renderer(location.hash)
}

window.onhashchange = locationHashChanged;
