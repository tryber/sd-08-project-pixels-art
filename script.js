//requisito 8
function cliquePreto () {
    document.getElementById('color2').classList.remove('selected');
    document.getElementById('color3').classList.remove('selected');
    document.getElementById('color4').classList.remove('selected');
    document.getElementById('color1').classList.add('selected');
    }; 

function cliqueVermelho () {
document.getElementById('color1').classList.remove('selected');
document.getElementById('color3').classList.remove('selected');
document.getElementById('color4').classList.remove('selected');
document.getElementById('color2').classList.add('selected');
}; 



function cliqueAzul () {
    document.getElementById('color1').classList.remove('selected');
    document.getElementById('color2').classList.remove('selected');
    document.getElementById('color4').classList.remove('selected');
    document.getElementById('color3').classList.add('selected');
    }; 



function cliqueRosa () {
    document.getElementById('color1').classList.remove('selected');
    document.getElementById('color2').classList.remove('selected');
    document.getElementById('color3').classList.remove('selected');
    document.getElementById('color4').classList.add('selected');
    }; 