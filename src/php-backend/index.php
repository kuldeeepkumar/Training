<?PHP 
$serverName="localhost";
$userName="root";
$password="";
$databaseName="react_php";
$conn = mysqli_connect($serverName, $userName, $password, $databaseName);

$recText = $_POST['text'];

$query = ("INSERT INTO react_php (texts) VALUES('$recText')");

if (mysqli_query($conn, $query)) {
  echo "Data has been inserted successfully";
}else {
  echo "Error";
}
?>