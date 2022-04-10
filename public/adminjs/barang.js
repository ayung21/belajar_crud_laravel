$(document).ready(function(){
    $('#example1').on('click','.get-data-update-barang',function(){
        var id = $(this).attr('data-id');
        $('#form-update-barang').find('input[name="id_barang"]').val(id);
    });
    $('#example1').on('click','.delete-barang',function(){
        var dataid = $(this).attr('data-id');
        var data = dataid.split(';');
        $('#myModalDelete').find('span#nama_barang').text(data[1]);
        $('#myModalDelete').find('input[name="id_barang"]').val(data[0]);
    });
});