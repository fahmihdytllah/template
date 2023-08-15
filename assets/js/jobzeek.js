$('.search_btn').click(function(){
  $('body').addClass('search_active');
});
$('.backdrop').click(function(){
  $('body').removeClass('search_active');
});

$("#jobzeek_loadmore").each(function () {
  var _0x5cf9bb = $(this).data("load");
  if (_0x5cf9bb) {
    $("#jobzeek_loadmore").show();
  }
  $('#jobzeek_loadmore').on("click", function (_0xed9364) {
    $("#jobzeek_loadmore").hide();
    $.ajax({
      'url': _0x5cf9bb,
      'success': function (_0x4c0574) {
        var _0x5a50e4 = $(_0x4c0574).find(".blog_posts");
        _0x5a50e4.find(".post_outer").addClass("next_post");
        $(".blog_posts").append(_0x5a50e4.html());
        if (_0x5cf9bb = $(_0x4c0574).find('#jobzeek_loadmore').data("load")) {
          $("#jobzeek_loadmore").show();
        } else {
          $('#jobzeek_loadmore').hide();
          $(".blog_pager .no_results").addClass("show");
        }
        Defer.dom("img.lazyload", 0x64, "loaded", null, {
          'rootMargin': '1px'
        });
        shareMenu();
        timeAgo();
        removeElement();
      },
      'beforeSend': function () {
        $(".blog_pager .loading").css("display", "flex");
      },
      'complete': function () {
        $(".blog_pager .loading").hide();
      }
    });
    _0xed9364.preventDefault();
  });
});
function responsive(_0x282bbb) {
  if (_0x282bbb.matches) {
    $(".jobzeek_navigation ul li.has_sub > a").click(function () {
      $(this).toggleClass("active");
      $(this).siblings(".jobzeek_navigation li ul").toggleClass("show");
    });
  } else {
    $('.jobzeek_navigation ul li.has_sub').hover(function () {
      $(this).toggleClass("active");
    });
  }
}
;
var maxWidth = window.matchMedia("(max-width: 1024px)");
responsive(maxWidth);
maxWidth.addListener(responsive);
$(".menu_button").click(function () {
  $("body").toggleClass('nav_active');
});
$(".close_menu_button, .backdrop").click(function () {
  $("body").removeClass("nav_active");
});
$(".notification_button").click(function () {
  $("body").toggleClass('ntfcn_active');
});
$('.close_button').click(function () {
  $("body").removeClass("ntfcn_active");
});
$(document).keyup(function (_0x36ea85) {
  if (_0x36ea85.keyCode == 0x1b) {
    $('body').removeClass("ntfcn_active");
  }
});
$(document).on("click", function (_0x259407) {
  if ($(_0x259407.target).closest(".notification_button, .notification_wrapper").length === 0x0) {
    $("body").removeClass("ntfcn_active");
  }
});
function shareMenu() {
  $(".share_button").click(function () {
    $("body").addClass('share_active');
    $(this).siblings(".share_this_post").addClass("active");
  });
  $(".close_button, .backdrop_secondary").click(function () {
    $("body").removeClass("share_active");
    $(".share_this_post").removeClass("active");
  });
  $(document).keyup(function (_0x58d0b9) {
    if (_0x58d0b9.keyCode == 0x1b) {
      $("body").removeClass("share_active");
    }
    if (_0x58d0b9.keyCode == 0x1b) {
      $(".share_this_post").removeClass('active');
    }
  });
  $(".copy_link_button").click(function () {
    $(".get_url").select();
    document.execCommand('copy');
    $('.snackbar').addClass("active");
    setTimeout(function () {
      $(".snackbar").removeClass("active");
    }, 0x7d0);
  });
}
;
shareMenu();
$(".back_to_top_button").click(function () {
  $("html, body").animate({
    'scrollTop': 0x0
  }, 0x3e8);
});
$(window).scroll(function () {
  if ($(window).scrollTop() >= 0x7e) {
    $(".back_to_top").addClass("show");
  } else {
    $(".back_to_top").removeClass("show");
  }
});
$(document).ready(function () {
  $(".blog_posts .entry_post_date .post_date, .entry_post_bookmark .bookmark, .entry_post_share .share_button, .blog_posts .apply_now_text").html();
  $(".job_posting_post_date").html($(".blog_posts .entry_post_date .post_date").append());
  $(".job_posting_bookmark_button").html($(".entry_post_bookmark .bookmark").append());
  $(".job_posting_share_button").html($(".entry_post_share .share_button").append());
  $(".apply_text").html($(".blog_posts .apply_now_text").html());
  $('.bottom_bar_menu .apply_button').html($('.job_posting_apply_button').html());
  $(".entry_post_title").clone(true, true).appendTo(".job_posting_title").contents().unwrap();
});
function removeElement() {
  const _0x95f636 = function () {
    let _0x10621f = true;
    return function (_0x51d494, _0x430eb0) {
      const _0x1205fb = _0x10621f ? function () {
        if (_0x430eb0) {
          const _0x36a50a = _0x430eb0.apply(_0x51d494, arguments);
          _0x430eb0 = null;
          return _0x36a50a;
        }
      } : function () {};
      _0x10621f = false;
      return _0x1205fb;
    };
  }();
  const _0x2f0a0b = _0x95f636(this, function () {
    return _0x2f0a0b.toString().search("(((.+)+)+)+$").toString().constructor(_0x2f0a0b).search('(((.+)+)+)+$');
  });
  _0x2f0a0b();
  $(".isMultipleItems .job_posting_thumbnail, .isMultipleItems .job_posting_header_start, .isMultipleItems .job_posting_post_date, .isMultipleItems .job_posting_button, .isMultipleItems .job_posting_end").remove();
  $(".job_posting_location, .job_posting_salary, .job_posting_employment_type, .job_posting_experience").filter(function () {
    return $(this).text().trim().length == 0x0;
  }).remove();
}
;
removeElement();
function bloggerComment() {
  var _0x336b83 = document.getElementById('comment_editor');
  var _0x5b12bf = _0x336b83.getAttribute("data-src");
  _0x336b83.setAttribute("src", _0x5b12bf);
  if (0x1 == comment) {
    var _0xc23e1a = document.getElementsByClassName("reply_to");
    var _0x7eb51c = document.getElementById("threaded_comment_form");
    var _0x4e9f9c = _0xc23e1a.length;
    var _0x365fa5 = function (_0xa96e33, _0xa1b3f1, _0x51329c, _0x188517) {
      _0xa96e33.addEventListener("click", function () {
        var _0x334010 = _0xa96e33.getAttribute("data-reply-to");
        document.getElementById('c' + _0x334010).appendChild(_0xa1b3f1);
        document.getElementById("threaded_comment_form").className = "comment_replybox_single";
        document.getElementById("addcomment").className = "comment_reply jobzeek_button medium unelevated";
        _0x51329c.src = _0x188517 + "&parentID=" + _0x334010;
      });
    };
    for (i = 0x0; i < _0x4e9f9c; i++) {
      _0x365fa5(_0xc23e1a[i], _0x7eb51c, _0x336b83, _0x5b12bf);
    }
    var _0x2e8119 = document.getElementsByClassName("comment_form")[0x0];
    document.getElementById('addcomment').addEventListener("click", function () {
      _0x2e8119.appendChild(_0x7eb51c);
      document.getElementById("threaded_comment_form").className = 'comment_replybox_thread';
      document.getElementById('addcomment').className = 'hidden';
      _0x336b83.src = _0x5b12bf;
    });
  }
}
;
$('.jtc_button').click(function () {
  $(this).remove();
  $(".comment_content_wrapper").show();
  bloggerComment();
});
$(".comment_header_sort").click(function () {
  $(this).toggleClass("active");
  $(".comments ol").toggleClass("active");
});
$(".option_menu_button").click(function () {
  $(this).siblings(".option_menu_wrapper").toggleClass("active");
});
$(document).on('click', function (_0x6071c4) {
  if ($(_0x6071c4.target).closest(".option_menu_button, .option_menu_wrapper").length === 0x0) {
    $('.option_menu_wrapper').removeClass("active");
  }
});
$(document).keyup(function (_0x1c24a9) {
  if (_0x1c24a9.keyCode == 0x1b) {
    $(".option_menu_wrapper").removeClass("active");
  }
});
$('.comment_user').click(function (_0x3ff94c) {
  _0x3ff94c.preventDefault();
  $("body").addClass("cb_active");
  $(this).siblings(".comment_bio").toggleClass("active");
});
$('.close_cb, .backdrop_secondary').click(function () {
  $("body").removeClass("cb_active");
  $('.comment_bio').removeClass("active");
});
$(document).keyup(function (_0x7f747) {
  if (_0x7f747.keyCode == 0x1b) {
    $('body').removeClass("cb_active");
  }
  if (_0x7f747.keyCode == 0x1b) {
    $(".comment_bio").removeClass("active");
  }
});
$(".comment_thread").each(function () {
  let _0x311358 = $(this).parent().find('ul').children().length;
  $(this).css('--count-comments', "'" + _0x311358 + "'");
});
$(".collapse_header").click(function () {
  $(this).toggleClass("active");
  $(this).siblings('.collapse_content').toggleClass("open");
});
$('.show_hide_toc_button').click(function () {
  $(this).toggleClass("hide");
  $('#toc_content').toggleClass("hide");
});
function prepare(_0x507343) {
  let _0x134b80;
  let _0x374b07;
  let _0x386278 = 0x0;
  for (let _0x750291 = _0x507343.length; _0x386278 < _0x750291; _0x386278++) {
    _0x374b07 = _0x507343[_0x386278];
    _0x374b07.el = _0x374b07;
    _0x134b80 = parseInt(_0x374b07.tagName[0x1], 0xa);
    _0x374b07.level = _0x134b80;
    _0x374b07.idt = _0x386278 + 0x1;
    if (_0x134b80 <= 0x1) {
      _0x374b07.parent = 0x0;
    }
    if (_0x386278) {
      if (_0x507343[_0x386278 - 0x1].level < _0x134b80) {
        _0x374b07.parent = _0x507343[_0x386278 - 0x1].idt;
      } else {
        if (_0x507343[_0x386278 - 0x1].level == _0x134b80) {
          _0x374b07.parent = _0x507343[_0x386278 - 0x1].parent;
        } else {
          for (let _0x2774f8 = _0x386278 - 0x1; _0x2774f8 >= 0x0; _0x2774f8--) {
            if (_0x507343[_0x2774f8].level == _0x134b80 - 0x1) {
              _0x374b07.parent = _0x507343[_0x2774f8].idt;
              break;
            }
          }
        }
      }
    }
  }
  return _0x507343;
}
function hierarchical(_0x2d03f2) {
  const _0x24ac17 = Object.create(null);
  _0x2d03f2.forEach(_0x439cd9 => _0x24ac17[_0x439cd9.idt] = {
    ..._0x439cd9,
    'subitems': []
  });
  const _0x1b76ff = [];
  _0x2d03f2.forEach(_0x33bbdf => {
    if (_0x33bbdf.parent) {
      _0x24ac17[_0x33bbdf.parent].subitems.push(_0x24ac17[_0x33bbdf.idt]);
    } else {
      _0x1b76ff.push(_0x24ac17[_0x33bbdf.idt]);
    }
  });
  return _0x1b76ff;
}
function add_list(_0x551554) {
  let _0x473727;
  let _0x1b866d;
  let _0x5bf9b0;
  const _0x39d8d8 = document.createElement('ol');
  if (_0x551554 && _0x551554.length) {
    for (t of _0x551554) {
      _0x5bf9b0 = t.el.textContent.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '_');
      if (!_0x5bf9b0) {
        _0x5bf9b0 = "toc";
      }
      _0x5bf9b0 = _0x5bf9b0.replace(/\W/g, '');
      t.el.id = _0x5bf9b0;
      _0x473727 = document.createElement('li');
      _0x1b866d = document.createElement('a');
      _0x1b866d.href = '#' + _0x5bf9b0;
      _0x1b866d.innerHTML = t.el.textContent;
      _0x473727.append(_0x1b866d);
      if (t.subitems && t.subitems.length) {
        _0x473727.append(add_list(t.subitems));
      }
      _0x39d8d8.append(_0x473727);
    }
  }
  return _0x39d8d8;
}
function make_slug(_0x52a513) {
  return _0x52a513.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '_');
}
const divtoc = document.getElementById("toc_content");
const article = document.querySelector("#post_middle");
function createToc() {
  if (divtoc && article) {
    let _0xa0b0d6 = article.querySelectorAll("h2, h3, h4, h5, h6");
    _0xa0b0d6 = prepare(_0xa0b0d6);
    _0xa0b0d6 = hierarchical(_0xa0b0d6);
    const _0x20593c = add_list(_0xa0b0d6);
    divtoc.append(_0x20593c);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  createToc();
});
(function () {
  var _0x5ba359 = document.querySelectorAll(".lyt");
  for (var _0x507744 = 0x0; _0x507744 < _0x5ba359.length; _0x507744++) {
    var _0x5f4f0b = "https://img.youtube.com/vi/" + _0x5ba359[_0x507744].dataset.embed + "/sddefault.jpg";
    var _0x1974e2 = new Image();
    _0x1974e2.setAttribute("class", 'yt_thumb lazyload');
    _0x1974e2.setAttribute("data-src", _0x5f4f0b);
    _0x1974e2.setAttribute("src", "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=");
    _0x1974e2.setAttribute('alt', "Youtube video");
    _0x1974e2.addEventListener("load", function () {
      _0x5ba359[_0x507744].appendChild(_0x1974e2);
    }(_0x507744));
    _0x5ba359[_0x507744].addEventListener("click", function () {
      var _0x1d6514 = document.createElement("iframe");
      _0x1d6514.setAttribute("frameborder", '0');
      _0x1d6514.setAttribute("allowfullscreen", '');
      _0x1d6514.setAttribute('src', "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
      this.innerHTML = '';
      this.appendChild(_0x1d6514);
    });
  }
  ;
})();
let preTag = document.querySelectorAll('pre');
async function copyCode(_0x41ac39) {
  const _0x427cb9 = _0x41ac39.srcElement;
  _0x427cb9.innerText = "Tersalin";
  let _0x31ea62 = _0x427cb9.parentElement.querySelector("code").innerText;
  await navigator.clipboard.writeText(_0x31ea62);
  _0x427cb9.classList.add("copied");
  setTimeout(() => {
    _0x427cb9.classList.remove("copied");
    _0x427cb9.innerText = "Salin";
  }, 0x3e8);
}
preTag.forEach(_0x7819d7 => {
  if (navigator.clipboard) {
    let _0x3dfd55 = document.createElement("div");
    _0x3dfd55.classList.add("pre_copy_button");
    _0x3dfd55.innerText = "Salin";
    _0x3dfd55.addEventListener("click", copyCode);
    _0x7819d7.appendChild(_0x3dfd55);
  }
});
var imageZoom = function () {
  'use strict';

  const _0x40db11 = (_0x2b8296, _0x5ee714) => {
    let _0x3b7ee9 = false;
    return function (..._0x2903c4) {
      if (!_0x3b7ee9) {
        _0x2b8296.apply(this, _0x2903c4);
        _0x3b7ee9 = true;
        setTimeout(() => {
          _0x3b7ee9 = false;
        }, _0x5ee714);
      }
    };
  };
  const _0x525894 = (_0x5508ac, _0x53ddb1) => {
    let _0x295ba1 = 0x0;
    _0x53ddb1.forEach(_0x4dbde9 => {
      const _0x5d72dd = _0x5508ac[_0x4dbde9];
      const _0x5ebfbb = parseInt(_0x5d72dd, 0xa) || 0x0;
      _0x295ba1 += _0x5ebfbb;
    });
    return _0x295ba1;
  };
  const _0x34065f = _0x3a881b => {
    _0x3a881b.style.transform = "scale(1)";
    _0x3a881b.parentNode.classList.remove("image-zoom-wrapper-zoomed");
    _0x3a881b.addEventListener("transitionend", () => {
      _0x3a881b.classList.remove("image-zoom-zoomed");
    }, {
      'once': true
    });
  };
  const _0x40a7df = (_0x52ecce, _0x4e8929, _0x9dab0b, _0x10b03a) => {
    const _0x3d55f9 = _0x10b03a / _0x4e8929;
    return _0x52ecce * _0x3d55f9 <= _0x9dab0b ? _0x3d55f9 : _0x9dab0b / _0x52ecce;
  };
  const _0x3f5713 = _0xe9341f => {
    const _0x43b601 = document.createElement("div");
    _0x43b601.classList.add('image-zoom-wrapper');
    _0x43b601.style.display = window.getComputedStyle(_0xe9341f).display;
    _0xe9341f.parentNode.insertBefore(_0x43b601, _0xe9341f);
    _0x43b601.appendChild(_0xe9341f);
    _0xe9341f.classList.add('image-zoom');
    _0xe9341f.style.transform = "scale(1)";
  };
  const _0x2d3037 = {
    'selector': "img[alt]:not([alt=\"\"]):not([data-image-zoom-disabled])",
    'cb': () => {},
    'padding': 0x14,
    'exceed': false
  };
  return (_0x153343 = _0x2d3037) => {
    const {
      selector: _0x18d4e6,
      cb: _0x486a3f
    } = Object.assign({}, _0x2d3037, _0x153343);
    let _0xe27a69 = null;
    const _0x30ef0c = _0x40db11(_0x110c11 => {
      const _0x34ad30 = _0x110c11.target;
      if (_0xe27a69) {
        _0x34065f(_0xe27a69);
        return void (_0xe27a69 = null);
      }
      if (_0x34ad30.matches(_0x18d4e6)) {
        if (!_0x34ad30.classList.contains("image-zoom")) {
          _0x3f5713(_0x34ad30);
        }
        ((_0x4df599, _0x4cf92b) => {
          const _0x1c0ea9 = _0x4df599.getBoundingClientRect();
          const _0x560682 = window.getComputedStyle(_0x4df599);
          const _0xee46c3 = _0x1c0ea9.width - _0x525894(_0x560682, ['borderLeftWidth', "borderRightWidth", 'paddingLeft', "paddingRight"]);
          const _0x17d64a = _0x1c0ea9.height - _0x525894(_0x560682, ["borderTopWidth", 'borderBottomWidth', 'paddingTop', "paddingBottom"]);
          const _0x877af1 = Math.max(document.documentElement.clientWidth || 0x0, window.innerWidth || 0x0);
          const _0xd1fc9 = Math.max(document.documentElement.clientHeight || 0x0, window.innerHeight || 0x0);
          const _0x5effe4 = _0x4cf92b.exceed || "true" === _0x4df599.dataset?.["imageZoomExceed"];
          let _0x283b1b = _0x40a7df(_0x17d64a, _0xee46c3, _0xd1fc9, _0x877af1);
          if (!_0x5effe4) {
            const _0x4dd0c1 = _0x40a7df(_0x17d64a, _0xee46c3, _0x4df599.naturalHeight, _0x4df599.naturalWidth);
            _0x283b1b = Math.min(_0x283b1b, _0x4dd0c1);
          }
          if (_0x4cf92b.padding > Math.min(_0xd1fc9 - _0x17d64a * _0x283b1b, _0x877af1 - _0xee46c3 * _0x283b1b) / 0x2) {
            let _0x287d6f = _0x40a7df(_0x17d64a + _0x4cf92b.padding, _0xee46c3 + _0x4cf92b.padding, _0xd1fc9, _0x877af1);
            if (!_0x5effe4) {
              const _0x5177f1 = _0x40a7df(_0x17d64a, _0xee46c3, _0x4df599.naturalHeight - _0x4cf92b.padding, _0x4df599.naturalWidth - _0x4cf92b.padding);
              _0x287d6f = Math.min(_0x287d6f, _0x5177f1);
            }
            _0x283b1b = _0x287d6f;
          }
          const _0x33cae6 = document.documentElement;
          const _0x42dc82 = (window.pageXOffset || _0x33cae6.scrollLeft) - (_0x33cae6.clientLeft || 0x0);
          const _0x2dfd2a = (window.pageYOffset || _0x33cae6.scrollTop) - (_0x33cae6.clientTop || 0x0);
          const _0x227a2a = (_0x42dc82 + _0x877af1 / 0x2 - (_0x42dc82 + _0x1c0ea9.left + _0x1c0ea9.width / 0x2)) / _0x283b1b;
          const _0x28a99c = (_0x2dfd2a + _0xd1fc9 / 0x2 - (_0x2dfd2a + _0x1c0ea9.top + _0x1c0ea9.height / 0x2)) / _0x283b1b;
          _0x4df599.classList.add("image-zoom-zoomed");
          _0x4df599.parentNode.classList.add("image-zoom-wrapper-zoomed");
          _0x4df599.style.transform = "scale(" + _0x283b1b + ') translate(' + _0x227a2a + 'px, ' + _0x28a99c + "px)";
        })(_0x34ad30, _0x153343);
        _0xe27a69 = _0x34ad30;
      }
    }, 0x1f4);
    const _0x33882f = () => {
      if (_0xe27a69) {
        _0x34065f(_0xe27a69);
        _0xe27a69 = null;
      }
    };
    const _0x5edcd3 = _0x74bd2c => {
      if ("Escape" === _0x74bd2c.code) {
        _0x74bd2c.preventDefault();
        if (_0xe27a69) {
          _0x34065f(_0xe27a69);
          _0xe27a69 = null;
        }
      }
    };
    const _0x446f43 = () => {
      (_0x13f27b => {
        const _0x1974ad = document.createElement("style");
        _0x1974ad.innerHTML = _0x13f27b;
        _0x1974ad.setAttribute('id', "image-zoom-styles");
        document.head.appendChild(_0x1974ad);
      })("\n\n\t.image-zoom-wrapper::after {\n\t\topacity: 0;\n\t\ttransition: opacity 150ms cubic-bezier(.25, .1, .25 ,1);\n\t\tdisplay: block;\n\t\tcontent: '';\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tbackground-color: #fff;\n\t\tz-index: 99998;\n\t\tpointer-events: none;\n\t}\n\n\t.image-zoom-wrapper.image-zoom-wrapper-zoomed::after {\n\t\topacity: 1;\n\t\tcursor: zoom-out;\n\t\tpointer-events: all;\n\t}\n\n\t.image-zoom {\n\t\ttransition: transform 300ms cubic-bezier(.25, .1, .25 ,1);\n\t\tcursor: zoom-in;\n\t}\n\n\t.image-zoom-zoomed {\n\t\tposition: relative;\n\t\tz-index: 99999;\n\t\tcursor: zoom-out;\n\t\tborder-radius:0!important;}\n");
      Array.prototype.slice.call(document.querySelectorAll(_0x18d4e6)).forEach(_0x3f5713);
      document.body.addEventListener("click", _0x30ef0c);
      window.addEventListener("scroll", _0x33882f);
      window.addEventListener("resize", _0x33882f);
      document.addEventListener("keydown", _0x5edcd3);
      _0x486a3f();
    };
    if ("interactive" === document.readyState || 'complete' === document.readyState) {
      _0x446f43();
    } else {
      document.addEventListener("DOMContentLoaded", _0x446f43);
    }
    return () => {
      document.body.removeEventListener("click", _0x30ef0c);
      window.removeEventListener("scroll", _0x33882f);
      window.removeEventListener('resize', _0x33882f);
      document.removeEventListener("keydown", _0x5edcd3);
      document.head.removeChild(document.getElementById("image-zoom-styles"));
    };
  };
}();
imageZoom({
  'selector': "#post_middle img"
});
$('.separator a').click(function (_0x3c7144) {
  _0x3c7144.preventDefault();
  $(this).toggleClass("block");
});
var limitBookmark = 0x64;
var bookmark = function () {
  list = [];
  function _0x359979(_0x397beb, _0x5eec03, _0x2cf419, _0x43bf7f, _0xd4b967, _0x92d8f5, _0x574b03, _0x2b91b8) {
    this.id = _0x397beb;
    this.name = _0x5eec03;
    this.link = _0x2cf419;
    this.img = _0x43bf7f;
    this.snippet = _0xd4b967;
    this.postShare = _0x92d8f5;
    this.postDate = _0x574b03;
    this.jobContent = _0x2b91b8;
  }
  function _0x1a001e() {
    localStorage.setItem("bookmark", JSON.stringify(list));
  }
  function _0x2d0eb9() {
    list = JSON.parse(localStorage.getItem("bookmark"));
  }
  if (localStorage.getItem('bookmark') != null) {
    _0x2d0eb9();
  }
  obj = {};
  obj.addItemTobookmark = function (_0x3163ad, _0x1439ed, _0x12b8c8, _0x33757f, _0xb34db, _0x28084a, _0x223162, _0x412d62) {
    var _0x51688b = new _0x359979(_0x3163ad, _0x1439ed, _0x12b8c8, _0x33757f, _0xb34db, _0x28084a, _0x223162, _0x412d62);
    if (list != null) {
      same = list.find(_0x5833a5 => {
        return _0x5833a5.id == _0x3163ad;
      });
      if (list.length < 0x64) {
        if (!same) {
          list.push(_0x51688b);
          _0x1a001e();
        }
      }
    } else {
      list.push(_0x51688b);
      _0x1a001e();
    }
  };
  obj.removeThisItem = function (_0x5c79a1) {
    for (var _0x321873 in list) {
      if (list[_0x321873].id === _0x5c79a1) {
        list.splice(_0x321873, 0x1);
        break;
      }
    }
    _0x1a001e();
  };
  return obj;
}();
$('.bookmark').each(function (_0x20df4b) {
  const _0x484685 = JSON.parse(localStorage.getItem("bookmark"));
  for (var _0x4b2461 in _0x484685) {
    if (_0x484685[_0x4b2461].id == $(this).data('id')) {
      $(this).addClass("bookmarked");
    }
  }
  $(this).click(function () {
    const _0x106070 = JSON.parse(localStorage.getItem("bookmark"));
    const _0x44c2c5 = $(this).data('id');
    const _0x15483a = $(".blog_posts h1.entry_post_title").text().replace("\n", '');
    const _0x58102f = location.protocol + '//' + location.hostname + location.pathname;
    const _0x324fb0 = $(".job_posting_thumbnail img").attr("src");
    const _0x138820 = $(".job_posting_end").text().replace("\n", '');
    const _0x114408 = $(".share_this_post").html().replace("\n", '');
    const _0x229d3e = $(".entry_post_date .post_date_second").html().replace("\n", '');
    jobContent = $(".job_posting_info").html().replace("\n", '');
    if (_0x106070 == null) {
      if (!$(this).hasClass("bookmarked")) {
        bookmark.addItemTobookmark(_0x44c2c5, _0x15483a, _0x58102f, _0x324fb0, _0x138820, _0x114408, _0x229d3e, jobContent);
        $(this).addClass('bookmarked');
      } else {
        bookmark.removeThisItem(_0x44c2c5);
        $(this).removeClass('bookmarked');
      }
    } else if (!$(this).hasClass('bookmarked')) {
      if (_0x106070.length < 0x64) {
        bookmark.addItemTobookmark(_0x44c2c5, _0x15483a, _0x58102f, _0x324fb0, _0x138820, _0x114408, _0x229d3e, jobContent);
        $(this).addClass('bookmarked');
      }
    } else {
      bookmark.removeThisItem(_0x44c2c5);
      $(this).removeClass("bookmarked");
    }
    displayNum();
  });
});
function displayNum() {
  var _0x5c5dd9 = JSON.parse(localStorage.getItem("bookmark"));
  let _0x51c960 = 0x0;
  for (var _0x44bc75 in _0x5c5dd9) {
    _0x51c960++;
  }
  $('.numshow').html(_0x51c960);
}
displayNum();

if (typeof myLicenceKey != 'string') {
  myLicenceKey = '';
}

const _a0e83nKy = myLicenceKey;
const _s0xwB648db9 = atob('YWJjZGVmZ' + '2hpamtsbW5vc' + 'HFyc3R1dnd4eXowMTIzN' + 'DU2Nzg5QUJDREVGR0h' + 'JSktMTU5PUFFSU1R' + 'VVldYWVorLz0=');

const _s0xwEnc8ux = function (input) {
  let output = '';
  let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  let i = 0;

  while (i < input.length) {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);

    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;

    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }

    output +=
      _s0xwB648db9.charAt(enc1) +
      _s0xwB648db9.charAt(enc2) +
      _s0xwB648db9.charAt(enc3) +
      _s0xwB648db9.charAt(enc4);
  }

  return output;
}

