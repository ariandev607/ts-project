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


function edit(id, name, page, year){

    document.getElementById("edit_id").value = id;
    document.getElementById("edit_bookname").value = name;
    document.getElementById("edit_bookpage").value = page;
    document.getElementById("edit_bookyear").value = year;

    let modal = new bootstrap.Modal(document.getElementById("model_edit"));

    modal.show();
}


document.getElementById("editBookForm").addEventListener("submit", async function(e){

    e.preventDefault();

     let form_data = new FormData(this);

    let address = await fetch("t8.php", {

        method:'POST', 
        body:form_data
    });

    let modal = bootstrap.Modal.getInstance(document.getElementById("model_edit"));

    modal.hide();

    loaddata();
});


document.getElementById("addBookForm").addEventListener("submit", async function(e){
    
    e.preventDefault();

    let form_data = new FormData(this);

    let address = await fetch("t8.php", {

        method:'POST', 
        body:form_data
    });

    this.reset();

    let modal = bootstrap.Modal.getInstance(document.getElementById("staticBackdrop"));

    modal.hide();

    loaddata();
});