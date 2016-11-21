$('document').ready(function () {
    $.getJSON('/model/produtos.php',function (retorno) {
        $('#lista-produtos tbody').empty();
        var total = 0;
        retorno.forEach(function (obj, idx){
            total += parseInt(obj.quantidade);
            var tr = "<tr>"
                        +"<td>"+ obj.codigo +"</td>"
                        +"<td>"+ obj.nome +"</td>"
                        +"<td>"+ obj.marca +"</td>"
                        +"<td>R$ "+ formataValor(obj.preco) +"</td>"
                        +"<td>"+ obj.quantidade +"</td>"
                    +"</tr>";
            $('#lista-produtos tbody').append(tr);
        });
        $('#quantidade-total').html(total);
    }); 
    $('#codigo, #valor, #quantidade').keydown(function(key) {
        if(key.keyCode >= 48 && key.keyCode <= 57) {
            return true;
        }else if (key.keyCode == 8 || key.keyCode == 9 || key.keyCode == 37 
                    || key.keyCode == 39 || key.keyCode == 46 
                    || key.keyCode == 32) {
            return true;
        } else {
            return false;
        }
    });
    $('#bt-cadastrar').click(function(){
       $('#form-produto').submit(); 
    });
    $('#form-produto').submit(function(evento){
        evento.preventDefault();
        var dados = {
            
        };
        $.post("/model/cadastro.php", dados, function(retorno){
            //console.log(retorno);
            var obj_retorno = JSON.parse(retorno);
            //console.log(obj_retorno);
            if(obj_retorno.status == "ok"){
                alert("foi cadastrado com sucesso!!!");
            }else {
                alert("i cara, não rolou!");
            }
        });
    });    
});

function formataValor(valor) {
    var partes = valor.toString().split('.');
    if(partes[1] == undefined){
        partes[1] = '00';
    }
    if(partes[1].length < 2){
        partes[1] += '0';
    }
    var retorno = partes[0] +','+ partes[1];
    return retorno;
}

