// Hidden Navbar
var click = 0;
function toogleMenu(){
    if (click % 2 == 0){
        document.getElementById("menuList").style.display = "block";
        click += 1;
    } else {
        document.getElementById("menuList").style.display = "none";
        click += 1;
    }
}

// Generate Sosmed Footer
function loadFooter(){
    var data_sosmed = [
        {'src' : 'img/instagram.png', 'href' : 'https://www.instagram.com/rizky.khoiruddin/'},
        {'src' : 'img/github.png', 'href' : 'https://github.com/Fallcruz'},
        {'src' : 'img/linkedin.png', 'href' : 'https://www.linkedin.com/in/rizky-khoiruddin-a95654191/'},
        {'src' : 'img/youtube.png', 'href' : 'https://www.youtube.com/channel/UCNHIRiOtfsnBDL6w4_SIzag'},
    ]
    var listSosmed = document.getElementById('listSosmed');
    for (var i = 0; i < data_sosmed.length; i++){
        var item = `<a href=${data_sosmed[i].href} target="_blank">
                        <img src=${data_sosmed[i].src}>
                    </a>`;
        listSosmed.innerHTML += item;
    }
}