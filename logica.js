$(function(){
    agregar2();
    agregarMascota();
});

function agregar(){
   $("#addPropietario").on('click',function (ev){
        ev.preventDefault();
        var nombre= $('input[id=nombre1]');
        var apellido = $('input[id=apellido1]');
        var direccion = $('input[id=direccion1]');
        var telefono = $('input[id=telefono1]');
        $('tbody').append("<tr>"+
                                   "<td>"+nombre.val()+"</td>"+
                                   "<td>"+apellido.val()+"</td>"+
                                   "<td>"+direccion.val()+"</td>"+
                                   "<td>"+telefono.val()+"</td>"+
                                   "<td> <a href= '#mascota' >Agregar Mascota</a> </td>"+
                                "</tr>");
        
            nombre.val('');
            apellido.val('');
            direccion.val('');
            telefono.val('');

   }); 
}
function agregar2(){
    $('#addPropietario').on('click', function (ev){
        ev.preventDefault();
        var nombre=$('input[id=nombre1]');
        var apellido=$('input[id=apellido1]');
        var direccion=$('input[id=direccion1]');
        var telefono=$('input[id=telefono1]');
        /*
        var nombre = $('#nombre1').val();
        var apellido = $('#apellidos1').val();
        var direccion = $('#direccion1').val();
        var telefono = $('#telefono1').val();*/
        $('#tPropietario').append("<tr>"+
                                        "<td>"+nombre.val()+"</td>"+
                                        "<td>"+apellido.val()+"</td>"+
                                        "<td>"+direccion.val()+"</td>"+
                                        "<td>"+telefono.val()+"</td>"+
                                        "<td> <a href= '#mascota' >Agregar Mascota</a> </td>"+
                                    "</tr>");
        nombre.val('');
        apellido.val('');
        direccion.val('');
        telefono.val('');
    });
}


function agregarMascota(){
    $("#Add-Mascota").on('click',function(ev){
        ev.preventDefault();
        var nombremascota=$('input[id=mascota]');
        var tipo=$('select[id=tipo]');
        var nacimiento=$('input[type=date]');
        
        $('#tMascota').append("<tr>"+
                                "<td>"+nombremascota.val()+"</td>"+
                                "<td>"+tipo.val()+"</td>"+
                                "<td>"+nacimiento.val()+"</td>"+
                             "</tr>");
        nombremascota.val('');
        tipo.val('');
        nacimiento.val('');
    });
}
