function LoadScripts() {

    AgregarTarea();
}

function AgregarTarea() {
    $('#agregarTarea').click(function() {
        const tareaTexto = $('#nuevaTarea').val().trim();
        if (tareaTexto !== "") {
            const tareaItem = $('<li></li>').text(tareaTexto);
            const completarBtn = $('<button class="completar"></button>').text('Completar').click(function() {
                tareaItem.toggleClass('completada');
                $(this).remove();
                $(this).prop('disabled', true);
            });
            const eliminarBtn = $('<button class="eliminar"></button>').text('Eliminar').click(function() {
                tareaItem.remove();
            });
            tareaItem.append(completarBtn, eliminarBtn);
            $('#listaTareas').append(tareaItem);
            $('#nuevaTarea').val('');
        }
    });
}