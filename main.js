$(document).ready(function(){
    $("form").on("submit", function(e){
        e.preventDefault();
        const enderecoDaNovaTarefa = $("#endereco-tarefa-nova").val();
        const novoItem = $(`<li>${enderecoDaNovaTarefa}</li>`);
        $(novoItem).appendTo("ul");
        $("#endereco-tarefa-nova").val("")
    })

        $('ul').on('click', 'li', function() {
            $(this).toggleClass('riscado');
        });

})