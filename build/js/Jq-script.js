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


    // редактировние профиля пользователя 2


    $(".profile-salesman__btn-two").click(function () {
        $(".personal-information-modal").addClass("active");

    });


    $(".personal-information-modal__close").click(function () {
        $(".personal-information-modal").removeClass("active");

    });

    // /////////////////////////////////////////////////



    // убрать модалку спасибо после изменения данных профиля пользователя


    $(".personal-information-thanks__close").click(function () {
        $(".personal-information-thanks").removeClass("active");

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


    // изменить описание магазина два

    $(".profile-info-p__btn").click(function () {
        $(".profile-description-modal-two").addClass("active");

    });


    $(".profile-description-modal-two__close").click(function () {
        $(".profile-description-modal-two").removeClass("active");

    });





    //  удалить магазин 
    $(".button--m").click(function () {
        $(".del-modal").addClass("active");

    });


    $(".del-modal__close").click(function () {
        $(".del-modal").removeClass("active");

    });


    // 


    $(".button--user").click(function () {
        $(".del-modal-user").addClass("active");

    });


    $(".del-modal-user__close").click(function () {
        $(".del-modal-user").removeClass("active");

    });

    // смена шапки

    $(".profile-header__item--replace").click(function () {
        $(".cover-modal").addClass("active");

    });


    $(".cover-modal__close").click(function () {
        $(".cover-modal").removeClass("active");

    });


    // cтрелка назад в модальном окне смены шапки 

    $(".cover-modal__block-prev").click(function () {
        $(".cover-modal__block-prev").css("display", "none");
        $(".cover-modal__center").css("display", "none");
        $(".cover-modal__center-one").css("display", "block");
    });


    // смена аватарки

    $(".profile-user__item--replace").click(function () {
        $(".avatar-modal").addClass("active");

    });


    $(".avatar-modal__close").click(function () {
        $(".avatar-modal").removeClass("active");

    });

    // cтрелка назад в модальном окне аватарки

    $(".avatar-modal__block-prev").click(function () {
        $(".avatar-modal__block-prev").css("display", "none");
        $(".avatar-modal__center").css("display", "none");
        $(".avatar-modal__center-one").css("display", "block");
    });


    $(".avatar-modal-error__prev").click(function () {
        $(".avatar-modal").addClass("active");
        $(".avatar-modal-error").removeClass("active");

    });


    $(".avatar-modal-error__close").click(function () {
        $(".avatar-modal-error").removeClass("active");

    });




    // выйти из моадлки спасибо за регистрацию
    $(".modal-thanks-r__close").click(function () {
        $(".modal-thanks-r").removeClass("active");

    });











    // Ошибка изображения шапки 


    // $(".profile__del > button").click(function () {
    //     $(".del-modal").addClass("active");

    // });

    $(".cover-modal-error__prev").click(function () {
        $(".cover-modal").addClass("active");
        $(".cover-modal-error").removeClass("active");

    });


    $(".cover-modal-error__close").click(function () {
        $(".cover-modal-error").removeClass("active");

    });


    // Успешно изменена картинка в пашпке


    $(".cover-modal-thanks__close").click(function () {
        $(".cover-modal-thanks").removeClass("active");

    });

    // удалить шапку 

    $(".profile-header__item--del").click(function () {
        $(".cover-modal-del").addClass("active");


    });

    $(".cover-modal-del__close").click(function () {
        $(".cover-modal-del").removeClass("active");


    });

    $(".cover-modal-del__btn").click(function () {
        $(".cover-modal-del").removeClass("active");


    });



    $(".profile-header").each(function () {

        let more = $(this).find(".profile-header__btn");
        let hide = $(this).find(".profile-header__lists");
        hide.hide(300);
        more.click(function () {
            hide.slideToggle(300);
            more.toggleClass('active');
        });

    });

    $(".profile-user").each(function () {

        let more = $(this).find(".profile-user__avatar-btn");
        let hide = $(this).find(".profile-user__lists");
        hide.hide(300);
        more.click(function () {
            hide.slideToggle(300);
            more.toggleClass('active');
        });

    });



    $(".lk-m__search-input").keyup(function () {
        if ($(this).val()) {
            $(".lk-m__search-show").show(300);
        }
        else {
            $(".lk-m__search-show").hide(300);
        }
    });
    //  $("button").click(function () {
    //     $(".lk-m__search-input").val('');
    //     $(this).hide(300).slideToggle(300);
    //  });





    //  табы лк профиля


    $('.profile__nav-lists-item').click(function () {
        var id = $(this).attr('data-tab'),
            content = $('.profile[data-tab="' + id + '"]');

        $('.profile__nav-lists-item.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2

        $('.profile.active').removeClass('active'); // 3
        content.addClass('active'); // 4
    });





    // $(".art-modal__close").click( function() {
    //     $(".art-modal").removeClass("active");

    // });

    //  закачка файла




});


var dt = new DataTransfer();

$('.input-file input[type=file]').on('change', function(){
	let $files_list = $(this).closest('.input-file').next();
	

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




const canvas = document.getElementById('canvas');

let fileName = '';
let cropper = '';
let caman;
let url;



const uploadFile = document.getElementById('cover-modal__upload-file');


if (uploadFile) {
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
            console.log(url);
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
                document.getElementsByClassName('cover-modal__block-prev')[0].style.display = "flex";
            });
            var uploadedImageURL = URL.createObjectURL(file);

        });
    });
}







