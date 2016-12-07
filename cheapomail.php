<?php
echo "test";

$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = "cheapomail";
$conn = new PDO("mysql:host=$host; dbname=$dbname", $username, $password);


$stmt = $conn->query("SELECT * FROM User");

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo '<ul>';
foreach ($results as $row) {
  echo '<li>' . " User id: " . $row['id'] . " User firstname: " . $row['firstname'] . " User lastname: " . $row['lastname'] . " \nUsername: " . $row["username"] . '</li>';
}
echo '</ul>';
?>