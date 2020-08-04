<?php

// configuration
$url = 'createpassword.php';
//$file = 'tournaments.txt';

// check if form has been submitted
if (isset($_POST['usr']))
{

$myfile = fopen($_POST['usr'], "r") or die("Incorrect Username");
$password = $_POST['pas'];
//$rememberme = $_POST['user'];
$filepassword = trim(fgets($myfile));
$filerole = trim(fgets($myfile));
//echo $password;
//echo $filepassword;



fclose($myfile);

if (strcmp(md5($password), $filepassword) == 0) {

// echo 'correct';
if (strcmp($filerole, 'Tournament Director') == 0) {
	if (strcmp($_GET['data'], 'scorer') == 0) {
		header( 'Location: loadscorer.html') ;
	} elseif (strcmp($_GET['data'], 'corevalue') == 0) {
		header( 'Location: /CoreValues.html#' . $_GET['hash']) ;
	} elseif (strcmp($_GET['data'], 'rdes') == 0) {
		header( 'Location: /Rdes.html#' . $_GET['hash']) ;
	} elseif (strcmp($_GET['data'], 'project') == 0) {
		header( 'Location: /Project.html#' . $_GET['hash']) ;
	} else {
		  header( 'Location:'. $_GET['data']  . '.php#') ;
	}
	echo 'hi TD';
} elseif (strcmp($filerole, 'Head Referee') == 0) {
    if (strcmp($_GET['data'], 'scorer') == 0) {
	      header( 'Location: loadscorer.html') ;
    } else {
	     echo 'Denied';
    }
} elseif (strcmp($filerole, 'Referee') == 0) {
   if (strcmp($_GET['data'], 'scorer') == 0) {
     header( 'Location: loadscorer.html') ;
   } else {
      echo 'Denied';
   }
} elseif (strcmp($filerole, "Head Judge") == 0) {
	if (strcmp($_GET['data'], 'corevalue') == 0) {
              header( 'Location: /CoreValues.html#' . $_GET['hash']) ;
        } elseif (strcmp($_GET['data'], 'rdes') == 0) {
                header( 'Location: /Rdes.html#' . $_GET['hash']) ;
        } elseif (strcmp($_GET['data'], 'project') == 0) {
                header( 'Location: /Project.html#' . $_GET['hash']) ;
   	} else {
   	   echo 'Denied';
   	}

} elseif (strcmp($filerole, "Core Values Judge") == 0) {
	if (strcmp($_GET['data'], 'corevalue') == 0) {
              header( 'Location: /CoreValues.html#' . $_GET['hash']) ;
   	} else {
   	   echo 'Denied';
   	}

} elseif (strcmp($filerole, "Project Judge") == 0) {
        if (strcmp($_GET['data'], 'project') == 0) {
                header( 'Location: /Project.html#' . $_GET['hash']) ;
        } else {
           echo 'Denied';
        }

} elseif (strcmp($filerole, "Robot Design Judge") == 0) {
        if (strcmp($_GET['data'], 'rdes') == 0) {
                header( 'Location: /Rdes.html#' . $_GET['hash']) ;
        } else {
           echo 'Denied';
        }

} else {
    echo 'unknown';
}

} else {
   echo 'Incorrect, please try again';
}



}

// read the textfile

$text = file_get_contents($file);


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
<body>
  <div style="max-width: 1024px;margin:0 auto;">
<!--    <script>
    $(function(){
      $("#header").load("header.html");
    });
    </script>
     <div id="header"></div>--><br>
  <section style="padding: 5px 5px 5px 15px;">

  <h2>Login:</h2>
</section><br><section>
<div class="text-body" style="font-size: 20px;">

<p style="font-size: 150%;">

<!-- HTML form -->
<script>document.write('<form action="'+window.location.search+'" method="post">')</script>
Email:<input type="username" rows="20" cols="50" id="usr" name="usr" value="">
Password:<input type="password" rows="20" cols="50" id="pas" name="pas" value="">
<br>
<input type="submit" />
<input type="reset" />
</form>
<button onclick="window.location.href = '/' + window.location.href.split('/')[3] + '/'">Back to main page</button></p>
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