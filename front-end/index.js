fillContent("video", "article");
var skips = 0;


function fillContent(type1, type2) {
  $("#main").empty();
  get30(type1, type2);
}

function get30(type1, type2, text) {
  var contentIds = "";
  $.ajax({
      url : "https://ign-apis.herokuapp.com/content?startIndex="+(skips*30)+"\u0026count=30",
      type : 'GET',
      dataType: 'jsonp',
      async: false,
      success : function(data) {
          data = data.data;

          for(var i = 0; i < data.length; i++) {
            if(data[i].contentType == type1 || (type2 != null && data[i].contentType == type2)) {
              contentIds += data[i].contentId + ",";

              if(data[i].contentType == "video") {
                var title = data[i].metadata.title;
              }
              else {
                var title = data[i].metadata.headline;
              }

              var d = data[i].metadata.publishDate;

              var s = d.split("T");
              var time = s[1].split("+")[0].split(":");
              var day = s[0].split("-");

              var time = timeSince([day[0], day[1] - 1, day[2], time[0], time[1], time[2]]) + " - " ;

              $("#main").append("<div class = 'cont' id = '"+data[i].metadata.slug+"'><img src = '" + data[i].thumbnails[0].url + "'><h3 class = 'img-caption'><p class = 'info' id = '"+data[i].contentId+"'>"+time+"</p><br>"+title+"</h3></div><hr>");
            }
          }
      },
      error : function(request,error)
      {
          alert("Request: "+JSON.stringify(request));
      }
  }).done(function() {
    getComments(contentIds.substring(0,contentIds.length - 1), 0);
    skips++;
  });
}

function getComments(ids) {
    $.ajax({
        url : "https://ign-apis.herokuapp.com/comments?ids="+ids,
        type : 'GET',
        dataType: 'jsonp',
        success : function(data) {
            data = data.content;
            for(var i = 0; i < data.length; i++) {
              $("#"+data[i].id).append(data[i].count);
            }
        },
        error : function(request,error)
        {
            alert("RequestUMM: "+JSON.stringify(request));
        }
    })
}

function timeSince(arr) {
  var s =  moment(arr).fromNow(true);

  if(s.split(" ")[0] == "a") {
    s = "1" + s.substring(1);
  }

  s = s.replace(/\s/g, '');
  s = s.replace("days", "d")
  s = s.replace("day", "d")
  s = s.replace("minutes", "m")
  s = s.replace("minute", "m")
  s = s.replace("seconds", "s")
  s = s.replace("second", "s")
  s = s.replace("months", "m")
  s = s.replace("month", "m")


  return s;
}



$(".opt").click(function () {
  $(".opt").each(function(i,val) {
    if($(val).hasClass("selected")) {
      $(val).removeClass("selected");
    }
  });

  skips = 0;

  var text = $(this).children()[0].innerText;
  if(text == "Latest") {
    fillContent("video", "article");
  }
  else if(text == "Articles") {
    fillContent("article");
  }
  else if(text == "Videos") {
    fillContent("video");
  }

  $(this).addClass("selected");
});


$(window).on("scroll", function() {
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();

	if ((scrollHeight - scrollPosition) < 10) {

    var text = $($(".selected")[0]).children()[0].innerText;
    if(text == "Latest") {
      get30("video", "article");
    }
    else if(text == "Articles") {
      get30("article");
    }
    else if(text == "Videos") {
      get30("video");
    }
	}
});
