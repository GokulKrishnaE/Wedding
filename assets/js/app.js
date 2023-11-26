$(document).ready(function(){
    
// include html
  let includes = $('[data-include]')
  jQuery.each(includes, function(){
    let html = '/' + $(this).data('include') + '.html'
    $(this).load(html)
  })

  $(document).ready(function(){
    $('.messages-slider').slick({
      dots: true,
      prevArrow: false,
      nextArrow: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 567,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        }
      ],
    });
  });
    
  $('.img-grid .item').each(function(){
    $(this).click(function(){
      var imgPath = $(this).find('img').attr('src')
      console.log(imgPath)
      $('#gallery-view-modal').find('img').attr('src',imgPath)
      $('#gallery-view-modal').modal('show')
      $('#gallery-view-modal').on('hidden.bs.modal', function (event) {
        $('#gallery-view-modal').find('img').attr('src','')
      })
    })
  })

})