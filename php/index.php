
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>forme</h1>


    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST">

       userid : <input type="number" name="id" ><br>
    write your name :<input type="text" name="name" required> <br>
    write your password : <input type="password" name="pass" required><br>
    write your addrese : <input type="password" name="add" required><br>
    <input type="submit" name="submit" id="">
    </form>


</body>
</html>









<?php


if (isset($_POST['submit'])) {
    $userid = $_POST['id'];
    $name = $_POST['name'];
    $pass = $_POST['pass'];
    $addrese= $_POST['add'];

}



$username = "root" ;
$password = "";




$database = new
PDO("mysql:host=localhost;dbname=proeject;", $username, $password);


// if ($database) {
//     echo"hello word";
// }

$sql = $database ->prepare("INSERT into user (userid,name,password,addrese) VALUES ('$userid','$name','$pass',' $addrese');");
$sql -> execute();



?>