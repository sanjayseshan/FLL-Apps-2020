<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
$myfile = fopen('../../tournament.txt', "r") or die("Unknown tournament. This tournament has been corrupted.");
$tournament = trim(fgets($myfile));
fclose($myfile);

if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true || $_SESSION["tournament"]!==$tournament){
    header("location: ../../login.php");
    exit;
}

if (!($_SESSION["role"] == "Tournament Director" || $_SESSION["role"] == "Judge" || $_SESSION["role"] == "Referee" || $_SESSION["role"] == basename(dirname(__FILE__)))) {
    header("location: ../");
    exit;
}

?>

<a href="../"><img src="http://archive.ev3lessons.com/arrow.jpg"></a>
<h1>Team Management</h1>


<?php

// configuration
//$url = 'setup.php';
$file = 'data.txt';

// check if form has been submitted
if (isset($_POST['text']))
{
    // save the text contents
    $file = str_replace("\r", "", $file);
    file_put_contents($file, $_POST['text']);

    // redirect to form again
    //header(sprintf('Location: %s', $url));

printf('<b style="color: red">Saved</b><br><!--<a href="">Return</a>.-->');
 
echo "";
}

// read the textfile
$text = file_get_contents($file);

?>

<!-- HTML form -->
<b>Upload data</b><br>
Instructions: Use this textbox to put link to any submissions needed. For example, if this is an online tournament, link to required videos by your tournament director
<form action="" method="post">
      <textarea rows="20" cols="50" id="text" name="text"><?php echo htmlspecialchars($text) ?></textarea><br>
      <?php
      if (!($_SESSION["role"] == "Judge" || $_SESSION["role"] == "Referee")) { 
        echo '<input id="teams" value="Save" type="submit"/>';
      }
      ?>
</form>
<br>


<?php
if ($_SESSION["role"] == "Tournament Director" || $_SESSION["role"] == "Judge" || $_SESSION["role"] == "Referee") {
    $teamno = basename(dirname(__FILE__));
        echo "<a href='../../scorer/index.php?round=1&team=".$teamno."'><img src='http://archive.ev3lessons.com/folder.gif'>Edit Robot Game Round 1 Score</a><br />";
        echo "<a href='../../scorer/index.php?round=2&team=".$teamno."'><img src='http://archive.ev3lessons.com/folder.gif'>Edit Robot Game Round 2 Score</a><br />";
        echo "<a href='../../scorer/index.php?round=3&team=".$teamno."'><img src='http://archive.ev3lessons.com/folder.gif'>Edit Robot Game Round 3 Score</a><br />";

        echo "<a href='../../rubrics/project.php?round=1&team=".$teamno."'><img src='http://archive.ev3lessons.com/folder.gif'>Edit Innovation Project Judging Rubric</a><br />";
        echo "<a href='../../rubrics/robot.php?round=1&team=".$teamno."'><img src='http://archive.ev3lessons.com/folder.gif'>Edit Robot Design Judging Rubric</a><br />";
        echo "<a href='../../rubrics/corevalues.php?round=1&team=".$teamno."'><img src='http://archive.ev3lessons.com/folder.gif'>Edit Core Values Judging Rubric</a><br />";

} else {
    $teamno = basename(dirname(__FILE__));
    if (file_exists("../../admin/release2.txt")) {
        if (file_exists("robotScores/1.txt")) {
            echo "<a href='../../scorer/indexRO.php?round=1&team=".$teamno."'><img src='http://archive.ev3lessons.com/folder.gif'>View Robot Game Round 1 Score</a><br />";
        }
        if (file_exists("robotScores/2.txt")) {
            echo "<a href='../../scorer/indexRO.php?round=2&team=".$teamno."'><img src='http://archive.ev3lessons.com/folder.gif'>View Robot Game Round 2 Score</a><br />";
        }
        if (file_exists("robotScores/3.txt")) {
            echo "<a href='../../scorer/indexRO.php?round=3&team=".$teamno."'><img src='http://archive.ev3lessons.com/folder.gif'>View Robot Game Round 3 Score</a><br />";
        }
    }
    if (file_exists("../../admin/release.txt")) {
        if (file_exists("robotScores/rb-rp.txt")) {
            echo "<a href='../../rubrics/projectRO.php?round=1&team=".$teamno."'><img src='http://archive.ev3lessons.com/folder.gif'>View Innovation Project Judging Rubric</a><br />";
        }
        if (file_exists("robotScores/rb-rd.txt")) {
            echo "<a href='../../rubrics/robotRO.php?round=1&team=".$teamno."'><img src='http://archive.ev3lessons.com/folder.gif'>View Robot Design Judging Rubric</a><br />";
        }
        if (file_exists("robotScores/rb-cv.txt")) {
            echo "<a href='../../rubrics/corevaluesRO.php?round=1&team=".$teamno."'><img src='http://archive.ev3lessons.com/folder.gif'>View Core Values Judging Rubric</a><br />";
        }
    }
}
?>
