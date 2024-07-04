
const $search = document.getElementById('search'); //검색 컨테이너
const $keyboardPop = document.getElementById('keyboardpop'); //가상키보드 버튼
const keyboard = document.querySelector(".keyboard"); //가상키보드
const $sText = document.getElementById('search_text'); //텍스트 입력칸
const $box2Btn = document.getElementById('box2Btn'); //자동완성 버튼
const $sBox1 = document.getElementById('search_box1'); //입력칸 컨테이너
const $sBox2 = document.getElementById('search_box2'); //자동완성 컨테이너
let lastX = 0;
let lastY = 0; 
let startX = 0; 
let startY = 0; 
var spaceFlag = true;

keyboard.style.display = 'none'; //가상키보드 숨기기
$sBox2.style.display = 'none'; //자동완성 컨테이너 숨기기

$keyboardPop.addEventListener('click', popUp); //가상키보드 버튼이 눌렸을 때
function popUp(){
    AChide(); //자동완성 숨기기
    if(keyboard.style.display=='block') //가상키보드가 켜져있다면
    {
        keyboard.style.display = 'none'; //가상키보드 끄기
    } else {
        keyboard.style.display= 'block'; //가상키보드 켜기
        keyboard.style.top ='70px'; //가상키보드 위치 재설정
        keyboard.style.left ='1100px';
    }
}
$box2Btn.addEventListener('click', function(){ //자동완성 버튼이 눌렸을 때
    keyboard.style.display = 'none';//키보드 숨기기
    if($sBox2.style.display=='none'){//자동완성 컨테이너가 꺼져있다면
        ACshow(); //자동완성 컨테이너 켜기
    } else {
        AChide(); //자동완성 컨테이너 켜기
        $sText.focus(); //텍스트 입력칸에 포커스
    }
});

window.addEventListener('keypress', function(e){ //입력받는 키보드가 눌린다면
    if(e.key!=' '){ //그 키가 스페이스가 아니라면
        $sText.focus(); //텍스트 입력칸에 포커스
    }
});

$sText.addEventListener('input', function(){ //입력칸의 값이 변화가 있다면
    //$sText.focus(); //입력칸에 포커스하기
    if($sText.value){ //안에 값이 있다면
        ACshow(); //자동완성 컨테이너 켜기
    } else {
        AChide(); //자동완성 컨테이너 끄기
    }
});

// $sText.addEventListener('blur', AChide);

function ACshow(){ //자동완성 컨테이너를 키는 함수
    $sText.focus(); //입력칸에 포커스
    $sBox2.style.display='flex';
    //$sBox2.style.display='block'; //자동완성 컨테이너 보이기
    $box2Btn.style.transform = 'scaleY(-1)'; //자동완성 버튼 뒤집기
    $sBox1.style.border='1px solid white'; //텍스트 컨테이너 외곽선 없애기
    $sBox1.style.borderRadius="10px 10px 0px 0px"; //텍스트 컨테이너 둥글기 바꾸기
    //$search.style.boxShadow="0px 7px 5px rgba(0, 0, 0, 0.1), 0px 0px 3px rgba(0, 0, 0, 0.1)"; //검색 컨테이너 그림자적용
    $sBox1.style.boxShadow="0px 7px 5px rgba(0, 0, 0, 0.1), 0px 0px 3px rgba(0, 0, 0, 0.1)"; //검색 컨테이너 그림자적용
    $sBox2.style.boxShadow="0px 7px 5px rgba(0, 0, 0, 0.1), 0px 0px 3px rgba(0, 0, 0, 0.1)"; //검색 컨테이너 그림자적용
}
function AChide(){ //자동완성 컨테이너를 끄는 함수
    $sBox2.style.display='none'; //자동완성 컨테이너 숨기기
    $box2Btn.style.transform = 'scaleY(1)'; //자동완성 버튼 원상태로 바꾸기
    $sBox1.style.border='1px solid #03C75A'; //텍스트 컨테이너 외곽선 적용
    //$search.style.boxShadow='none'; //검색 컨테이너 그림자 없애기
    $sBox1.style.boxShadow='none'; //검색 컨테이너 그림자 없애기
    $sBox2.style.boxShadow='none'; //검색 컨테이너 그림자 없애기
    $sBox1.style.borderRadius='50px'; //텍스트 컨테이너 둥글기 원상태로 바꾸기
}
keyboard.addEventListener('mousedown', function(e){ //가상키보드에 마우스 클릭이 눌릴 때
//e.preventDefault(); //고유 기능을 막는다
startX = e.clientX; //startX에 사용자의 X값을 저장
startY = e.clientY; //startY에 사용자의 Y값을 저장
    
document.addEventListener('mouseup', onRemoveEvent); //마우스 클릭이 떼질 때 onRemoveEvent 실행

document.addEventListener('mousemove', onMove); //마우스가 움직일 때 onmove 실행
});

function onRemoveEvent() { //이벤트 지우기
document.removeEventListener('mouseup', onRemoveEvent); //마우스 클릭이 떼질 때 onRemoveEvent 실행X
document.removeEventListener('mousemove', onMove); //마우스가 움직일 때 onMove 실행X
} 

function onMove(e) { //마우스따라 팝업 움직이기
//e.preventDefault(); //고유 기능을 막는다
lastX = startX - e.clientX; //lastX에 X좌표가 얼마나 움직였는지 저장
lastY = startY - e.clientY; //lastY에 Y좌표가 얼마나 움직였는지 저장

startX = e.clientX; //startX값에 사용자의 X값을 저장
startY = e.clientY; //startY값에 사용자의 Y값을 저장

keyboard.style.top = `${keyboard.offsetTop - lastY}px`; //키보드의 세로에서 키보드가 움직인 Y값을 뺀 값을 위치로 설정
keyboard.style.left = `${keyboard.offsetLeft - lastX}px`; //키보드의 가로에서 키보드가 움직인 X값을 뺀 값을 위치로 설정
}