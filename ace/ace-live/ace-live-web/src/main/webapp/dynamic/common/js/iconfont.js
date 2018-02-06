(function (window) {
    var svgSprite = '<svg><symbol id="icon-fangdajing" viewBox="0 0 1024 1024"><path d="M1011.975 960.664 785.583 759.823c28.026-35.029 50.8-73.962 67.876-116.211 22.961-56.813 34.604-117.132 34.604-179.274 0-62.144-11.644-122.459-34.604-179.273-22.211-54.957-54.027-104.332-94.561-146.751-40.643-42.532-88.014-75.944-140.797-99.307C563.323 14.759 505.137 2.464 445.16 2.464c-59.979 0-118.166 12.294-172.944 36.542-52.783 23.363-100.154 56.775-140.797 99.307-40.536 42.421-72.35 91.794-94.563 146.751C13.894 341.877 2.251 402.194 2.251 464.338c0 62.143 11.643 122.461 34.605 179.274 22.211 54.954 54.027 104.329 94.563 146.749 40.643 42.532 88.014 75.944 140.797 99.307 54.779 24.246 112.965 36.541 172.944 36.541 59.977 0 118.164-12.295 172.941-36.541 43.84-19.405 83.932-45.765 119.552-78.504l227.722 202.025c6.686 5.929 15.002 8.846 23.287 8.846 9.691 0 19.336-3.991 26.275-11.811C1027.809 995.72 1026.48 973.532 1011.975 960.664zM445.161 855.992c-205.503 0-372.693-175.696-372.693-391.654 0-215.961 167.189-391.658 372.693-391.658 205.501 0 372.688 175.697 372.688 391.658C817.849 680.298 650.661 855.992 445.161 855.992z"  ></path></symbol><symbol id="icon-shijian" viewBox="0 0 1024 1024"><path d="M512 544C492.8 544 480 531.2 480 512L480 268.8C480 256 492.8 243.2 512 243.2S544 256 544 268.8L544 512C544 531.2 531.2 544 512 544z"  ></path><path d="M832 544 512 544C492.8 544 480 531.2 480 512S492.8 480 512 480l320 0c19.2 0 32 12.8 32 32S851.2 544 832 544z"  ></path><path d="M512 1024c-281.6 0-512-230.4-512-512s230.4-512 512-512 512 230.4 512 512c0 128-44.8 243.2-128 339.2-12.8 12.8-32 12.8-44.8 0-12.8-12.8-12.8-32 0-44.8C921.6 729.6 960 620.8 960 512c0-249.6-198.4-448-448-448S64 262.4 64 512s198.4 448 448 448c76.8 0 153.6-19.2 217.6-57.6 12.8-6.4 32 0 44.8 12.8 6.4 12.8 0 32-12.8 44.8C684.8 1004.8 601.6 1024 512 1024z"  ></path></symbol><symbol id="icon-bofangsanjiaoxing" viewBox="0 0 1024 1024"><path d="M803.84 492.032 213.056 135.04C195.392 124.288 174.208 124.288 156.352 134.976 138.624 145.728 128 164.928 128 186.368l0 714.176c0 21.44 10.624 40.704 28.352 51.392C165.248 957.312 174.976 960 184.704 960c9.728 0 19.52-2.688 28.352-8.064l590.72-356.992c17.728-10.752 28.288-30.016 28.288-51.456C832.128 521.984 821.568 502.72 803.84 492.032zM189.568 891.712 187.136 193.792l578.624 349.696L189.568 891.712z"  ></path></symbol><symbol id="icon-zanting" viewBox="0 0 1024 1024"><path d="M288 128C270.336 128 256 142.336 256 160l0 768C256 945.664 270.336 960 288 960S320 945.664 320 928l0-768C320 142.336 305.664 128 288 128zM672 128C654.336 128 640 142.336 640 160l0 768c0 17.664 14.336 32 32 32s32-14.336 32-32l0-768C704 142.336 689.664 128 672 128z"  ></path></symbol><symbol id="icon-zhiding" viewBox="0 0 1024 1024"><path d="M128 128l768 0 0 89.6-768 0 0-89.6ZM732.288 496 555.7888 309.8624c-10.9504-11.2064-26.4128-18.4896-43.7888-18.4896s-32.832 7.2832-43.6032 18.6048L291.5264 495.8656c-9.2288 10.0224-15.1104 22.9696-15.1104 37.3248 0 30.816 26.3808 55.8016 58.8992 55.8016 0.4544 0 0.896-0.0576 1.344-0.0704l0 0.352L416 589.2736 416 896l192 0L608 589.2736l77.1904 0 0-0.448c1.1648 0.064 2.3104 0.1792 3.5008 0.1792 32.5248 0 58.8992-24.992 58.8992-55.8144C747.5904 518.8352 741.7024 505.8944 732.288 496z"  ></path></symbol><symbol id="icon-gerenzhongxin" viewBox="0 0 1024 1024"><path d="M512 62.784c-123.712 0-224 100.288-224 224s100.288 224 224 224c123.712 0 224-100.288 224-224S635.712 62.784 512 62.784zM512 446.784c-88.352 0-160-71.648-160-160s71.648-160 160-160c88.352 0 160 71.648 160 160S600.384 446.784 512 446.784zM959.328 864.992C942.208 633.184 748.16 449.344 512 449.344c-246.528 0-446.4 199.136-447.872 445.344C64.128 895.104 64 895.552 64 896c0 0.16 0.032 0.288 0.032 0.448C64.032 896.736 64 897.024 64 897.344l0.16 0.128C64.96 932.128 93.152 960 128 960c1.184 0 2.304-0.288 3.488-0.352L131.872 960l1.696 0 668.992 0c18.048 0 32.672-14.336 32.672-32s-14.624-32-32.672-32l-643.2 0C128 896 119.328 897.344 133.92 832.608c30.816-181.184 188.128-319.264 378.08-319.264 200.832 0 365.376 154.24 382.304 350.656l-0.192 0c0.896 10.24 1.696 20.544 1.76 31.008L896 895.008l0 35.2 0.448 0C897.632 946.784 911.104 960 928 960s30.368-13.216 31.552-29.792L960 930.208l-0.832-65.184"  ></path></symbol></svg>';
    var script = function () {
        var scripts = document.getElementsByTagName("script");
        return scripts[scripts.length - 1]
    }();
    var shouldInjectCss = script.getAttribute("data-injectcss");
    var ready = function (fn) {
        if (document.addEventListener) {
            if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
                setTimeout(fn, 0)
            } else {
                var loadFn = function () {
                    document.removeEventListener("DOMContentLoaded", loadFn, false);
                    fn()
                };
                document.addEventListener("DOMContentLoaded", loadFn, false)
            }
        } else if (document.attachEvent) {
            IEContentLoaded(window, fn)
        }

        function IEContentLoaded(w, fn) {
            var d = w.document, done = false, init = function () {
                if (!done) {
                    done = true;
                    fn()
                }
            };
            var polling = function () {
                try {
                    d.documentElement.doScroll("left")
                } catch (e) {
                    setTimeout(polling, 50);
                    return
                }
                init()
            };
            polling();
            d.onreadystatechange = function () {
                if (d.readyState == "complete") {
                    d.onreadystatechange = null;
                    init()
                }
            }
        }
    };
    var before = function (el, target) {
        target.parentNode.insertBefore(el, target)
    };
    var prepend = function (el, target) {
        if (target.firstChild) {
            before(el, target.firstChild)
        } else {
            target.appendChild(el)
        }
    };

    function appendSvg() {
        var div, svg;
        div = document.createElement("div");
        div.innerHTML = svgSprite;
        svgSprite = null;
        svg = div.getElementsByTagName("svg")[0];
        if (svg) {
            svg.setAttribute("aria-hidden", "true");
            svg.style.position = "absolute";
            svg.style.width = 0;
            svg.style.height = 0;
            svg.style.overflow = "hidden";
            prepend(svg, document.body)
        }
    }

    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
        window.__iconfont__svg__cssinject__ = true;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }
    ready(appendSvg)
})(window)