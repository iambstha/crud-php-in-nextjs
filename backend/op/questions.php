<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type"); 
include '../core/dbConnect.php';

$sql = 'SELECT * FROM questions';
$result = mysqli_query($con, $sql);

if ($result) {
    $questions = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $questions[] = $row;
    }
    echo json_encode($questions);
} else {
    echo json_encode(array('error' => 'Unable to fetch questions'));
}

mysqli_close($con);
