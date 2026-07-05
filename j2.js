async function loaddata() {
    
    let address = await fetch("t8.php");

    let json = await address.json();

    let user_table = document.getElementById("user_table");

    user_table.innerHTML = "";

    json.users.forEach(function(u, i){

        user_table.innerHTML += `
        
        <tr>
            <td>${i + 1}</td>
            <td>${u.username}</td>
            <td>${u.Namefull}</td>
            <td>${u.mobile}</td>
        </tr>`;
    });

    let book_table = document.getElementById("book_table");

    book_table.innerHTML = "";

    json.books.forEach(function(b, i){

        book_table.innerHTML += `
        
        <tr>
            <td>${i + 1}</td>
            <td>${b.book_name}</td>
            <td>${b.book_page}</td>
            <td>${b.book_year}</td>

            <td>
                <button class="btn btn-primary btn-sm"
                 onclick="delet(${b.id}, '${b.book_name}', ${b.book_page}, ${b.book_year})">ویرایش</button>

                <button class="btn btn-danger btn-sm" onclick="delet(${b.id})">حذف</button>
            </td>
        </tr>`;
        
    });
}

loaddata();



async function delet(id){
    
    let form_data = new FormData();

    form_data.append("del", id);

    let address = await fetch("t8.php", {
        method:'POST', 
        body:form_data
    });

    loaddata();
}