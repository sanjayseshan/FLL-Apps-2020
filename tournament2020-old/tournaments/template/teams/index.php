<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
$myfile = fopen('../tournament.txt', "r") or die("Unknown tournament. This tournament has been corrupted.");
$tournament = trim(fgets($myfile));
fclose($myfile);

if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true || $_SESSION["tournament"]!==$tournament){
    header("location: ../login.php");
    exit;
}


?>
<style>
h1 {
    color:red;
    font-family:verdana;
    font-size:200%;
}
b  {
    color:green;
    font-family:arial;
    font-size:100%
}
p  {
    color:brown;
    font-family:arial;
    font-size:110%
}
</style>
<a href="../"><img src="http://archive.ev3lessons.com/arrow.jpg"></a>
<h1>Team Management</h1>

<?php
$file = fopen("../admin/teams.txt","r");

while(! feof($file))
  {
    $teamno = (int) explode(",",fgets($file))[0];
  echo "<a href='".$teamno."/index.php'><img src='http://archive.ev3lessons.com/folder.gif'>Team No. ".$teamno."</a><br />";
  }

fclose($file);



?>