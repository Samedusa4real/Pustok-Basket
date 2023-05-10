let modalBtns = document.querySelectorAll(".card-image .modal-btn")


modalBtns.forEach(modalBtn => {
    modalBtn.addEventListener('click', function (e) {
        e.preventDefault();

        let url = $(this).attr("href");

        fetch(url)
            .then(response => {

                if (response.ok) {
                    return response.text()
                }
                else {
                    alert("xeta bas verdi!")
                }
            })
            .then(data => {
                $("#quickModal .modal-dialog").html(data)
                $("#quickModal").modal('show')
            })


})
    
})