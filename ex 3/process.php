<?php 
$first_name = $_POST['first_name']; 
$last_name = $_POST['last_name']; 
$city_name = $_POST['city_name']; 
$email = $_POST['email']; 
$con = mysqli_connect("localhost", "root", "", "student");
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}
$insert = "INSERT INTO student (first_name, last_name, city_name, email) 
           VALUES ('$first_name', '$last_name', '$city_name', '$email')";
if (mysqli_query($con, $insert)) {
    echo "✅ Values added Successfully!<br><br>"; 
    echo "First Name: " . htmlspecialchars($first_name) . "<br>"; 
    echo "Last Name: " . htmlspecialchars($last_name) . "<br>"; 
    echo "City: " . htmlspecialchars($city_name) . "<br>"; 
    echo "Email: " . htmlspecialchars($email) . "<br>"; 
} else {
    echo "❌ Error: " . mysqli_error($con);
}
mysqli_close($con); 
?>
