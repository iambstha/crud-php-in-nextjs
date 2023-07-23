<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Content-Type"); 
include '../core/dbConnect.php';

if (isset($_GET['deleteId'])) {
    $id = $_GET['deleteId'];
    $sql = "DELETE FROM `users` WHERE id=$id";
    $result = mysqli_query($con, $sql);
    if (!$result) {
        // Sending an error response with the appropriate HTTP status code
        http_response_code(500);
        die(mysqli_error($con));
    } else {
        // Sending a success response with the appropriate HTTP status code
        http_response_code(200);
        echo json_encode(array("message" => "User deleted successfully"));
    }
}
?>
