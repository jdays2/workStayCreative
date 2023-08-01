'use strict';

const rem = function (rem) {
	if ($(window).width() > 768) {
		return 0.005208335 * $(window).width() * rem;
	} else {
		return (100 / 390) * (0.1 * $(window).width()) * rem;
	}
};

const mainSwiper = new Swiper('.main__swiper', {
	effect: 'coverflow',
	grabCursor: true,
	slidesPerView: 1,
	coverflowEffect: {
		rotate: -2,
		stretch: '-80%',
		depth: 300,
		modifier: -1,
		slideShadows: false,
	},
	breakpoints: {
		769: {
			coverflowEffect: {
				stretch: '-80%',
			},
		},
		320: {
			coverflowEffect: {
				stretch: '-82.3%',
			},
		},
	},
});

const cleansingSlider = new Swiper('.popular-users__swiper', {
	speed: 500,

	wrapperClass: 'popular-users__swiper-wrapper',
	slideClass: 'popular-users__slide',
	breakpoints: {
		769: {
			slidesPerView: 4,
			spaceBetween: rem(2),
		},
		320: {
			slidesPerView: 2,
		},
	},

	pagination: {
		clickable: true,
		renderBullet: function (index, className) {
			return `
        <span class="${className}">
         
        </span>
      `;
		},
		el: '.popular-users__bullets',
	},
});


const popularGraphSwiper = new Swiper('.popular-graph__swiper', {
	slidesPerView: 1,
	speed: 500,
	spaceBetween: rem(2),
	wrapperClass: 'popular-graph__swiper-wrapper',
	slideClass: 'popular-graph__slide',
	breakpoints: {
		769: {
			slidesPerView: 3,
		},
	},

	pagination: {
		clickable: true,
		renderBullet: function (index, className) {
			return `
        <span class="${className}">
         
        </span>
      `;
		},
		el: '.popular-graph__bullets',
	},
});

const adviceSwiper = new Swiper('.advice__swiper', {
	spaceBetween: rem(2),
	slidesPerView: 1,
	wrapperClass: 'advice__swiper-wrapper',
	slideClass: 'advice__slide',
	speed: 500,
	navigation: {
		prevEl: '.advice__prev',
		nextEl: '.advice__next',
	},

	pagination: {
		el: '.advice__fraction',
		type: 'fraction',
		formatFractionCurrent: addZero,
		formatFractionTotal: addZero,
	},

	breakpoints: {
		769: {
			slidesPerView: 4,
		},
	},
});

const controlAdviceSwiper = new Swiper('.control-panel__advice-swiper', {
	spaceBetween: rem(2),
	slidesPerView: 1,
	wrapperClass: 'control-panel__advice-swiper-wrapper',
	slideClass: 'control-panel__advice-slide',
	speed: 500,
	breakpoints: {
		748: {
			slidesPerView: 3,
			spaceBetween: rem(0),
		},
	},
});

// const lkSwiper = new Swiper('.lk-m__start-swiper', {

//   slidesPerView: 1,
//   effect: 'fade',
//   fadeEffect: {
//     crossFade: true
//   },
//   wrapperClass: 'lk-m__start-swiper-wrapper',
//   slideClass: 'lk-m__start-slide',
//   speed: 500,
//   navigation: {
//     prevEl: '.lk-m__start-prev',
//     nextEl: '.lk-m__start-next',
//   },

// });

const adviceSalesSwiper = new Swiper('.lk-sales__advice-swiper', {
	spaceBetween: rem(6),
	slidesPerView: 1,
	wrapperClass: 'lk-sales__advice-swiper-wrapper',
	slideClass: 'lk-sales__advice-slide',
	speed: 500,
	breakpoints: {
		748: {
			slidesPerView: 3,
		},
	},

	pagination: {
		clickable: true,
		renderBullet: function (index, className) {
			return `
        <span class="${className}">
         
        </span>
      `;
		},
		el: '.lk-sales__advice-bullets',
	},
});

const popularPhotoSlider = new Swiper('.popular-photo__swiper', {
	slidesPerView: 3,
	speed: 500,
	spaceBetween: rem(2),
	wrapperClass: 'popular-photo__swiper-wrapper',
	slideClass: 'popular-photo__slide',
	breakpoints: {
		769: {
			slidesPerView: 3,
		},
		320: {
			slidesPerView: 1,
		},
	},

	pagination: {
		clickable: true,
		renderBullet: function (index, className) {
			return `
        <span class="${className}">
         
        </span>
      `;
		},
		el: '.popular-photo__bullets',
	},
});

