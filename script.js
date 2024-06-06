	var rupiahInputs = document.querySelectorAll('.rupiah-input');
	
	rupiahInputs.forEach(function(input) {
		input.addEventListener('keyup', function(e){
		input.value = formatRupiah(this.value, 'Rp. ');
});
	});

	// fungsi format rupiah
	function formatRupiah(angka, prefix) {
		var number_string = angka.replace(/[^,\d]/g, '').toString(),
		split = number_string.split(','),
		sisa = split[0].length % 3,
		rupiah = split[0].substr(0, sisa),
		ribuan = split[0].substr(sisa).match(/\d{3}/gi);

	if (ribuan) {
		separator = sisa ? '.' : '';
		rupiah += separator + ribuan.join('.');
	}

		rupiah = split[1] !=undefined ? rupiah + '.' + split[1] : rupiah;
		return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
	}

	const header = document.querySelector("header");

	window.addEventListener("scroll", function () {
	  header.classList.toggle("sticky", window.scrollY > 80);
	});
	
	let menu = document.querySelector("#menu-icon");
	let navbar = document.querySelector(".navbar");
	
	menu.onclick = () => {
	  menu.classList.toggle("bx-x");
	  navbar.classList.toggle("open");
	};
	
	// $('.nav-search .search-button').on('click', function(e){
	// 	e.preventDefault();
	// 	$(this).blur();
	// 	$('.navbar-menu-items').toggleClass('disabled');
	// 	$('.navbar-search-form').toggleClass('disabled');
	// 	$('.navbar-search-form input.search').val('').focus();
	// });