<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: ../../login.php");
    exit;
}
?>

<head>
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" type="text/css" href="css/accordian.css">

<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<link rel="icon" href="favicon.ico" type="image/x-icon">
<link rel="stylesheet" href="w3.css">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<title>Login</title>

</head>
<body><script>
        $(function() {
            $("#topbar").load("../../topbar.php");
        });
    </script>
    <div id="topbar"></div><br>
  <div style="max-width: 1024px;margin:0 auto;">
    <script>
    $(function(){
      $("#header").load("header.html");
    });
    </script>
     <div id="header"></div>
     <br>
  <section style="padding: 5px 5px 5px 15px;">

  <h2>Login:</h2>
</section><br><section>
<div class="text-body" style="font-size: 20px;">

<p style="font-size: 100%;">

<!-- HTML form -->

<?php

// configuration
//$file = 'tournaments.txt';

// check if form has been submitted



$myfile = fopen('tournament.txt', "r") or die("Unknown tournament. This tournament has been corrupted.");
$tournament = trim(fgets($myfile));
fclose($myfile);

if (file_exists('userdata/'. $_SESSION["username"])) {
   $myfile = fopen('userdata/'. $_SESSION["username"], "r") or die("You are not registered for this tournament. Please contact your tournament director");
   $filerole = trim(fgets($myfile));
   fclose($myfile);
   $_SESSION["role"] = $filerole;
   $_SESSION["tournament"] = $tournament;
   echo 'Welcome ' .  $_SESSION["username"] . ' to tournament ' . $tournament . '. You have been registered as a ' . $filerole . '.';
   
} else {
   echo 'You are not registered for this tournament';
}

?>

<br>
<a href="index.php">Return to home</a>

</p>
</div>

</section>
<br>
    <script>
    $(function(){
      $("#footer").load("footer.html");
    });
    </script>
     <div id="footer"></div>
  </div>
<script src='js/accordian.js'></script>

</body>
