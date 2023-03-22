$(document).ready(function(){
    
    let form = $("form");

    form.submit(function(e){
        e.preventDefault();    
        let inputForm= $("#input-form");
        if(inputForm.val().length <= 100){
            
            // ADICIONAR NOVO ITEM SE CARACTERES FOR ABAIXO OU IGUAL 100
            let novoItem = $(`<li style = "display:none;">
            <h2>${inputForm.val()}</h2>
            </li>`).appendTo("ul");
            novoItem.fadeIn(1000);

            // RISCO NO TEXTO AO CLICAR NA TAREFA
            $("li").click(function(){
                $(this).css("text-decoration", "line-through");
           })  
        }

    })

    
})