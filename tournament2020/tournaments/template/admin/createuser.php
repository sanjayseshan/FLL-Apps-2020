<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
$myfile = fopen('../tournament.txt', "r") or die("Unknown tournament. This tournament has been corrupted.");
$tournament = trim(fgets($myfile));
fclose($myfile);

if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true || $_SESSION["tournament"]!==$tournament || $_SESSION["role"] !== "Tournament Director"){
    header("location: ../login.php");
    exit;
}
?>
<head>
<link rel="stylesheet" type="text/css" href="../style.css">
<link rel="stylesheet" type="text/css" href="../css/accordian.css">

<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<link rel="icon" href="favicon.ico" type="image/x-icon">
<link rel="stylesheet" href="../w3.css">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<title>User Creator</title>

</head>
<body><script>
        $(function() {
            $("#topbar").load("../../../topbar.php");
        });
    </script>
    <div id="topbar"></div><br>
  <div style="max-width: 1024px;margin:0 auto;">
   <script>
    $(function(){
      $("#header").load("header.html");
    });
    </script>
     <div id="header"></div><br>
  <section style="padding: 5px 5px 5px 15px;">

  <h2>Invite Volunteer:</h2>
</section><br><section>
<div class="text-body" style="font-size: 14px;">
<?php

// configuration
$url = '';
//$file = 'tournaments.txt';

// check if form has been submitted
if (isset($_POST['usr']))
{
$myfile = fopen('../userdata/'. $_POST['usr'], "w");
   $txt = $_POST['role'];
fwrite($myfile, $txt);
fclose($myfile);
    //header(sprintf('Location: %s', $url));
    printf('<a href="%s">Add new user</a>.', htmlspecialchars($url));
printf('<br><a href="../index.php">View Tournament Dashboard</a>.', htmlspecialchars($_GET['data']));
exit();
}

// read the textfile

//$text = file_get_contents($file);


?>
<p style="font-size: 150%;">

<!-- HTML form --><b>User Setup:
<br>
Tournament Director:</b> Create a user for the Tournament Director. This user will be able to access the Tournament Scorer designed for your tournament and the Setup page.<br>
<b>Judge:</b> Create one user per Judge. The judges will only be able to access only the Tournament Judging page.<br>
<b>Referee:</b> Create one user per Referee. The referees will only be able to access only the Tournament Scorer page.<br>
<form action="" method="post">
Email:<input type="username" rows="20" cols="50" id="usr" name="usr" value="">
<br>
Role:<select id="role" name="role">
  <option>Tournament Director</option>
  <option>Judge</option>
  <option>Referee</option>
  </select>
<br>
<input type="submit" />
<input type="reset" />
<br>


</p>

</form>
</div>

</section>
<br>
    <script>
    $(function(){
      $("#footer").load("../footer.html");
    });
    </script>
     <div id="footer"></div>
  </div>
<script src='js/accordian.js'></script>

</body>
