$('document').ready(function () {
    $.getJSON('/model/produtos.json',function (retorno) {
        $('#lista-produtos tbody').empty();
        retorno.forEach(function (obj, idx){
            console.log(obj, idx);
            var preco = obj.preco.toString().split('.');
            var tr = "<tr>"
                        +"<td>"+ obj.codigo +"</td>"
                        +"<td>"+ obj.nome +"</td>"
                        +"<td>"+ obj.marca +"</td>"
                        +"<td>R$ "+ preco[0]+','+preco[1] +"</td>"
                        +"<td>"+ obj.quantidade +"</td>"
                    +"</tr>";
            $('#lista-produtos tbody').append(tr);
        });
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
});