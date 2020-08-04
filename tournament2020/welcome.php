<head>
  <link rel="stylesheet" type="text/css" href="style.css">
  <link rel="stylesheet" type="text/css" href="css/slider.css">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="w3.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css"> -->
  <title>Tournament Scoring System</title>
</head>

<body>
<script>
        $(function() {
            $("#topbar").load("topbar.php");
        });
    </script>
    <div id="topbar"></div><br>
  <div style="max-width: 1024px;margin:0 auto;">

    <script>
      $(function() {
        $("#header").load("header.html");
      });
    </script>
    <div id="header"></div>

    <br>
    <section>
      <div class="text-body">

      <?php
        // Initialize the session
        session_start();

        // Check if the user is logged in, if not then redirect him to login page
        if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
          header("location: login.php");
          exit;
        }
        ?>

        <div class="page-header">
          <h1>Welcome <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b></h1>
        </div>
      </div>
    </section><br>
    <div class="text-body" style="font-size: 20px;">

    <section>


        <p>
          <a href="start.php" class="btn btn-warning">Create Tournament</a><br><br>

<!--          <a href="reset-password.php" class="btn btn-warning">Reset Your Password</a><br>-->
          <a href="logout.php" class="btn btn-danger">Sign Out of Your Account</a>
        </p>
      </section><br>
        <section>
          <div>
            <h2>Login to Existing Tournament:</h2>
          </div>
        </section><br>
        <section>
          <div>
            <script>
              function loadtourn(tourn) {
                document.getElementById('text').value = tourn
                document.getElementById('sub').click()

              }

              tournaments = textFileToArray('tournaments.txt')
              x = 0
              while (x != tournaments.length) {
                //document.write('<button onclick="loadtourn(\''+tournaments[x]+'\')">'+tournaments[x]+'</button><br>')
                x = x + 1
              }
            </script>
            <?php
            foreach (glob("tournaments/*/tournament.txt*") as $filename) {
              //	echo $filename."<br />";
              $file = fopen($filename, "r");
              $x = fgets($file);
              $y = str_replace("'", "\'", $x);
              echo '<a href="tournaments/' . $x . '/login.php">' . $x . '</a><br>';
              fclose($file);
            }
            ?>

          </div>

      </div>
    </section>
    <br>
    <script>
      $(function() {
        $("#footer").load("footer.html");
      });
    </script>
    <div id="footer"></div>
  </div>
</body>
