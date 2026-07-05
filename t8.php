<?php


include("db.php");




$user_db = mysqli_query($db, "select * from user");

$book_db = mysqli_query($db, "select * from books");


$users = [];
while($row1 = mysqli_fetch_assoc($user_db)){

    $users[] = $row1;
}

$books = [];
while($row2 = mysqli_fetch_assoc($book_db)){

    $books[] = $row2;
}

echo json_encode([

    "users" => $users, 
    "books" => $books
]);

?>