function initPhotoSwipe(i, e) {
	var n = function(i) {
			var e = [];
			i.find("span").length;
			return i.find("span").each(function() {
				var i = $(this).find("img"),
					n = $(this).data("url"),
					o = +$(this).data("w"),
					t = +$(this).data("h");
				0 != o && 0 != t || (o = i.width(), t = i.height(), o = 3 * o, t = 3 * t);
				var a = {
					src: n,
					w: o,
					h: t,
					el: this
				};
				a.o = {
					src: i.attr("src"),
					w: i.width(),
					h: i.height()
				}, a.m = {
					src: n,
					w: o,
					h: t
				}, e.push(a)
			}), e
		},
		o = function(i, e) {
			var o = $("#j-pswp")[0],
				t = n(e),
				a = {
					tapToClose: true,
					galleryUID: e.data("pswp-uid"),
					getThumbBoundsFn: function(i) {
						var e = t[i].el.children[0],
							n = window.pageYOffset || document.documentElement.scrollTop,
							o = e.getBoundingClientRect();
						return {
							x: o.left,
							y: o.top + n,
							w: o.width
						}
					},
					addCaptionHTMLFn: function(i, e, n) {
						return i.title ? (e.children[0].innerHTML = i.title + "<br/><small>Photo: " + i.author + "</small>", !0) : (e.children[
							0].innerText = "", !1)
					}
				};
			if (a.shareEl = !1, a.fullscreenEl = !1, a.index = parseInt(i, 10), !isNaN(a.index)) {
				var l, r, d = new PhotoSwipe(o, PhotoSwipeUI_Default, t, a),
					w = !1,
					s = !0,
					c = !0;
				if ("ios" == videoOsType && navigator.userAgent.toLowerCase().indexOf("micromessenger") > -1) {
					screen.width, screen.height;
					window.addEventListener("orientationchange", function() {
						c && d.close()
					}, !1)
				}
				d.listen("beforeResize", function() {
					var i = window.devicePixelRatio ? window.devicePixelRatio : 1;
					i = Math.min(i, 2.5), l = d.viewportSize.x * i, l >= 1200 || !d.likelyTouchDevice && l > 800 || screen.width >
						1200 ? w || (w = !0, r = !0) : w && (w = !1, r = !0), r && !s && d.invalidateCurrItems(), s && (s = !1), r = !1
				}), d.listen("gettingData", function(i, e) {
					e.m || (e.m = e.o), e.src = e.m.src, e.w = e.m.w, e.h = e.m.h
				}), d.init()
			}
		};
	e.find(".j-photoswiper").each(function(e) {
		var n = $(this),
			t = "photoswiper",
			a = [];
		$(this).find("span").each(function() {
			a.push($(this).data("url")), 0 != $(this).data("w") && 0 != $(this).data("h") || (t = "roll")
		}), void 0 == window.orientation && (t = "roll"), "photoswiper" == t ? ($(this).data("pswp-uid", 100 * i + e), $(
			this).find("span").each(function(i) {
			$(this).on(tap, function() {
				return o(i, n), !1
			})
		})) : $(this).find("span").each(function(i) {
			$(this).on(tap, function() {
				lvsCmd.viewimg(a, i)
			})
		})
	})
}
var rollDownloadTime;
lvsCmd.viewimg = function(i, e) {
	window.newRoll || (window.newRoll = new sugar["roll-1.0.0"]("j-viewpic", function(i, e) {
		$("#j-viewicon").html("");
		for (var n = 0; n < e; n++) n == i ? $("#j-viewicon").append('<em class="current"></em>') : $("#j-viewicon").append(
			"<em></em>");
		if (void 0 == window.orientation) {
			var o = $("#j-viewpic li").eq(i).data("src");
			if (o) {
				var t = o.replace(/image\/(.*?)\/watermark/gi, "image/watermark");
				$("#j-fullview .download a").data("viewsrc", o).data("bigviewsrc", t), $("#j-fullview .download input")[0].checked ?
					$("#j-fullview .download a").attr("href", t) : $("#j-fullview .download a").attr("href", o), rollDownloadTime &&
					clearTimeout(rollDownloadTime), $("#j-fullview .download").removeClass("fn-hide"), rollDownloadTime =
					setTimeout(function() {
						$("#j-fullview .download").addClass("fn-hide")
					}, 4e3)
			}
		}
	}, function() {
		$("#j-fullview").css("display", "none"), rollDownloadTime && clearTimeout(rollDownloadTime)
	})), $("#j-fullview").css("display", "block");
	var n = [],
		o = "image/resize,w_" + 2 * containWidth + ",limit_1/watermark";
	void 0 == window.orientation && (o = "image/resize,m_lfit,w_" + $(window).width() + ",h_" + $(window).height() +
		",limit_1/watermark", rollDownloadTime && clearTimeout(rollDownloadTime), $("#j-fullview .download").removeClass(
			"fn-hide"), rollDownloadTime = setTimeout(function() {
			$("#j-fullview .download").addClass("fn-hide")
		}, 4e3)), $.each(i, function() {
		n.push(this.replace("image/watermark", o))
	}), newRoll.show(n, e)
}, void 0 == window.orientation && $("#j-fullview .download input").on(tap, function() {
	var i = $("#j-fullview .download a");
	this.checked ? i.attr("href", i.data("bigviewsrc")) : i.attr("href", i.data("viewsrc"))
}), $("#j-fullview .close").on(tap, function() {
	$("#j-fullview").css("display", "none"), rollDownloadTime && clearTimeout(rollDownloadTime)
}), $("#j-fullview").on(touchmove, function() {
	return !1
});
