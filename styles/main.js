$(document).ready(function(){	
  $("#destinations .col-sm-12").addClass("over");
$(".search").hover(function()
{
		$(this).addClass("special");
		$(this).addClass("active");
		//$(this).css('background','#3d1475');
},
function(){
    if($("#inpt_search").val().length==0)
    {
    	$(".search").removeClass("active");
    	$(this).removeClass("special");
    
    }
});

  $("#inpt_search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#container").children().removeClass("active").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(document).ready(function(){
    $(".search_tab").click(function(){
      $(".search_tab").removeClass("active");
      $(this).addClass("active");
      var index = $('.search_tab').index(this);
        var text=$('.search_panel');
         text.removeClass('active');
        $(text[index]).addClass('active');
    })
    $('.navbar-toggler').click(function(){
        $(this).toggleClass('change');
      })
  });
//////////////////////////////////////////////////////////////////
    $(window).scroll(function(){
      var x=$(window).scrollTop();
      if(x==0)$("nav").css({
        "height":"140px",
        "background": "linear-gradient(rgba(49, 18, 75,0.6),rgba(49, 18, 75,0.6))"
  
      });
      else $("nav").css({
        "height":"100px",
        "background": "linear-gradient(rgba(49, 18, 75,0.9),rgba(49, 18, 75,0.9))"
  
      });
    })
  $(window).resize(function(){
    location.reload();
  })

  ///////////////////////////////////////////////////////////////////////////////////////////////
  
  $(document).ready(function(){
    $('.dest-but>button:nth-child(3)>a').attr('href',"mailto:tourindia@gmail.com?Subject=Inquire detail about Package&body=I want to inquire about the details of package:____");
  
  });
$(document).ready(function(){
    $(".dest-but>button:first-child").click(function(){
        $(this).html('<span class="spinner-grow spinner-grow-sm"></span>Fetching..');
        $(this).animate({boxShadow:'0px 50px 30px 3px'},4000,function(){
          $(this).html("&#8377;"+$(this).attr('id'));
        });
      })
    
})