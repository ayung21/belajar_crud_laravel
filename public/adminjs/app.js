$(document).ready(function () {
	$(".top-header-info").on("click", ".button-tombol-menu", function () {
		if ($(this).hasClass("hide-sidebar")) {
			$("div.content-wrapper").css("margin-left", "0");
			$("aside.main-sidebar").css("left", "-231px");
			$("a.logo").css("margin-left", "-231px");
			$("nav.top-header-info").css("margin-left", "0");
			$("footer.main-footer").css("margin-left", "0");
			$(this).removeClass("hide-sidebar");
			$(this).addClass("show-sidebar");
			// console.log("show sidebar");
		} else {
			$("div.content-wrapper").css("margin-left", "230px");
			$("aside.main-sidebar").css("left", "0");
			$("a.logo").css("margin-left", "");
			$("nav.top-header-info").css("margin-left", "230px");
			$("footer.main-footer").css("margin-left", "230px");
			$(this).removeClass("show-sidebar");
			$(this).addClass("hide-sidebar");
			// console.log("hide sidebar");
		}
	});

	$("div.content-wrapper").css("margin-left", "0");
	$("aside.main-sidebar").css("left", "-231px");

	$("a.logo").css("margin-left", "-231px");
	$("nav.top-header-info").css("margin-left", "0");

	$("footer.main-footer").css("margin-left", "0");

	$("#toggle-menu").css("display", "block");

	$(".select2-basic").select2({
		width: "1248px",
	});

	$(".select2-basic2").select2({
		width: "548px",
	});

	if(mobile == "mobile"){
		$('span.select2').css("width", "100%");
	}

	$("#example1").dataTable();
	$("#example2").dataTable({
		bPaginate: true,
		bLengthChange: false,
		bFilter: false,
		bSort: true,
		bInfo: true,
		bAutoWidth: false,
	});

	$("#table-terdekat").dataTable({
		// paginate: false,
		bPaginate: false,
		bSearch: false,
		// bLengthChange: false,
		bFilter: false,
		bSort: false,
		bInfo: false,
		// bAutoWidth: false,
	});

	// =====================================================================================================================================================
	// 															TOKO
	// =====================================================================================================================================================

	$("#example1").on("click", ".delete-kota", function () {
		var id = $(this).attr("data-id");

		var conf = confirm("yakin ingin menghapus ???");

		if (conf == true) {
			$.ajax({
				type: "post",
				url: base_url + "Home/deleteKota",
				dataType: "json",
				data: {
					id: id,
				},
				success: function (result) {
					location.reload(true);
				},
			});
		}
	});

	$("#example1").on("click", ".get-data-update-kota", function () {
		var id = $(this).attr("data-id");

		$.ajax({
			type: "post",
			url: base_url + "Home/getDataKota",
			dataType: "json",
			data: {
				id: id,
			},
			success: function (result) {
				$.each(result, function (key, value) {
					$("#form-update-kota")
						.find("input[name=" + key + "]")
						.val(value);
				});
			},
		});
	});

	// =====================================================================================================================================================
	// 															END MASTER TOKO
	// =====================================================================================================================================================

	// =====================================================================================================================================================
	// 															MASTER BARANG
	// =====================================================================================================================================================

	$("#example1").on("click", ".delete-barang", function () {
		var id = $(this).attr("data-id");

		var conf = confirm("yakin ingin menghapus ???");

		if (conf == true) {
			$.ajax({
				type: "post",
				url: base_url + "Home/deleteBarang",
				dataType: "json",
				data: {
					id: id,
				},
				success: function (result) {
					location.reload(true);
				},
			});
		}
	});

	$("#example1").on("click", ".get-data-update-barang", function () {
		var id = $(this).attr("data-id");

		$.ajax({
			type: "post",
			url: base_url + "Home/getDataBarang",
			dataType: "json",
			data: {
				id: id,
			},
			success: function (result) {
				$.each(result, function (key, value) {
					$("#form-update-barang")
						.find("input[name=" + key + "]")
						.val(value);
				});
			},
		});
	});

	$("#example1").on("click", ".accept-toko", function () {
		var id = $(this).attr("data-id");

		var conf = confirm("Validasi Toko ???");

		if (conf == true) {
			$.ajax({
				type: "post",
				url: base_url + "Home/validasiToko",
				dataType: "json",
				data: {
					id: id,
				},
				success: function (result) {
					$("tr#data_" + result)
						.find("td.status")
						.children()
						.remove();
					$("tr#data_" + result)
						.find("td.status")
						.append($('<span style="color: green;">').append("&#10003;"))
						.append($("<i>").append("Verified"));

					$("tr#data_" + result)
						.find("td.tombol")
						.children()
						.remove();

					$("tr#data_" + result)
						.find("td.tombol")
						.append(
							$('<button class="btn btn-default" disabled>').append(
								$('<i class="fa fa-check" aria-hidden="true">')
							)
						);
				},
			});
		}
	});

	// =====================================================================================================================================================
	// 															END MASTER BARANG
	// =====================================================================================================================================================

	// =====================================================================================================================================================
	// 															FORM DAFTAR DATADIRI
	// =====================================================================================================================================================

	$("#form-datadiri").on("change", "input:file", function () {
		var file_data = $(this).prop("files")[0],
			temp = $('input[name="file_temp"]').val(),
			form_data = new FormData();
		form_data.append("images", file_data);
		form_data.append("temp", temp);
		$.ajax({
			url: base_url + "Login/uploadImageTemp",
			dataType: "json",
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,
			type: "post",
			success: function (result) {
				$("img.avatar-pic").attr(
					"src",
					base_url + "uploads/temp/" + result.img
				);
				$('input[name="file_temp"]').val(result.img);
			},
		});
	});

	// =====================================================================================================================================================
	// 															END FORM DAFTAR DATADIRI
	// =====================================================================================================================================================

	// =====================================================================================================================================================
	// 															LIST BARANG TOKO
	// =====================================================================================================================================================
	$("#form-create-barang-toko").on("change", "input:file", function () {
		var file_data = $(this).prop("files")[0],
			temp = $('input[name="file_temp"]').val(),
			form_data = new FormData();
		form_data.append("images", file_data);
		form_data.append("temp", temp);
		console.log(file_data);
		console.log(form_data);
		$.ajax({
			url: base_url + "Login/uploadImageTemp",
			dataType: "json",
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,
			type: "post",
			success: function (result) {
				// alert();
				if(mobile == "mobile"){
					$("img.mobile-avatar-pic2").attr(
						"src",
						base_url + "uploads/temp/" + result.img
					);
					$('input[name="file_temp"]').val(result.img);
				}else{
					$("img.avatar-pic2").attr(
						"src",
						base_url + "uploads/temp/" + result.img
					);
					$('input[name="file_temp"]').val(result.img);
				}
			},
		});
	});

	$("#form-update-barang-toko").on("change", "input:file", function () {
		var file_data = $(this).prop("files")[0],
			temp = $('input[name="file_temp"]').val(),
			form_data = new FormData();
		form_data.append("images", file_data);
		form_data.append("temp", temp);
		$.ajax({
			url: base_url + "Login/uploadImageTemp",
			dataType: "json",
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,
			type: "post",
			success: function (result) {
				$("img.avatar-pic2").attr(
					"src",
					base_url + "uploads/temp/" + result.img
				);
				$('input[name="file_temp"]').val(result.img);
			},
		});
	});

	$("#example1").on("click", ".get-data-barang-toko", function () {
		var id = $(this).attr("data-id");

		$.ajax({
			type: "post",
			url: base_url + "Home/getDataToko",
			dataType: "json",
			data: {
				id: id,
			},
			success: function (result) {
				$("#form-update-barang-toko")
					.find("img.avatar-pic2")
					.attr("src", base_url + "uploads/img/" + result.image_name);
				$("#form-update-barang-toko")
					.find('select[name="barang"]')
					.val(result.fk_barang);
				$("#form-update-barang-toko")
					.find('input[name="file_asli"]')
					.val(result.image_name);

				$.each(result, function (key, value) {
					$("#form-update-barang-toko")
						.find("input[name=" + key + "]")
						.val(value);
				});
			},
		});
	});

	$("#example1").on("click", ".delete-data-barang-toko", function () {
		var id = $(this).attr("data-id"),
			conf = confirm("yakin menghapus data ???");

		if (conf == true) {
			$.ajax({
				type: "post",
				url: base_url + "Home/deleteDataToko",
				dataType: "json",
				data: {
					id: id,
				},
				success: function (result) {
					window.location.reload(true);
				},
			});
		}
	});
	// =====================================================================================================================================================
	// 															END LIST BARANG TOKO
	// =====================================================================================================================================================

	// document.getElementById("button-search").onclick = function() {
	// 	alert('tester');
	// };
	// function getLocation() {
	// var x = $('div.infor');
	// $("#pencarian-terdekat").on("click", ".button-search", function () {
	// 	alert();
	// if (navigator.geolocation) {
	// 	navigator.geolocation.getCurrentPosition(showPosition);
	// } else {
	// 	//   x.innerHTML = "Geolocation is not supported by this browser.";
	// 	$("div.infor").text("Geolocation is not supported by this browser.");
	// }
	// });
	// }

	function showPosition(position) {
		$.ajax({
			type: "post",
			url: base_url + "Home/perhitungan",
			dataType: "json",
			data: {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			},
			success: function (result) {
				$("table#table-terdekat").find("tbody tr").eq(0).remove();
				$("table#table-terdekat")
					.find("tbody")
					.append(
						$("<tr>")
							.append($("<td>").append(result.partikel))
							.append($("<td>").append(result.latitude_partikel))
							.append($("<td>").append(result.longitude_partikel))
							.append($("<td>").append(result.nama_toko))
							.append($("<td>").append(result.hasil))
					);
			},
		});
		// $("div.infor").text(position.coords.latitude);
		// x.innerHTML = "Latitude: " + position.coords.latitude +
		// "<br>Longitude: " + position.coords.longitude;
	}
});
