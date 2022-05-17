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