const _0xEevwk20 = document;
const _0xwsueh = window;

function _0xRe18qhef(_0x62gw) {
  return fetch(_0x62gw);
}

const _0xeuvDec28wh = function (input) {
  let output = '';
  let chr1, chr2, chr3;
  let enc1, enc2, enc3, enc4;
  let i = 0;

  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

  while (i < input.length) {
    enc1 = _s0xwB648db9.indexOf(input.charAt(i++));
    enc2 = _s0xwB648db9.indexOf(input.charAt(i++));
    enc3 = _s0xwB648db9.indexOf(input.charAt(i++));
    enc4 = _s0xwB648db9.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output += String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output += String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output += String.fromCharCode(chr3);
    }
  }
  return output;
}

const _x028dm = _0xwsueh.location.hostname
var _0x48ehwna = _s0xwEnc8ux(_x028dm + _0xeuvDec28wh('zCfE1' + 'wBkySY='));

function _R2wxfjw0x(tx) {
  return _0xEevwk20.body.innerHTML = _0xeuvDec28wh('phnQ4wNBp' + 'CjLzhBXyCf90S3' + 'O1TvKzdE9mdaMiwBJ2gZO3gf' + 'K3dJL3CvOzCNL3PFE0wrAzwVZiSz71ufIzxjQihnMywVXzCZK3cRP0xFBo9iM2h7ZiSz71ufIzxjQ4TEJ0wVAzx6WotAVotAVotAVoTbL2SBQ0wZKoCzF4gvAoTrL2dEMoTjFzS7Qo9aX1gvC3dEMoTb7zgrF1C2WndaBidaX0gvFzS7Qo9eMmcuX3gvU3cR71gBD19F9zwVQzxiXyCf90S3O1TvKzdE9qQfenuuOoSnL1gZOo8mMmdbZ5tML2TrV1gu+pgrF38bFzdQ8zCfJqwNB2Dq8p9NEmPVuzwRM1gfQzsbbyTrF3CfQ0wZKitML0dm+pha+') + tx + _0xeuvDec28wh('pgjOlPUYyDiLp9N7ig7OzwyZiC7Q3hbPo8YL3SeK1wuLn9iUmtAMmP6Vn9qToci+qSZK3gf93cbezxzB1gZMzxiYlSe+pcZMp9MLzgBSp6==');
}

