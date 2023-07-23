
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
  $subject = $_POST['subject'];
  $question = $_POST['question'];
  $option1 = $_POST['option1'];
  $option2 = $_POST['option2'];
  $option3 = $_POST['option3'];
  $option4 = $_POST['option4'];
  $correct_answer = $_POST['correct_answer'];

  $sql = "insert into `questions` (subject,question,option1,option2,option3,option4,correct_answer) 
  values ('$subject','$question','$option1','$option2','$option3','$option4','$correct_answer')";

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
