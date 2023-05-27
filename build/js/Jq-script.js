"use strict";

$(document).ready(function () {

    // Активация Бургера

    $(".header__burger").on('click', function () {
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


    $(".thanks-reg-open").click(function () {
        $(".thanks-reg").addClass("active");

    });


    $(".thanks-reg__close").click(function () {
        $(".thanks-reg").removeClass("active");

    });

    // форма как получить одобрение 

    $(".art-modal-open").click(function () {
        $(".art-modal").addClass("active");

    });


    $(".art-modal__close").click(function () {
        $(".art-modal").removeClass("active");

    });

    // редактировние профиль магазина


    $(".profile-market__btn").click(function () {
        $(".profile-market-modal").addClass("active");

    });


    $(".profile-market-modal__close").click(function () {
        $(".profile-market-modal").removeClass("active");

    });

    ////////////////////////////////////////////////


    $(".profile-market-modal__save").click(function () {
        $(".profile-market-modal").removeClass("active");
        $(".profile-market-thanks").addClass("active");
    });


    $(".profile-market-thanks__close").click(function () {
        $(".profile-market-thanks").removeClass("active");

    });





    // редактировние профиля пользователя


    $(".profile-salesman__btn").click(function () {
        $(".profile-user-modal").addClass("active");

    });


    $(".profile-user-modal__close").click(function () {
        $(".profile-user-modal").removeClass("active");

    });

    // /////////////////////////////////////////////////


    $(".profile-user-modal__save").click(function () {
        $(".profile-user-modal").removeClass("active");
        $(".profile-user-thanks").addClass("active");
    });


    $(".profile-user-thanks__close").click(function () {
        $(".profile-user-thanks").removeClass("active");

    });

    // описание магазина 


    $(".profile-description__btn").click(function () {
        $(".profile-description-modal").addClass("active");

    });


    $(".profile-description-modal__close").click(function () {
        $(".profile-description-modal").removeClass("active");

    });



    //  удалить магазин 
    $(".profile__del > button").click(function () {
        $(".del-modal").addClass("active");

    });


    $(".del-modal__close").click(function () {
        $(".del-modal").removeClass("active");

    });


    // 


    $(".profile-header").each(function () {

        let more = $(this).find(".profile-header__btn");
        let hide = $(this).find(".profile-header__lists");
        hide.hide(300);
        more.click(function () {
            hide.slideToggle(300);
            more.toggleClass('active');
        });

    });






    //  табы в лк магазин


    $('.m-sidebar__item').click(function () {
        var id = $(this).attr('data-tab'),
            content = $('.lk-m__content[data-tab="' + id + '"]');

        $('.m-sidebar__item.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2

        $('.lk-m__content.active').removeClass('active'); // 3
        content.addClass('active'); // 4
    });


    // переходы по нажатию кнопки 


    $(".lk-m__start-two").click(function () {
        $(".lk-m__start-content--two").addClass("active");
        $(".lk-m__start-content--one").removeClass("active");
    });

    $(".lk-m__start-three").click(function () {
        $(".lk-m__start-content--three").addClass("active");
        $(".lk-m__start-content--two").removeClass("active");
    });

    $(".lk-m__start-four").click(function () {
        $(".lk-m__start-content--four").addClass("active");
        $(".lk-m__start-content--three").removeClass("active");
    });

    // $(".art-modal__close").click( function() {
    //     $(".art-modal").removeClass("active");

    // });

    //  закачка файла


    var dt = new DataTransfer();

    $('.input-file input[type=file]').on('change', function () {
        let $files_list = $(this).closest('.input-file').next();
        $files_list.empty();

        for (var i = 0; i < this.files.length; i++) {
            let new_file_input = '<div class="input-file-list-item">' +
                '<span class="input-file-list-name">' + this.files.item(i).name + '</span>' +
                '<a href="#" onclick="removeFilesItem(this); return false;" class="input-file-list-remove">x</a>' +
                '</div>';
            $files_list.append(new_file_input);
            dt.items.add(this.files.item(i));
        };
        this.files = dt.files;
    });

    function removeFilesItem(target) {
        let name = $(target).prev().text();
        let input = $(target).closest('.input-file-row').find('input[type=file]');
        $(target).closest('.input-file-list-item').remove();
        for (let i = 0; i < dt.items.length; i++) {
            if (name === dt.items[i].getAsFile().name) {
                dt.items.remove(i);
            }
        }
        input[0].files = dt.files;
    }


});





const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 0;
let degrees = 0;
let img = new Image();
let fileName = '';
let rotate = false;
let wrh = 0;
let newWidth = 0;
let newHeight = 0;
let cropper = '';
let caman;
let url;
let i = 0;
let j = 0;


const uploadFile = document.getElementById('cover-modal__upload-file');



uploadFile.addEventListener('change', (e) => {

    const file = document.getElementById('cover-modal__upload-file').files[0];
    console.log(file)
    const reader = new FileReader();

    if (file) {
        fileName = file.name;
        reader.readAsDataURL(file);
    }

    reader.addEventListener('load', () => {
        url = URL.createObjectURL(file);
        console.log(url)
        caman = Caman(canvas, url, function () {

            //alert('file url: ' + url);

            URL.revokeObjectURL(url);
            cropper = new Cropper(canvas, {

                  zoomable: false,
                  viewMode: 0,
                  background: false,
                  rotatable: true,

                  

                
            });


            document.getElementsByClassName('cover-modal__center')[0].style.display = "block";
            document.getElementsByClassName('cover-modal__center-one')[0].style.display = "none";
        });
        var uploadedImageURL = URL.createObjectURL(file);

    });
});


























