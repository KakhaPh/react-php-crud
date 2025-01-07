<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("ACCESS-Control-Allow-Methods: *");

require 'dbConnect.php';
$objdb = new dbConnect;
$conn = $objdb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO users (name, email, mobile, created_at) VALUES (:name, :email, :mobile, :created_at)";
        $stmt = $conn->prepare($sql);
        $created_at = date('Y-m-d H:i:s');
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':mobile', $user->mobile);
        $stmt->bindParam(':created_at', $created_at);
        if ($stmt->execute()) {
            echo json_encode(['status' => '1', 'message' => 'User added successfully']);
        } else {
            echo json_encode(['status' => '0', 'message' => 'Failed to add user']);
        }
        break;
    case "GET":
        $sql = "SELECT * FROM users";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->query($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($users);
        break;
    case "PUT":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE users SET name= :name, email= :email, mobile= :mobile, updated_at= :updated_at WHERE id= :id";
        $stmt = $conn->prepare($sql);
        $updated_at = date('Y-m-d H:i:s');
        $stmt->bindParam(':id', $user->id);
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':mobile', $user->mobile);
        $stmt->bindParam(':updated_at', $updated_at);
        if ($stmt->execute()) {
            $response = json_encode(['status' => '1', 'message' => 'User Updated successfully']);
        } else {
            $response = json_encode(['status' => '0', 'message' => 'Failed to update user']);
        }
        echo $response;
        break;
    case "DELETE":
        $sql = "DELETE FROM users WHERE id= :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[3]);

        if ($stmt->execute()) {
            $response = json_encode(['status' => '1', 'message' => 'User Deleted successfully']);
        } else {
            $response = json_encode(['status' => '0', 'message' => 'Failed to delete user']);
        }
        echo $response;
        break;
}
