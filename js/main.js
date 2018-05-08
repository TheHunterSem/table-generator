jQuery(document).ready(function ($) {

    //Responsive table start

    var table = $('.table');

    // Table bordered
    $('#table-bordered').change(function () {
        var value = $(this).val();
        table.removeClass('table-bordered').addClass(value);
    });

    // Table striped
    $('#table-striped').change(function () {
        var value = $(this).val();
        table.removeClass('table-striped').addClass(value);
    });

    // Table hover
    $('#table-hover').change(function () {
        var value = $(this).val();
        table.removeClass('table-hover').addClass(value);
    });

    // Table color
    $('#table-color').change(function () {
        var value = $(this).val();
        table.removeClass(/^table-mc-/).addClass(value);
    });

    (function (removeClass) {

        jQuery.fn.removeClass = function (value) {
            if (value && typeof value.test === "function") {
                for (var i = 0, l = this.length; i < l; i++) {
                    var elem = this[i];
                    if (elem.nodeType === 1 && elem.className) {
                        var classNames = elem.className.split(/\s+/);

                        for (var n = classNames.length; n--;) {
                            if (value.test(classNames[n])) {
                                classNames.splice(n, 1);
                            }
                        }
                        elem.className = jQuery.trim(classNames.join(" "));
                    }
                }
            } else {
                removeClass.call(this, value);
            }
            return this;
        }

    })(jQuery.fn.removeClass);

    //Responsive table end


    var addBtnCell = $('#add_cell');
    var removeBtnCell = $('#remove_cell');
    var addBtnRow = $('#add_row');
    var removeBtnRow = $('#remove_row');

    var theadercell = $('#table thead tr');

    $(removeBtnCell).on('click', function () {
        $(theadercell).find('th:last').remove();
        $('#table tbody tr').find('td:last').remove();
    });

    $(addBtnCell).on('click', function () {
        $(theadercell).append('<th></th>');
        $('#table tbody tr').each(function () {
            $(this).append('<td></td>');
        });
    });

    $(addBtnRow).on('click', function () {
        $('#table tbody tr:last').clone().appendTo('#table tbody');
    });

    $(removeBtnRow).on('click', function () {
        $('#table tbody').find('tr:last').remove();
    });

    $('#table thead tr').on('click', 'th', function () {

        var thheaderIndex = $(this).index();
        console.log(thheaderIndex);

        var text = prompt("Input the text:", '');
        $(this).text(text);


        $('#table tbody tr td').each(function () {

            if ($(this).index() === thheaderIndex) {
                $(this).attr('data-title', text);
            }

        });

    });


   $('#table tbody').on('click','td',function () {
       var text = prompt("Input the text:", '');
       $(this).text(text);
   });


});