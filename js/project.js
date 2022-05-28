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
// Generate Projects
function loadProject(){
    var data_project = [
        {   'src' : 'img/sobatkerja.png', 
            'title' : 'Website SobatKerja',
            'field' : 'SobatKerja adalah sebuah website yang kami buat untuk mencari pekerjaan dan dapat membuka lowongan pekerjaan. Website ini dibangun menggunakan bahasa pemrograman HTML, CSS, Javascript dan PHP serta dibantu dengan Framework Lara...',
            'href' : 'https://github.com/Fallcruz/Website-SobatKerja'
        },
        {   'src' : 'img/travi.png',
            'title' : 'Website Travi (Travel Village)',
            'field' : 'Travi atau Travel Village merupakan sebuah website yang menawarkan paket berwisata di tempat pedesaan yang masih jarang dikunjungi wisatawan. Selain itu, website ini juga membantu travel untuk menawarkan paket wisata sesuai dengan keinginan me...',
            'href' : 'https://github.com/Fallcruz/Website-Travi'
        },
    ]
    var listProject = document.getElementById('listProject');
    for (var i = 0; i < data_project.length; i++){
        var item = `<div class="col-project">
                        <div class="img-project">
                            <img src=${data_project[i].src}>
                        </div>
                        <div class="field-project">
                            <h3>${data_project[i].title}</h3>
                            <p>${data_project[i].field}</p>
                            <a class="btn-viewdetail" href=${data_project[i].href} target="_blank">
                                View Details
                            </a>
                        </div>
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