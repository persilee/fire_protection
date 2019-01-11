(function () { 
    $('.menu .nav li').on('click', function () {
        $(this).siblings().find('a').removeClass('active')
        $(this).find('a').addClass('active')
    })
 })()