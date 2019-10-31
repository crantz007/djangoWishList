var deleteButtons =document.querySelectorAll('.delete');

deleteButtons.forEach(function(button){
    button.addEventListener('click', function (ev) {

        var okToDelete =confirm("delete place -are you sure?");

        if(!okToDelete){
            ev.preventDefault();
        }

    })
});