const canvasAvatar = document.getElementById('canvas-avatar');

let fileNameAvatar = '';
let cropperAvatar = '';
let camanAvatar;
let urlAvatar;



const uploadFileAvatar = document.getElementById('avatar-modal__upload-file');
let imgPreview = document.querySelector('#preImg');
let imgPreviewTwo = document.querySelector('#preImgTwo');

if (uploadFileAvatar) {
    uploadFileAvatar.addEventListener('change', (e) => {

        const fileAvatar = document.getElementById('avatar-modal__upload-file').files[0];
        console.log(fileAvatar)
        const readerAvatar = new FileReader();

        if (fileAvatar) {
            fileNameAvatar = fileAvatar.name;
            readerAvatar.readAsDataURL(fileAvatar);
        }

        readerAvatar.addEventListener('load', () => {
            urlAvatar = URL.createObjectURL(fileAvatar);
            console.log(urlAvatar);
            let img = document.getElementById('canvas-avatar');
            img.id = 'image';
            img.src = event.target.result;
            img.width = 330;
            img.height = 330;
            camanAvatar = Caman(canvasAvatar, urlAvatar, function () {

                //alert('file url: ' + url);

                URL.revokeObjectURL(urlAvatar);
                cropperAvatar = new Cropper(canvasAvatar, {
                    viewMode: 1,
                    dragMode: 'move',
                    aspectRatio: 1,
                    autoCropArea: 0.68,
                    center: false,
                    zoomOnWheel: false,
                    zoomOnTouch: false,
                    cropBoxMovable: false,
                    cropBoxResizable: false,
                    guides: false,
                    minContainerWidth: 305,
                    minContainerHeight: 305,
                    minCropBoxWidth: 266,
                    minCropBoxHeight: 266,
                    ready: function () {
                        croppable = true;
                    },

                    ready: function (event) {
                        this.cropperAvatar = cropperAvatar;
                    },

                    crop: function (event) {

                        let imgSrc = this.cropperAvatar.getCroppedCanvas({


                        }).toDataURL("image/png");
                        imgPreview.src = imgSrc;
                        imgPreviewTwo.src = imgSrc;
                    }





                });




                document.getElementsByClassName('avatar-modal__center')[0].style.display = "block";
                document.getElementsByClassName('avatar-modal__center-one')[0].style.display = "none";
                document.getElementsByClassName('avatar-modal__block-prev')[0].style.display = "flex";
            });
            var uploadedImageURLAvatar = URL.createObjectURL(fileAvatar);

        });
    });
}



// глобальное модальное окно с успешной регистрацией итд


$(".global-thanks__close").click(function () {
    $(".global-thanks").removeClass("active");

});

// модальное окно жалоб




$(".complaint-modal-open").click(function () {
    $(".complaint-modal").addClass("active");

});

$(".complaint-modal__close").click(function () {
    $(".complaint-modal").removeClass("active");

});



//  модальное окно для с подписчиками 

$(".profile-user__follower").click(function () {
    $(".modal-follow").addClass("active");
    $(".modal-follow__item--follows").addClass("active");
    $(".modal-follow__inner--one").addClass("active");
});


$(".profile-user__follows").click(function () {
    $(".modal-follow").addClass("active");
    $(".modal-follow__item--follow").addClass("active");
    $(".modal-follow__inner--two").addClass("active");
});


$(".modal-follow__item--follows").click(function () {
    $(".modal-follow__item--follows").addClass("active");
    $(".modal-follow__item--follow").removeClass("active");
    $(".modal-follow__inner--one").addClass("active");
    $(".modal-follow__inner--two").removeClass("active");
});


