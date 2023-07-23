<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type"); 
include '../core/dbConnect.php';


if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];

    $sql = "insert into `users` (name,email) 
    values ('$name','$email')";
    $result = mysqli_query($con,$sql);
    if($result){
        header('Content-Type: application/json');
        // header('location: users.php');
    }
    else{
        die(mysqli_error($con));
    }
}

?>

<?php
include '../core/dbConnect.php';

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST'); // Add other allowed methods if needed (e.g., GET, PUT, DELETE)
header('Access-Control-Allow-Headers: Content-Type'); // Add other allowed headers if needed

// Allow requests only from your React app's domain (replace http://localhost:3000 with your app's domain)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  echo $name;

  $sql = "insert into `users` (name,email) 
  values ('$name','$email')";

  try {
    $result = mysqli_query($con,$sql);
    header('Content-Type: application/json');
    echo json_encode(array('message' => 'Data added successfully'));
  } catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(array('error' => 'Database error: ' . $e->getMessage()));
  }
}
?>
