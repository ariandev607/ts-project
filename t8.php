<?php


include("db.php");


if(isset($_POST['del'])){

    $delet = $_POST['del'];

    mysqli_query($db, "update books set del=1 where id='$delet'");
}


if(isset($_POST['edit_bookname'])){

    $id = $_POST['id'];
     $ebookname = $_POST['edit_bookname'];
    $ebookpage = $_POST['edit_bookpage'];
    $ebookyear = $_POST['edit_bookyear'];

    mysqli_query($db, "update books set
     book_name='$ebookname',
      book_page='$ebookpage', 
      book_year='$ebookyear' where id='$id'");

}


if(isset($_POST['bookname'])){

    $bookname = $_POST['bookname'];
    $bookpage = $_POST['bookpage'];
    $bookyear = $_POST['bookyear'];

    mysqli_query($db, "insert into books (book_name, book_page, book_year)
    values ('$bookname', '$bookpage', '$bookyear')");
}


$user_db = mysqli_query($db, "select * from user");

$book_db = mysqli_query($db, "select * from books where del=0");


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