$(".modal-follow__item--follow").click(function () {
    $(".modal-follow__item--follow").addClass("active");
    $(".modal-follow__item--follows").removeClass("active");
    $(".modal-follow__inner--two").addClass("active");
    $(".modal-follow__inner--one").removeClass("active");
});


$(".modal-follow__close").click(function () {
    $(".modal-follow__inner--one").removeClass("active");
    $(".modal-follow__inner--two").removeClass("active");
    $(".modal-follow").removeClass("active");
    $(".modal-follow__item--follow").removeClass("active");
    $(".modal-follow__item--follows").removeClass("active");
});




$(document).on('change', '.profile-password__checkbox > input[type=checkbox]', function () {
    var $this = $(this), $chks = $(document.getElementsByName(this.name)), $all = $chks.filter(".chk-all");

    if ($this.hasClass('chk-all')) {
        $chks.prop('checked', $this.prop('checked'));
    } else switch ($chks.filter(":checked").length) {
        case +$all.prop('checked'):
            $all.prop('checked', false).prop('indeterminate', false);
            break;
        case $chks.length - !!$this.prop('checked'):
            $all.prop('checked', true).prop('indeterminate', false);
            break;
        default:
            $all.prop('indeterminate', true);
    }
});








//  табы лк продажи


$('.lk-sales__item').click(function () {
    var id = $(this).attr('data-tab'),
        content = $('.lk-sales__chart-wrap[data-tab="' + id + '"]');

    $('.lk-sales__item.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.lk-sales__chart-wrap.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});




$('.lk-sales__select').each(function () {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="lk-sales__select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function () {
        if (!$(this).hasClass('on')) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function () {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text($(this).find('span').text());

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});

$('.select-global').each(function () {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select-global"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function () {
        if (!$(this).hasClass('on')) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function () {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text($(this).find('span').text());

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});





$(".product-lk__content-faq").each(function () {

    let more = $(this).find(".product-lk__content-faq-btn");
    let hide = $(this).find(".product-lk__content-faq-inner");
    hide.hide(300);
    more.click(function () {
        hide.slideToggle(300);
        more.toggleClass('active');
    });

});


jQuery(document).ready(function ($) {
 
    var maxFileSize = 2 * 1024 * 1024; // (байт) Максимальный размер файла (2мб)
    var queue = {};
    var form = $('form#uploadImages');
    var imagesList = $('#uploadImagesList');

    var itemPreviewTemplate = imagesList.find('.item.template').clone();
    itemPreviewTemplate.removeClass('template');
    imagesList.find('.item.template').remove();


    $('#addImages').on('change', function () {
        var files = this.files;

        for (var i = 0; i < files.length; i++) {
            var file = files[i];

            if ( !file.type.match(/image\/(jpeg|jpg|png|gif)/) ) {
                alert( 'Фотография должна быть в формате jpg, png или gif' );
                continue;
            }

            if ( file.size > maxFileSize ) {
                alert( 'Размер фотографии не должен превышать 2 Мб' );
                continue;
            }

            preview(files[i]);
        }

        this.value = '';
    });

    // Создание превью
    function preview(file) {
        var reader = new FileReader();
        reader.addEventListener('load', function(event) {
            var img = document.createElement('img');

            var itemPreview = itemPreviewTemplate.clone();

            itemPreview.find('.img-wrap img').attr('src', event.target.result);
            itemPreview.data('id', file.name);

            imagesList.append(itemPreview);

            queue[file.name] = file;

        });
        reader.readAsDataURL(file);
    }

    // Удаление фотографий
    imagesList.on('click', '.delete-link', function () {
        var item = $(this).closest('.item'),
            id = item.data('id');

        delete queue[id];

        item.remove();
    });


    // Отправка формы
    form.on('submit', function(event) {

        var formData = new FormData(this);

        for (var id in queue) {
            formData.append('images[]', queue[id]);
        }

        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: formData,
            async: true,
            success: function (res) {
                alert(res)
            },
            cache: false,
            contentType: false,
            processData: false
        });

        return false;
    });

});





 
    // $('.checkbox').click( function () {
    //     if (".checkbox > input[type='checkbox'] ").prop("checked") {
    //         $(".checkbox > input[type='checkbox']").removeAttr("checked");
    //       } else {
    //         $(".checkbox > input[type='checkbox']").attr("checked");
    //       }
    // });
     
       
       
       
     
    



