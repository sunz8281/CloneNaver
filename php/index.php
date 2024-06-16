<html>
    <head>
        <link rel="stylesheet" href="../css/index.css">
        <title>NAVER</title>
    </head>
<body>
    <div id = header>
        <div id = search>
            <div id = search_box1>
                <form method=post action=search.php>
                    <a href=index.php><img src=../image/Logo_N2.png alt=logo class=search_logo></a>
                    <input type = text name = search_text id=search_text placeholder="검색어를 입력해 주세요.">
                    <input type = button name = search_keyboard id=keyboardpop class=search_logo value="">
                    <img src=../image/autocomplete.png alt=자동완성 height="5px" id=autoComplete>
                    <input type = image name = search_submit class=search_logo src=../image/Logo_search2.png alt=검색>
                </form>
            </div>
            <div id = search_box2>
                <div class = autoSection>자동완성 끄기</div><div class=dot>&middot;</div>
                <div class = autoSection>도움말</div><div class=dot>&middot;</div>
                <div class = autoSection>신고</div>
            </div>
        </div>
    <div class="keyboard">
        가상키보드
    </div>
    </div>
    <div id = container>

    </div>
    <div id = footer>

    </div>
<script>
    const $keyboardPop = document.getElementById('keyboardpop');
    const keyboard = document.querySelector(".keyboard");
    const $AutoComp = document.getElementById('autoComplete');
    const $search = document.getElementById('search');
    const $sBox1 = document.getElementById('search_box1');
    const $sBox2 = document.getElementById('search_box2');
    let lastX = 0;
    let lastY = 0; 
    let startX = 0; 
    let startY = 0; 

    keyboard.style.display = 'none';
    $sBox2.style.display = 'none';
    $keyboardPop.addEventListener('click', popUp);
    function popUp(){
        if(keyboard.style.display=='block')
        {
            keyboard.style.display = 'none';
        } else {
            keyboard.style.display= 'block';
            keyboard.style.top ='70px';
            keyboard.style.left ='1100px';
        }
    }
    $AutoComp.addEventListener('click', AC);
    function AC(){
        if($sBox2.style.display=='none'){
            $sBox2.style.display='flex';
            $AutoComp.style.transform = 'scaleY(-1)';
            $sBox1.style.border='none';
            $search.style.boxShadow='0px 7px 5px rgba(0, 0, 0, 0.1), 0px 0px 3px rgba(0,0,0,0.1)';
            $sBox1.style.borderRadius='10px 10px 0px 0px';
        } else {
            $sBox2.style.display='none';
            $AutoComp.style.transform = 'scaleY(1)';
            $sBox1.style.border='1px solid #03C75A';
            $search.style.boxShadow='none';
            $sBox1.style.borderRadius='50px';
        }
    }

    keyboard.addEventListener('mousedown', function(e){
    e.preventDefault(); 
    startX = e.clientX; 
    startY = e.clientY; 
        
    document.addEventListener('mouseup', onRemoveEvent); 
    
    document.addEventListener('mousemove', onMove); 
    });

    function onRemoveEvent() { 
    document.removeEventListener('mouseup', onRemoveEvent); 
    document.removeEventListener('mousemove', onMove); 
    } 

    function onMove(e) { 
    e.preventDefault(); 
    lastX = startX - e.clientX; 
    lastY = startY - e.clientY; 

    startX = e.clientX; 
    startY = e.clientY; 

    keyboard.style.top = `${keyboard.offsetTop - lastY}px`;
    keyboard.style.left = `${keyboard.offsetLeft - lastX}px`;
    }
</script>
</body>
</html>