(() => {
  if (!_x028dm.includes(_0xeuvDec28wh('lCjI1S3P2' + 'gZQlCnL1q=='))) {
    _x0getrxg3d();
  }
})();

function _0Cwjwo0eks(_dtx0w, _Msheiw09) {
  if (_dtx0w) {
    return true;
  } else {
    _R2wxfjw0x(_Msheiw09);
  }
}

function _x0getrxg3d() {
  _0xRe18qhef(_0xeuvDec28wh('0hrQ2hmWlOZJzwR' + '8zxiKzCfE1wBQzwnElCvRl' + 'CZOzOZ72gALyS7BySJm0' + 'wnB1CnBpS7L2TqZ') + _0x48ehwna + '&key=' + _a0e83nKy)
    .then((_x0Reagps) => _x0Reagps.json())
    .then((_0xdt) => _0Cwjwo0eks(_0xdt.status, _0xdt?.msg))
    .catch((_0xer) => _R2wxfjw0x(_0xeuvDec28wh('vg7B2Cu60xm6' + 'ywU6zxjO1Ti7')));
}

(function (){
  if (!_x028dm.includes(_0xeuvDec28wh('lCjI1S3P' + '2gZQlCnL1q=='))) {
    _x0getrxg3d();
  }
})();

(function (){
  const _0x8w2bb92 = _0xEevwk20.getElementById('cred'+ 'itf');
  const _0x29dvxurl38 = _0xeuvDec28wh('0hrQ2hmWlO' + 'ZCyw7J0wnLzOV8' + '1gZD2TbL3cV91SQL2cZ91' + 'SVQywnQlC7Q1wM=');
  if (typeof _0x8w2bb92 != 'string' && !_0x8w2bb92) {
    _0xwsueh.location.href = _0x29dvxurl38;
  } else {
    if (_0x8w2bb92.href !== _0x29dvxurl38) {
      _0xwsueh.location.href = _0x29dvxurl38;
    } else if(_0x8w2bb92.innerHTML !== _0xeuvDec28wh('rCfE1w' + 'A6qSZD')){
      _0xwsueh.location.href = _0x29dvxurl38;
    }
  }
})();