$('.search_btn').click(function(){
  $('body').addClass('search_active');
});
$('.backdrop').click(function(){
  $('body').removeClass('search_active');
});

/* Main Script */
function responsive(e){e.matches?$(".jobzeek_navigation ul li.has_sub > a").click(function(){$(this).toggleClass("active"),$(this).siblings(".jobzeek_navigation li ul").toggleClass("show")}):$(".jobzeek_navigation ul li.has_sub").hover(function(){$(this).toggleClass("active")})}$("#jobzeek_loadmore").each(function(){var e=$(this).data("load");e&&$("#jobzeek_loadmore").show(),$("#jobzeek_loadmore").on("click",function(o){$("#jobzeek_loadmore").hide(),$.ajax({url:e,success:function(o){var n=$(o).find(".blog_posts");n.find(".post_outer").addClass("next_post"),$(".blog_posts").append(n.html()),(e=$(o).find("#jobzeek_loadmore").data("load"))?$("#jobzeek_loadmore").show():($("#jobzeek_loadmore").hide(),$(".blog_pager .no_results").addClass("show")),Defer.dom("img.lazyload",100,"loaded",null,{rootMargin:"1px"}),shareMenu(),timeAgo(),removeElement()},beforeSend:function(){$(".blog_pager .loading").css("display","flex")},complete:function(){$(".blog_pager .loading").hide()}}),o.preventDefault()})});var maxWidth=window.matchMedia("(max-width: 1024px)");function shareMenu(){$(".share_button").click(function(){$("body").addClass("share_active"),$(this).siblings(".share_this_post").addClass("active")}),$(".close_button, .backdrop_secondary").click(function(){$("body").removeClass("share_active"),$(".share_this_post").removeClass("active")}),$(document).keyup(function(e){27==e.keyCode&&$("body").removeClass("share_active"),27==e.keyCode&&$(".share_this_post").removeClass("active")}),$(".copy_link_button").click(function(){$(".get_url").select(),document.execCommand("copy"),$(".snackbar").addClass("active"),setTimeout(function(){$(".snackbar").removeClass("active")},2e3)})}function removeElement(){let e,o=(e=!0,function(o,n){let a=e?function(){if(n){let e=n.apply(o,arguments);return n=null,e}}:function(){};return e=!1,a}),n=o(this,function(){return n.toString().search("(((.+)+)+)+$").toString().constructor(n).search("(((.+)+)+)+$")});n(),$(".isMultipleItems .job_posting_thumbnail, .isMultipleItems .job_posting_header_start, .isMultipleItems .job_posting_post_date, .isMultipleItems .job_posting_button, .isMultipleItems .job_posting_end").remove(),$(".job_posting_location, .job_posting_salary, .job_posting_employment_type, .job_posting_experience").filter(function(){return 0==$(this).text().trim().length}).remove()}function bloggerComment(){var e=document.getElementById("comment_editor"),o=e.getAttribute("data-src");if(e.setAttribute("src",o),1==comment){var n=document.getElementsByClassName("reply_to"),a=document.getElementById("threaded_comment_form"),s=n.length,l=function(e,o,n,a){e.addEventListener("click",function(){var s=e.getAttribute("data-reply-to");document.getElementById("c"+s).appendChild(o),document.getElementById("threaded_comment_form").className="comment_replybox_single",document.getElementById("addcomment").className="comment_reply jobzeek_button medium unelevated",n.src=a+"&parentID="+s})};for(i=0;i<s;i++)l(n[i],a,e,o);var r=document.getElementsByClassName("comment_form")[0];document.getElementById("addcomment").addEventListener("click",function(){r.appendChild(a),document.getElementById("threaded_comment_form").className="comment_replybox_thread",document.getElementById("addcomment").className="hidden",e.src=o})}}function prepare(e){let o,n,a=0;for(let s=e.length;a<s;a++)if((n=e[a]).el=n,o=parseInt(n.tagName[1],10),n.level=o,n.idt=a+1,o<=1&&(n.parent=0),a){if(e[a-1].level<o)n.parent=e[a-1].idt;else if(e[a-1].level==o)n.parent=e[a-1].parent;else for(let l=a-1;l>=0;l--)if(e[l].level==o-1){n.parent=e[l].idt;break}}return e}function hierarchical(e){let o=Object.create(null);e.forEach(e=>o[e.idt]={...e,subitems:[]});let n=[];return e.forEach(e=>{e.parent?o[e.parent].subitems.push(o[e.idt]):n.push(o[e.idt])}),n}function add_list(e){let o,n,a,s=document.createElement("ol");if(e&&e.length)for(t of e)(a=t.el.textContent.toLowerCase().replace(/[^\w ]+/g,"").replace(/ +/g,"_"))||(a="toc"),a=a.replace(/\W/g,""),t.el.id=a,o=document.createElement("li"),(n=document.createElement("a")).href="#"+a,n.innerHTML=t.el.textContent,o.append(n),t.subitems&&t.subitems.length&&o.append(add_list(t.subitems)),s.append(o);return s}function make_slug(e){return e.toLowerCase().replace(/[^\w ]+/g,"").replace(/ +/g,"_")}responsive(maxWidth),maxWidth.addListener(responsive),$(".menu_button").click(function(){$("body").toggleClass("nav_active")}),$(".close_menu_button, .backdrop").click(function(){$("body").removeClass("nav_active")}),$(".notification_button").click(function(){$("body").toggleClass("ntfcn_active")}),$(".close_button").click(function(){$("body").removeClass("ntfcn_active")}),$(document).keyup(function(e){27==e.keyCode&&$("body").removeClass("ntfcn_active")}),$(document).on("click",function(e){0===$(e.target).closest(".notification_button, .notification_wrapper").length&&$("body").removeClass("ntfcn_active")}),shareMenu(),$(".back_to_top_button").click(function(){$("html, body").animate({scrollTop:0},1e3)}),$(window).scroll(function(){$(window).scrollTop()>=126?$(".back_to_top").addClass("show"):$(".back_to_top").removeClass("show")}),$(document).ready(function(){$(".blog_posts .entry_post_date .post_date, .entry_post_bookmark .bookmark, .entry_post_share .share_button, .blog_posts .apply_now_text").html(),$(".job_posting_post_date").html($(".blog_posts .entry_post_date .post_date").append()),$(".job_posting_bookmark_button").html($(".entry_post_bookmark .bookmark").append()),$(".job_posting_share_button").html($(".entry_post_share .share_button").append()),$(".apply_text").html($(".blog_posts .apply_now_text").html()),$(".bottom_bar_menu .apply_button").html($(".job_posting_apply_button").html()),$(".entry_post_title").clone(!0,!0).appendTo(".job_posting_title").contents().unwrap()}),removeElement(),$(".jtc_button").click(function(){$(this).remove(),$(".comment_content_wrapper").show(),bloggerComment()}),$(".comment_header_sort").click(function(){$(this).toggleClass("active"),$(".comments ol").toggleClass("active")}),$(".option_menu_button").click(function(){$(this).siblings(".option_menu_wrapper").toggleClass("active")}),$(document).on("click",function(e){0===$(e.target).closest(".option_menu_button, .option_menu_wrapper").length&&$(".option_menu_wrapper").removeClass("active")}),$(document).keyup(function(e){27==e.keyCode&&$(".option_menu_wrapper").removeClass("active")}),$(".comment_user").click(function(e){e.preventDefault(),$("body").addClass("cb_active"),$(this).siblings(".comment_bio").toggleClass("active")}),$(".close_cb, .backdrop_secondary").click(function(){$("body").removeClass("cb_active"),$(".comment_bio").removeClass("active")}),$(document).keyup(function(e){27==e.keyCode&&$("body").removeClass("cb_active"),27==e.keyCode&&$(".comment_bio").removeClass("active")}),$(".comment_thread").each(function(){let e=$(this).parent().find("ul").children().length;$(this).css("--count-comments","'"+e+"'")}),$(".collapse_header").click(function(){$(this).toggleClass("active"),$(this).siblings(".collapse_content").toggleClass("open")}),$(".show_hide_toc_button").click(function(){$(this).toggleClass("hide"),$("#toc_content").toggleClass("hide")});const divtoc=document.getElementById("toc_content"),article=document.querySelector("#post_middle");function createToc(){if(divtoc&&article){let e=article.querySelectorAll("h2, h3, h4, h5, h6");e=hierarchical(e=prepare(e));let o=add_list(e);divtoc.append(o)}}document.addEventListener("DOMContentLoaded",()=>{createToc()}),function(){for(var e=document.querySelectorAll(".lyt"),o=0;o<e.length;o++){var n="https://img.youtube.com/vi/"+e[o].dataset.embed+"/sddefault.jpg",a=new Image;a.setAttribute("class","yt_thumb lazyload"),a.setAttribute("data-src",n),a.setAttribute("src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="),a.setAttribute("alt","Youtube video"),a.addEventListener("load",void e[o].appendChild(a)),e[o].addEventListener("click",function(){var e=document.createElement("iframe");e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen",""),e.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.embed+"?rel=0&showinfo=0&autoplay=1"),this.innerHTML="",this.appendChild(e)})}}();let preTag=document.querySelectorAll("pre");async function copyCode(e){let o=e.srcElement;o.innerText="Tersalin";await navigator.clipboard.writeText(o.parentElement.querySelector("code").innerText),o.classList.add("copied"),setTimeout(()=>{o.classList.remove("copied"),o.innerText="Salin"},1e3)}preTag.forEach(e=>{if(navigator.clipboard){let o=document.createElement("div");o.classList.add("pre_copy_button"),o.innerText="Salin",o.addEventListener("click",copyCode),e.appendChild(o)}});var imageZoom=function(){"use strict";let e=(e,o)=>{let n=!1;return function(...a){n||(e.apply(this,a),n=!0,setTimeout(()=>{n=!1},o))}},o=(e,o)=>{let n=0;return o.forEach(o=>{let a=e[o],s=parseInt(a,10)||0;n+=s}),n},n=e=>{e.style.transform="scale(1)",e.parentNode.classList.remove("image-zoom-wrapper-zoomed"),e.addEventListener("transitionend",()=>{e.classList.remove("image-zoom-zoomed")},{once:!0})},a=(e,o,n,a)=>{let s=a/o;return e*s<=n?s:n/e},s=e=>{let o=document.createElement("div");o.classList.add("image-zoom-wrapper"),o.style.display=window.getComputedStyle(e).display,e.parentNode.insertBefore(o,e),o.appendChild(e),e.classList.add("image-zoom"),e.style.transform="scale(1)"},l={selector:'img[alt]:not([alt=""]):not([data-image-zoom-disabled])',cb(){},padding:20,exceed:!1};return (r=l)=>{let{selector:c,cb:d}=Object.assign({},l,r),m=null,p=e(e=>{let l=e.target;if(m)return n(m),void(m=null);l.matches(c)&&(l.classList.contains("image-zoom")||s(l),((e,n)=>{let s=e.getBoundingClientRect(),l=window.getComputedStyle(e),r=s.width-o(l,["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"]),c=s.height-o(l,["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"]),d=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),m=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),p=n.exceed||"true"===e.dataset?.imageZoomExceed,u=a(c,r,m,d);if(!p){let h=a(c,r,e.naturalHeight,e.naturalWidth);u=Math.min(u,h)}if(n.padding>Math.min(m-c*u,d-r*u)/2){let b=a(c+n.padding,r+n.padding,m,d);if(!p){let g=a(c,r,e.naturalHeight-n.padding,e.naturalWidth-n.padding);b=Math.min(b,g)}u=b}let f=document.documentElement,v=(window.pageXOffset||f.scrollLeft)-(f.clientLeft||0),k=(window.pageYOffset||f.scrollTop)-(f.clientTop||0),y=(v+d/2-(v+s.left+s.width/2))/u,x=(k+m/2-(k+s.top+s.height/2))/u;e.classList.add("image-zoom-zoomed"),e.parentNode.classList.add("image-zoom-wrapper-zoomed"),e.style.transform="scale("+u+") translate("+y+"px, "+x+"px)"})(l,r),m=l)},500),u=()=>{m&&(n(m),m=null)},h=e=>{"Escape"===e.code&&(e.preventDefault(),m&&(n(m),m=null))},b=()=>{(e=>{let o=document.createElement("style");o.innerHTML=e,o.setAttribute("id","image-zoom-styles"),document.head.appendChild(o)})("\n\n	.image-zoom-wrapper::after {\n		opacity: 0;\n		transition: opacity 150ms cubic-bezier(.25, .1, .25 ,1);\n		display: block;\n		content: '';\n		position: fixed;\n		top: 0;\n		left: 0;\n		right: 0;\n		bottom: 0;\n		background-color: #fff;\n		z-index: 99998;\n		pointer-events: none;\n	}\n\n	.image-zoom-wrapper.image-zoom-wrapper-zoomed::after {\n		opacity: 1;\n		cursor: zoom-out;\n		pointer-events: all;\n	}\n\n	.image-zoom {\n		transition: transform 300ms cubic-bezier(.25, .1, .25 ,1);\n		cursor: zoom-in;\n	}\n\n	.image-zoom-zoomed {\n		position: relative;\n		z-index: 99999;\n		cursor: zoom-out;\n		border-radius:0!important;}\n"),Array.prototype.slice.call(document.querySelectorAll(c)).forEach(s),document.body.addEventListener("click",p),window.addEventListener("scroll",u),window.addEventListener("resize",u),document.addEventListener("keydown",h),d()};return"interactive"===document.readyState||"complete"===document.readyState?b():document.addEventListener("DOMContentLoaded",b),()=>{document.body.removeEventListener("click",p),window.removeEventListener("scroll",u),window.removeEventListener("resize",u),document.removeEventListener("keydown",h),document.head.removeChild(document.getElementById("image-zoom-styles"))}}}();imageZoom({selector:"#post_middle img"}),$(".separator a").click(function(e){e.preventDefault(),$(this).toggleClass("block")});var limitBookmark=100,bookmark=function(){function e(e,o,n,a,s,l,r,c){this.id=e,this.name=o,this.link=n,this.img=a,this.snippet=s,this.postShare=l,this.postDate=r,this.jobContent=c}function o(){localStorage.setItem("bookmark",JSON.stringify(list))}return list=[],null!=localStorage.getItem("bookmark")&&(list=JSON.parse(localStorage.getItem("bookmark"))),(obj={}).addItemTobookmark=function(n,a,s,l,r,c,d,m){var p=new e(n,a,s,l,r,c,d,m);null!=list?(same=list.find(e=>e.id==n),list.length<100&&!same&&(list.push(p),o())):(list.push(p),o())},obj.removeThisItem=function(e){for(var n in list)if(list[n].id===e){list.splice(n,1);break}o()},obj}();function displayNum(){var e=JSON.parse(localStorage.getItem("bookmark"));let o=0;for(var n in e)o++;$(".numshow").html(o)}$(".bookmark").each(function(e){let o=JSON.parse(localStorage.getItem("bookmark"));for(var n in o)o[n].id==$(this).data("id")&&$(this).addClass("bookmarked");$(this).click(function(){let e=JSON.parse(localStorage.getItem("bookmark")),o=$(this).data("id"),n=$(".blog_posts h1.entry_post_title").text().replace("\n",""),a=location.protocol+"//"+location.hostname+location.pathname,s=$(".job_posting_thumbnail img").attr("src"),l=$(".job_posting_end").text().replace("\n",""),r=$(".share_this_post").html().replace("\n",""),c=$(".entry_post_date .post_date_second").html().replace("\n","");jobContent=$(".job_posting_info").html().replace("\n",""),null==e?$(this).hasClass("bookmarked")?(bookmark.removeThisItem(o),$(this).removeClass("bookmarked")):(bookmark.addItemTobookmark(o,n,a,s,l,r,c,jobContent),$(this).addClass("bookmarked")):$(this).hasClass("bookmarked")?(bookmark.removeThisItem(o),$(this).removeClass("bookmarked")):e.length<100&&(bookmark.addItemTobookmark(o,n,a,s,l,r,c,jobContent),$(this).addClass("bookmarked")),displayNum()})}),displayNum();

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