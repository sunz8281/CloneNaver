const $targetclass = document.getElementsByClassName('titleSection');
// $targetclass.addEventListener('click', function(){
//     alert('aaa');
// });

for(let i=0; i<$targetclass.length; i++){
    $targetclass[i].addEventListener('click', changecolor);
}

function changecolor(){
    const $getId=document.getElementById(this.id);
    for(let i=0; i<$targetclass.length; i++){
        $targetclass[i].style.color = 'gray';
    }
    $getId.style.color='black';
}