<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type"); 
include '../core/dbConnect.php';

$sql = 'SELECT * FROM users';
$result = mysqli_query($con, $sql);

if ($result) {
    $users = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $users[] = $row;
    }
    echo json_encode($users);
} else {
    echo json_encode(array('error' => 'Unable to fetch users'));
}

mysqli_close($con);
