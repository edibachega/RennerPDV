$(document).ready(function(){
    
    carregaRegistros();
    
    
    
    $('#codigo, #valor, #quantidade').keydown(function(key){
        
        if (key.keyCode >= 48 && key.keyCode <= 57)
        {
            return true;
        } else if (key.keyCode == 8 || key.keyCode == 9)
        {
            return true;
        } else {
            return false;
        }
    });
 
    $('#bt-cadastrar').click(function(){
        
        var temErro = false;
        $('input, select').each(function(idx, elem){
            var valor = $(elem).val();
            $(elem).parents('.form-group').removeClass('has-error');
            if(valor == ""){
                temErro = true;
                $(elem).parents('.form-group').addClass('has-error');
            }
        });
        
        if(temErro == true){
           //tem problema 
        }else {
            $('#form-produto').submit(); 
            $('input, select').each(function(idx, elem){
               $(elem).val(""); 
            });
        }
        
               
    });
    
    $('#form-produto').submit(function(evento){
       evento.preventDefault();
       
       var dados = {
           codigo: $('#codigo').val(),
           nome: $('#nome').val(),
           marca: $('#marca').val(),
           valor: $('#valor').val(),
           quantidade: $('#quantidade').val()
           
       };
       
       $.post("/model/cadastro.php", dados, function(retorno){
           var obj_retorno = JSON.parse(retorno);
           
           if (obj_retorno.status == "ok")
           {
               $('#cadastro-produto').modal('hide');
               carregaRegistros();
               $('#alert-produto').removeClass('hide');
           }
       });
       
    });
    
   
    
});

function formataValor(valor)
{
    var partes = valor.toString().split('.');
    
    if (partes[1] == undefined)
    {
        partes[1] = '00';
    }
    
    if (partes[1].length < 2)
    {
        partes[1] += '0';
    }
    
    var retorno = partes[0] + ',' + partes[1];
    
    return retorno;
}

function carregaRegistros()
{
      $.getJSON('/model/produtos.php', function(retorno){

        $('#lista-produtos tbody').empty();

        var total = 0;
        
        retorno.forEach(function(obj, idx){
            total += parseInt(obj.quantidade);
            
            var tr = '<tr obj-id="'+ obj.id +'">'
                        +"<td>"+ obj.codigo +"</td>"
                        +"<td>"+ obj.nome +"</td>"
                        +"<td>"+ obj.marca +"</td>"
                        +"<td>R$ "+ formataValor(obj.preco) +"</td>"
                        +"<td>"+ obj.quantidade +"</td>"
                        +'<td><button type="button" class="bt-deletar btn btn-danger" >'
                        +'<span class="glyphicon glyphicon-trash"></span>'
                        +'</button></td>'
                    +"</tr>";
            $('#lista-produtos tbody').append(tr);
        });
        
        $('#quantidade-total').html(total);
        
        $('.bt-deletar').click(function(){
            var tr = $(this).parent().parent();
            var id = tr.attr('obj-id');
            
            var dados = {
                id: id
            }
            
            $.getJSON('/model/deletar.php', dados, function(retorno){
                
                if (retorno.status == "ok")
                {
                    carregaRegistros();
                    $('#alert-produto').removeClass('hide');
                    $('#alert-produto').html('O produto foi deletado com sucesso');
                }
            });
        });

    });  
}