"use strict";

$(document).ready(function () {

    // Активация Бургера

    $(".header__burger").on('click', function() {
        $(".header__burger").toggleClass("open");
        // $("main").toggleClass("main-none")
    });


    // Кастомный селект 

    $('.select').on('click', '.select-head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select-head').removeClass('open');
            $('.select-list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });
    
    $('.select').on('click', '.select-item', function () {
        $('.select-head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });
    
    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select-head').removeClass('open');
            $('.select-list').fadeOut();
        }
    });


    // форма спасибо за регу


    $(".thanks-reg-open").click( function() {
        $(".thanks-reg").addClass("active");
        
    });


    $(".thanks-reg__close").click( function() {
        $(".thanks-reg").removeClass("active");
        
    });

    // форма как получить одобрение 

    $(".art-modal-open").click( function() {
        $(".art-modal").addClass("active");
        
    });


    $(".art-modal__close").click( function() {
        $(".art-modal").removeClass("active");
        
    });


    //  табы в лк магазин


    $('.m-sidebar__item').click(function() {
        var id = $(this).attr('data-tab'),
            content = $('.lk-m__content[data-tab="'+ id +'"]');
        
        $('.m-sidebar__item.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2
        
        $('.lk-m__content.active').removeClass('active'); // 3
        content.addClass('active'); // 4
    });


    // переходы по нажатию кнопки 


    $(".lk-m__start-two").click( function() {
        $(".lk-m__start-content--two").addClass("active");
        $(".lk-m__start-content--one").removeClass("active");
    });

    $(".lk-m__start-three").click( function() {
        $(".lk-m__start-content--three").addClass("active");
        $(".lk-m__start-content--two").removeClass("active");
    });

    $(".lk-m__start-four").click( function() {
        $(".lk-m__start-content--four").addClass("active");
        $(".lk-m__start-content--three").removeClass("active");
    });

    // $(".art-modal__close").click( function() {
    //     $(".art-modal").removeClass("active");
        
    // });

    //  закачка файла


    var dt = new DataTransfer();
 
$('.input-file input[type=file]').on('change', function(){
	let $files_list = $(this).closest('.input-file').next();
	$files_list.empty();
 
	for(var i = 0; i < this.files.length; i++){
		let new_file_input = '<div class="input-file-list-item">' +
			'<span class="input-file-list-name">' + this.files.item(i).name + '</span>' +
			'<a href="#" onclick="removeFilesItem(this); return false;" class="input-file-list-remove">x</a>' +
			'</div>';
		$files_list.append(new_file_input);
		dt.items.add(this.files.item(i));
	};
	this.files = dt.files;
});
 
function removeFilesItem(target){
	let name = $(target).prev().text();
	let input = $(target).closest('.input-file-row').find('input[type=file]');	
	$(target).closest('.input-file-list-item').remove();	
	for(let i = 0; i < dt.items.length; i++){
		if(name === dt.items[i].getAsFile().name){
			dt.items.remove(i);
		}
	}
	input[0].files = dt.files;  
}

   
});





