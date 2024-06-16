<html>
    <head>
        <style>
        </style>
    </head><body>
  <div class="container">
    <img id="img" src="./image/keyboard.png">
  </div>
  <script>
    $img = document.getElementById("img");
    $img.addEventListener('mouseover', function() {
      $img.src ="./image/keyboard2.png";
    });
    $img.addEventListener('mouseout', function() {
      $img.src ="./image/keyboard.png";
    });
  </script>
</body>
</html>