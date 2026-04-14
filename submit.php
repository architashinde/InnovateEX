<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    echo "<div style='font-family:Arial; padding:20px;'>";
    echo "<p>Welcome! Today is " . date("l, d M Y") . "</p>";
    echo "<h2>Thank you, $name!</h2>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Message:</strong> $message</p>";
    echo "</div>";
} else {
    echo "<p>No data submitted.</p>";
}
?>