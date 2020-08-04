<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    exit;
}
?>
<?php

function recurse_copy($src,$dst) { 
    $dir = opendir($src); 
    @mkdir($dst); 
    while(false !== ( $file = readdir($dir)) ) { 
        if (( $file != '.' ) && ( $file != '..' )) { 
            if ( is_dir($src . '/' . $file) ) { 
                recurse_copy($src . '/' . $file,$dst . '/' . $file); 
            } 
            else { 
                copy($src . '/' . $file,$dst . '/' . $file); 
            } 
        } 
    } 
    closedir($dir); 
} 
  
// configuration
$url = 'start.php';
$file = 'tournaments.txt';

// check if form has been submitted
if (isset($_POST['text']))
{
/*    if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])):
        //your site secret key
        $secret = '6LcK4DEUAAAAALT5142P8DWJxjA3RsgmdqUaQfuP';
        //get verify response data
        $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
        $responseData = json_decode($verifyResponse);
        if($responseData->success):*/
		$name = $_POST['text'];
		$nameenc = $_POST['text'];
		if (file_exists('tournaments/'. $nameenc) != 1) {
			exec('cp -r ' . 'tournaments/template/ tournaments/' . $nameenc);
      // recurse_copy('tournaments/template/', 'tournaments/' . $nameenc);
//			mkdir($data . '/images', 0777);
//			copy('template/', $nameenc);
			$tournname = fopen('tournaments/' . $nameenc . '/tournament.txt', "w") or die("Unable to open file1!");
			fwrite($tournname, $name);
      fclose($tournname);
      $tourndirect = fopen('tournaments/'. $nameenc . '/userdata/' . htmlspecialchars($_SESSION["username"]), "w") or die("Unable to open file2!");
			fwrite($tourndirect, 'Tournament Director');
      fclose($tourndirect);
      echo 'success';
      header( 'Location: tournaments/' . $nameenc . '/login.php?data=' . $nameenc); 

		} else {
			header( 'Location: tournaments/'. $nameenc . '/login.php') ; 
		}

/*        else:
            $errMsg = 'Robot verification failed, please try again.';
	    echo $errMsg;
        endif;
    else:
        $errMsg = 'Please click on the reCAPTCHA box.';
	echo $errMsg;
    endif;*/
}

// read the textfile

//$text = file_get_contents($file);


?>

<head>
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" type="text/css" href="css/accordian.css">

<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<link rel="icon" href="favicon.ico" type="image/x-icon">
<link rel="stylesheet" href="w3.css">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<title>Start</title>

</head>
<body>  <script>
        $(function() {
            $("#topbar").load("topbar.php");
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

  <h2>Start a Tournament</h2>
</section><br><section> <div class="text-body" style="font-size: 20px;">

<p style="font-size: 150%;">
<script src='https://www.google.com/recaptcha/api.js'></script>

<!-- HTML form -->Tournament Name:
<form action="" method="post">
<input style="font-size:20px;width:500px; height:50px" type="text" rows="20" cols="50" id="text" name="text" value="">

<br><br>

<!--<div class="g-recaptcha" data-sitekey="6LcK4DEUAAAAAAUGO2pq__6V0K51-DwreZYdOB3f"></div>-->

<input id="sub" value="Create" type="submit" />
<input type="reset" value="Clear" />


<br><!--
If your tournament ALREADY exists, you will be taken directly to the urls. If your tournament DOES NOT exist yet, you will be asked to create a password(s).-->
</p>


</form>
</div>
</section><br>

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