const popularVectorSlider = new Swiper('.popular-vector__swiper', {
	slidesPerView: 3,
	speed: 500,
	spaceBetween: rem(2),
	wrapperClass: 'popular-vector__swiper-wrapper',
	slideClass: 'popular-vector__slide',
	breakpoints: {
		769: {
			slidesPerView: 3,
		},
		320: {
			slidesPerView: 1,
		},
	},

	pagination: {
		clickable: true,
		renderBullet: function (index, className) {
			return `
        <span class="${className}">
         
        </span>
      `;
		},
		el: '.popular-vector__bullets',
	},
});

const popularMocapsSlider = new Swiper('.popular-mocaps__swiper', {
	slidesPerView: 3,
	speed: 500,
	spaceBetween: rem(2),
	wrapperClass: 'popular-mocaps__swiper-wrapper',
	slideClass: 'popular-mocaps__slide',
	breakpoints: {
		769: {
			slidesPerView: 3,
		},
		320: {
			slidesPerView: 1,
		},
	},

	pagination: {
		clickable: true,
		renderBullet: function (index, className) {
			return `
        <span class="${className}">
         
        </span>
      `;
		},
		el: '.popular-mocaps__bullets',
	},
});

const popularFontSwiper = new Swiper('.popular-fonts__swiper', {
	slidesPerView: 1,
	speed: 500,
	spaceBetween: rem(2),
	wrapperClass: 'popular-fonts__swiper-wrapper',
	slideClass: 'popular-fonts__slide',
	breakpoints: {
		769: {
			slidesPerView: 3,
		},
	},

	pagination: {
		clickable: true,
		renderBullet: function (index, className) {
			return `
        <span class="${className}">
         
        </span>
      `;
		},
		el: '.popular-fonts__bullets',
	},
});

const tagInput = document.querySelector(".tag-input");
const tagArea = document.querySelector(".tag-area");
const ul = document.querySelector(".tag-area ul");
const label = document.querySelector(".label");

let tags = [];

if(tagArea) {
	function addEvent(element) {
		tagArea.addEventListener("click", () => {
		element.focus();
		});
	
		element.addEventListener("focus", () => {
		tagArea.classList.add("active");
		label.classList.add("label-active");
		});
	
		element.addEventListener("blur", (e) => {
		tagArea.classList.remove("active");
		if (element.value === "" && tags.length === 0) {
		label.classList.remove("label-active");
		}
		if (!element.value.match(/^\s+$/gi) && element.value !== "") {
		tags.push(e.target.value.trim());
		element.value = "";
		renderTags();
		}
		});
	
		element.addEventListener("keydown", (e) => {
		console.log(e);
		const value = e.target.value;
		if (
		(e.keyCode === 32 ||
		e.keyCode === 13 ||
		value[value.length - 1] === " ") &&
		!value.match(/^\s+$/gi) &&
		value !== ""
		) {
		tags.push(e.target.value.trim());
		element.value = "";
		renderTags();
		}
		if (e.keyCode === 8 && value === "") {
		tags.pop();
		renderTags();
		}
		});
	}
	addEvent(tagInput);
}


function renderTags() {
  ul.innerHTML = "";
  tags.forEach((tag, index) => {
  createTag(tag, index);
  });
  const input = document.createElement("input");
  input.type = "text";
  input.className = "tag-input";
  addEvent(input);
  ul.appendChild(input);
  input.focus();
  setTimeout(() => (input.value = ""), 0);
}

function createTag(tag, index) {
  const li = document.createElement("li");
  li.className = "tag";
  const text = document.createTextNode(tag);
  const span = document.createElement("span");
  span.className = "cross";
  span.dataset.index = index;
  span.addEventListener("click", (e) => {
  tags = tags.filter((_, index) => index != e.target.dataset.index);
  renderTags();
  });
  li.appendChild(text);
  li.appendChild(span);
  ul.appendChild(li);
}



function addZero(num) {
	return num > 9 ? num : '0' + num;
}



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