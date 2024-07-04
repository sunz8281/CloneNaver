<html>
    <head>
        <style>
            body{
                margin: 0px;
            }
            #header{
                display: flex;
                align-items: center;
            }
            #search_box1{
                width: 100%;
                border-bottom: 1px solid #03C75A;
            }
            form{
                display: flex;
                align-items: center;
                margin: 10px;
                margin-left: 150px;
            }
            .search_logo{
                height: 43px;
                width: 43px;
                margin-left: 10px;
                margin-right: 10px;
            }
            input[type=button], input[type=submit]:hover, #box2Btn{
                cursor:pointer;
            }
            #search_text{
                width: 520px;
                height: 43px;
                border : none;
                font-size: 20px;
            }
            #search_text:focus{
                outline: none;
            }
            #search_text::placeholder{
                color:#AAAAAA;
            }
            #keyboardpop{
                background-image: url('../image/keyboard.png');
                background-size: cover;
                border: none;
                background-color: white;
            }
            #keyboardpop:hover{
                background-image: url(../image/keyboard2.png);
            }
            #search_submit{
                background-image: url(../image/Logo_search2.png);
                background-size: cover;
                border: none;
                background-color: white;
            }
            #search_submit:hover{
                cursor: pointer;
            }
        </style>
        <title><?php echo $_GET['query'] ?> : 네이버 검색</title>
    </head>
    <body>
        <div id=header>
            <div id=search_box1>
                <form method=get action=search.php>
                    <a href=index.html><img src=../image/Logo_N2.png alt=logo class=search_logo></a>
                    <input type=text name=query id=search_text placeholder="검색어를 입력해 주세요." autocomplete="off" value=<?php echo $_GET['query'] ?>>
                    <input type = button id=keyboardpop class=search_logo value="">
                    <img src=../image/autocomplete.png alt=자동완성 height="5px" id=box2Btn>
                    <input type = submit class=search_logo id=search_submit alt=검색 value="">
                </form>
            </div>
            <div id = search_box2>
                <div id="autotext">
                    <div class = autoSection>자동완성 끄기</div><div class='dot autoSection'>&middot;</div>
                    <div class = autoSection>도움말</div><div class='dot autoSection'>&middot;</div>
                    <div class = autoSection>신고</div>
                    <div class = autoSection id = close>닫기</div>
                </div>
            </div>
            <div class="keyboard">가상키보드</div>
        </div>
        <script src="../js/search.js"></script>
    </body>
</html>