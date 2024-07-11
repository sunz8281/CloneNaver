const $newsclass = document.getElementsByClassName('newstitle');
const $shoppingclass = document.getElementsByClassName('shoppingtitle');
const $hobbyclass = document.getElementsByClassName('hobbytitle');
const $hobbybtn = document.getElementsByClassName('hobbybtn');
const $randomnews = document.getElementById('newsrandom');
// $targetclass.addEventListener('click', function(){
//     alert('aaa');
// });


for(let i=0; i<$newsclass.length; i++){
    $newsclass[i].addEventListener('click', changecolor);
}
for(let i=0; i<$shoppingclass.length; i++){
    $shoppingclass[i].addEventListener('click', changecolor);
}
for(let i=0; i<$hobbyclass.length; i++){
    $hobbyclass[i].addEventListener('click', changecolor);
}
for(let i=0; i<$hobbybtn.length; i++){
    $hobbybtn[i].addEventListener('click', changecolor);
}

function changecolor(){
    var $getClass=document.getElementsByClassName(this.className);
    for(let i=0; i<$getClass.length; i++){
        $getClass[i].classList.remove('selected');
    }
    this.classList.add('selected');
}