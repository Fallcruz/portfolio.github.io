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
// Generate Skills
function loadSkill(){
    var data_icon = ['img/logo-html.png','img/logo-css.png','img/logo-javascript.png','img/logo-cplus2.png','img/logo-java.png','img/logo-python.png'
    ]
    var cardIcon = document.getElementById('listIcon');
    for (var i = 0; i < data_icon.length; i++){
        var item = `<img src=${data_icon[i]}>`;
        cardIcon.innerHTML += item;
    }
}
// Generate Projects
function loadProject(){
    var data_project = [
        {'src' : 'img/sobatkerja.png', 'title' : 'Website SobatKerja', 'href' : 'https://github.com/Fallcruz/Website-SobatKerja'},
        {'src' : 'img/travi.png', 'title' : 'Website Travi (Travel Village)', 'href' : 'https://github.com/Fallcruz/Website-Travi'},
        {'src' : 'img/sobatkerja-mobile.png', 'title' : 'SobatKerja Application', 'href' : 'https://www.figma.com/file/dUcJCKXDTICvRymKq7dAR8/SobatKerja?node-id=0%3A1'},
        {'src' : 'img/iflab.png', 'title' : 'Redesign Website IFLAB', 'href' : 'https://www.figma.com/file/MakC0a10rb0KDnEXzyLa11/Website-IFLAB?node-id=0%3A1'},
        {'src' : 'img/whatsapp.png', 'title' : 'Redesign WhatsApp Application', 'href' : 'https://www.figma.com/file/rvGNsdA1vtqPQkg4px151T/WhatsApp?node-id=0%3A1'},
    ]
    var listProject = document.getElementById('listProject');
    for (var i = 0; i < data_project.length; i++){
        var item = `<div class="col-project">
                        <img src=${data_project[i].src}>
                        <h5>${data_project[i].title}</h5>
                        <div class="smallBox"></div>
                        <a class="btn-viewlink" href=${data_project[i].href} target="_blank">
                            View Source
                        </a>
                    </div>`;
        listProject.innerHTML += item;
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