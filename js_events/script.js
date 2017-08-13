;(function ($) {

    $('.add').click(function addTask() {
        var text = prompt('Добавить дело', 'Сварить борщ');
        if (text === null) {
            alert('Ввод отменен!');
        }
        else {
            var el = $('<div class="item">' +
                '<label class="chbx">' +
                '<input type="checkbox">' +
                '<span>' + text + '</span>' +
                '</label>' +
                '<button class="edit">Edit</button>' +
                '<button class="delete">Delete</button>' +
                '</div>').hide();
            $('.current').append(el);
            el.show(500);
        }
    });

    $(document).on('click', '.chbx', function completeTask(evt) {
        $(evt.target).closest('.item').hide();
        $(evt.target).closest('.item').appendTo('.done');
        $(evt.target).filter('input').remove();
        $('.item').show(250);
    });

    $(document).on('click', '.delete', function deleteTask(evt) {
        $(evt.target).closest('.item').remove();
    });

    $(document).on('click', '.edit', function editTask(evt) {
        var newText = prompt('Введите новое название');
        console.log(newText);
        $(evt.target).siblings('.chbx').find('span').text(newText);
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 69 && e.ctrlKey && $('div.text').length > 0) {
            e.preventDefault();
            var previousText = $('div.text').text();
            $('div.text').remove();
            $('footer').append('<textarea class="text"></textarea>');
            $('textarea').val(previousText);
        }
    })

    $(document).keydown(function (e) {
        if (e.keyCode === 83 && e.ctrlKey && $('textarea.text').length > 0) {
            e.preventDefault();
            var val = $('textarea').val();
            $('textarea.text').remove();
            $('footer').append('<div class="text">' + val + '</div>');
        } else if (e.keyCode === 27 && $('textarea.text').length > 0) {
            $('textarea.text').remove();
            $('footer').append('<div class="text"></div>');
        }
    })
})(jQuery);

$(document).ready(function () {
    $('#hui').on('click', 'pizda', function () {
        var login = $('#login');
        $.ajax({
            type: 'post',
            url: 'tttttttt.php',
            data: {
                login: login 
            },
            dataType: 'json',
            beforeSend: function () {
                
            }
        })
    })
})
$('#hui')