/*! For license information please see main.min.js.LICENSE.txt */
(() => {
    var e = {
            288: () => {
                window.addEventListener("scroll", (() => {
                    let e = window.scrollY;
                    window.innerWidth > 768 && document.querySelectorAll("[data-section]").forEach(((t, n) => {
                        t.offsetTop - document.querySelector(".menu").clientHeight <= e && (document.querySelectorAll(".menu a").forEach((e => {
                            e.classList.contains("active") && e.classList.remove("active")
                        })), document.querySelectorAll(".menu li")[n].querySelector("a").classList.add("active"))
                    }))
                }))
            },
            425: () => {
                function e(e) {
                    var t = !0,
                        n = !1,
                        s = null,
                        i = {
                            text: !0,
                            search: !0,
                            url: !0,
                            tel: !0,
                            email: !0,
                            password: !0,
                            number: !0,
                            date: !0,
                            month: !0,
                            week: !0,
                            time: !0,
                            datetime: !0,
                            "datetime-local": !0
                        };

                    function r(e) {
                        return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList)
                    }

                    function o(e) {
                        e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""))
                    }

                    function a(e) {
                        t = !1
                    }

                    function l() {
                        document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c)
                    }

                    function c(e) {
                        e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c))
                    }
                    document.addEventListener("keydown", (function(n) {
                        n.metaKey || n.altKey || n.ctrlKey || (r(e.activeElement) && o(e.activeElement), t = !0)
                    }), !0), document.addEventListener("mousedown", a, !0), document.addEventListener("pointerdown", a, !0), document.addEventListener("touchstart", a, !0), document.addEventListener("visibilitychange", (function(e) {
                        "hidden" === document.visibilityState && (n && (t = !0), l())
                    }), !0), l(), e.addEventListener("focus", (function(e) {
                        var n, s, a;
                        r(e.target) && (t || (s = (n = e.target).type, "INPUT" === (a = n.tagName) && i[s] && !n.readOnly || "TEXTAREA" === a && !n.readOnly || n.isContentEditable)) && o(e.target)
                    }), !0), e.addEventListener("blur", (function(e) {
                        var t;
                        r(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (n = !0, window.clearTimeout(s), s = window.setTimeout((function() {
                            n = !1
                        }), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")))
                    }), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""))
                }
                if ("undefined" != typeof window && "undefined" != typeof document) {
                    var t;
                    window.applyFocusVisiblePolyfill = e;
                    try {
                        t = new CustomEvent("focus-visible-polyfill-ready")
                    } catch (e) {
                        (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
                    }
                    window.dispatchEvent(t)
                }
                "undefined" != typeof document && e(document)
            },
            353: () => {
                ! function() {
                    var e, t, n, s, i;
                    const r = null === (e = document) || void 0 === e ? void 0 : e.querySelector("[data-burger]"),
                        o = null === (t = document) || void 0 === t ? void 0 : t.querySelector("[data-menu]"),
                        a = null === (n = document) || void 0 === n ? void 0 : n.querySelector(".menu-overlay"),
                        l = null === (s = document) || void 0 === s ? void 0 : s.querySelector("body"),
                        c = null === (i = document) || void 0 === i ? void 0 : i.querySelectorAll("[data-menu-item]");
                    null == r || r.addEventListener("click", (e => {
                        null == r || r.classList.toggle("burger--active"), null == o || o.classList.toggle("menu--active"), null == l || l.classList.toggle("locked")
                    })), null == a || a.addEventListener("click", (e => {
                        r.classList.remove("burger--active"), o.classList.remove("menu--active"), null == l || l.classList.remove("locked")
                    })), null == c || c.forEach((e => {
                        e.addEventListener("click", (() => {
                            r.classList.remove("burger--active"), o.classList.remove("menu--active"), null == l || l.classList.remove("locked")
                        }))
                    }))
                }()
            },
            494: () => {
                const e = document.querySelector(".header"),
                    t = document.querySelector(".hero");
                e.offsetHeight, t.offsetHeight;
                let n = 0;
                window.addEventListener("scroll", (() => {
                    let t = window.scrollY;
                    t > 0 ? e.classList.add("header--fixed") : e.classList.remove("header--fixed"), n = t
                }))
            },
            213: e => {
                window,
                e.exports = function(e) {
                    var t = {};

                    function n(s) {
                        if (t[s]) return t[s].exports;
                        var i = t[s] = {
                            i: s,
                            l: !1,
                            exports: {}
                        };
                        return e[s].call(i.exports, i, i.exports, n), i.l = !0, i.exports
                    }
                    return n.m = e, n.c = t, n.d = function(e, t, s) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: s
                        })
                    }, n.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, n.t = function(e, t) {
                        if (1 & t && (e = n(e)), 8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var s = Object.create(null);
                        if (n.r(s), Object.defineProperty(s, "default", {
                                enumerable: !0,
                                value: e
                            }), 2 & t && "string" != typeof e)
                            for (var i in e) n.d(s, i, function(t) {
                                return e[t]
                            }.bind(null, i));
                        return s
                    }, n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return n.d(t, "a", t), t
                    }, n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, n.p = "", n(n.s = 0)
                }([function(e, t, n) {
                    "use strict";
                    n.r(t);
                    var s, i = "fslightbox-",
                        r = "".concat(i, "styles"),
                        o = "".concat(i, "cursor-grabbing"),
                        a = "".concat(i, "full-dimension"),
                        l = "".concat(i, "flex-centered"),
                        c = "".concat(i, "open"),
                        d = "".concat(i, "transform-transition"),
                        u = "".concat(i, "absoluted"),
                        p = "".concat(i, "slide-btn"),
                        h = "".concat(p, "-container"),
                        f = "".concat(i, "fade-in"),
                        m = "".concat(i, "fade-out"),
                        g = f + "-strong",
                        v = m + "-strong",
                        b = "".concat(i, "opacity-"),
                        w = "".concat(b, "1"),
                        x = "".concat(i, "source");

                    function y(e) {
                        return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function S(e) {
                        var t, n = e.props,
                            s = 0,
                            i = {};
                        this.getSourceTypeFromLocalStorageByUrl = function(e) {
                            return t[e] ? t[e] : r(e)
                        }, this.handleReceivedSourceTypeForUrl = function(e, n) {
                            !1 === i[n] && (s--, "invalid" !== e ? i[n] = e : delete i[n], 0 === s && (function(e, t) {
                                for (var n in t) e[n] = t[n]
                            }(t, i), localStorage.setItem("fslightbox-types", JSON.stringify(t))))
                        };
                        var r = function(e) {
                            s++, i[e] = !1
                        };
                        n.disableLocalStorage ? (this.getSourceTypeFromLocalStorageByUrl = function() {}, this.handleReceivedSourceTypeForUrl = function() {}) : (t = JSON.parse(localStorage.getItem("fslightbox-types"))) || (t = {}, this.getSourceTypeFromLocalStorageByUrl = r)
                    }

                    function C(e, t, n, s) {
                        var i = e.data,
                            r = e.elements.sources,
                            o = n / s,
                            a = 0;
                        this.adjustSize = function() {
                            if ((a = i.maxSourceWidth / o) < i.maxSourceHeight) return n < i.maxSourceWidth && (a = s), l();
                            a = s > i.maxSourceHeight ? i.maxSourceHeight : s, l()
                        };
                        var l = function() {
                            r[t].style.width = a * o + "px", r[t].style.height = a + "px"
                        }
                    }

                    function E(e, t) {
                        var n = this,
                            s = e.collections.sourceSizers,
                            i = e.elements,
                            r = i.sourceAnimationWrappers,
                            o = i.sourceMainWrappers,
                            a = i.sources,
                            l = e.resolve;

                        function c(e, n) {
                            s[t] = l(C, [t, e, n]), s[t].adjustSize()
                        }
                        this.runActions = function(e, s) {
                            a[t].classList.add(w), r[t].classList.add(g), o[t].removeChild(o[t].firstChild), c(e, s), n.runActions = c
                        }
                    }

                    function T(e, t) {
                        var n, s = this,
                            i = e.elements.sources,
                            r = e.props,
                            o = (0, e.resolve)(E, [t]);
                        this.handleImageLoad = function(e) {
                            var t = e.target,
                                n = t.naturalWidth,
                                s = t.naturalHeight;
                            o.runActions(n, s)
                        }, this.handleVideoLoad = function(e) {
                            var t = e.target,
                                s = t.videoWidth,
                                i = t.videoHeight;
                            n = !0, o.runActions(s, i)
                        }, this.handleNotMetaDatedVideoLoad = function() {
                            n || s.handleYoutubeLoad()
                        }, this.handleYoutubeLoad = function() {
                            var e = 1920,
                                t = 1080;
                            r.maxYoutubeDimensions && (e = r.maxYoutubeDimensions.width, t = r.maxYoutubeDimensions.height), o.runActions(e, t)
                        }, this.handleCustomLoad = function() {
                            setTimeout((function() {
                                var e = i[t];
                                o.runActions(e.offsetWidth, e.offsetHeight)
                            }))
                        }
                    }

                    function L(e, t, n) {
                        var s = e.elements.sources,
                            i = e.props.customClasses,
                            r = i[t] ? i[t] : "";
                        s[t].className = n + " " + r
                    }

                    function M(e, t) {
                        var n = e.elements.sources,
                            s = e.props.customAttributes;
                        for (var i in s[t]) n[t].setAttribute(i, s[t][i])
                    }

                    function k(e, t) {
                        var n = e.collections.sourceLoadHandlers,
                            s = e.elements,
                            i = s.sources,
                            r = s.sourceAnimationWrappers,
                            o = e.props.sources;
                        i[t] = document.createElement("img"), L(e, t, x), i[t].src = o[t], i[t].onload = n[t].handleImageLoad, M(e, t), r[t].appendChild(i[t])
                    }

                    function A(e, t) {
                        var n = e.collections.sourceLoadHandlers,
                            s = e.elements,
                            i = s.sources,
                            r = s.sourceAnimationWrappers,
                            o = e.props,
                            a = o.sources,
                            l = o.videosPosters;
                        i[t] = document.createElement("video"), L(e, t, x), i[t].src = a[t], i[t].onloadedmetadata = function(e) {
                            n[t].handleVideoLoad(e)
                        }, i[t].controls = !0, M(e, t), l[t] && (i[t].poster = l[t]);
                        var c = document.createElement("source");
                        c.src = a[t], i[t].appendChild(c), setTimeout(n[t].handleNotMetaDatedVideoLoad, 3e3), r[t].appendChild(i[t])
                    }

                    function P(e, t) {
                        var n = e.collections.sourceLoadHandlers,
                            s = e.elements,
                            r = s.sources,
                            o = s.sourceAnimationWrappers,
                            a = e.props.sources;
                        r[t] = document.createElement("iframe"), L(e, t, "".concat(x, " ").concat(i, "youtube-iframe")), r[t].src = "https://www.youtube.com/embed/".concat(a[t].match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?enablejsapi=1"), r[t].allowFullscreen = !0, M(e, t), o[t].appendChild(r[t]), n[t].handleYoutubeLoad()
                    }

                    function O(e, t) {
                        var n = e.collections.sourceLoadHandlers,
                            s = e.elements,
                            i = s.sources,
                            r = s.sourceAnimationWrappers,
                            o = e.props.sources;
                        i[t] = o[t], L(e, t, "".concat(i[t].className, " ").concat(x)), r[t].appendChild(i[t]), n[t].handleCustomLoad()
                    }

                    function I(e, t) {
                        var n = e.elements,
                            s = n.sources,
                            r = n.sourceAnimationWrappers,
                            o = n.sourceMainWrappers;
                        e.props.sources, s[t] = document.createElement("div"), s[t].className = "".concat(i, "invalid-file-wrapper ").concat(l), s[t].innerHTML = "Invalid source", r[t].classList.add(g), r[t].appendChild(s[t]), o[t].removeChild(o[t].firstChild)
                    }

                    function $(e) {
                        var t = e.collections,
                            n = t.sourceLoadHandlers,
                            s = t.sourcesRenderFunctions,
                            i = e.core.sourceDisplayFacade,
                            r = e.resolve;
                        this.runActionsForSourceTypeAndIndex = function(t, o) {
                            var a;
                            switch ("invalid" !== t && (n[o] = r(T, [o])), t) {
                                case "image":
                                    a = k;
                                    break;
                                case "video":
                                    a = A;
                                    break;
                                case "youtube":
                                    a = P;
                                    break;
                                case "custom":
                                    a = O;
                                    break;
                                default:
                                    a = I
                            }
                            s[o] = function() {
                                return a(e, o)
                            }, i.displaySourcesWhichShouldBeDisplayed()
                        }
                    }

                    function z() {
                        var e, t, n, s = function(e) {
                                var t = document.createElement("a");
                                return t.href = e, "www.youtube.com" === t.hostname
                            },
                            i = function(e) {
                                return e.slice(0, e.indexOf("/"))
                            };

                        function r() {
                            if (4 !== n.readyState) {
                                if (2 === n.readyState) {
                                    var e;
                                    switch (i(n.getResponseHeader("content-type"))) {
                                        case "image":
                                            e = "image";
                                            break;
                                        case "video":
                                            e = "video";
                                            break;
                                        default:
                                            e = "invalid"
                                    }
                                    n.onreadystatechange = null, n.abort(), t(e)
                                }
                            } else t("invalid")
                        }
                        this.setUrlToCheck = function(t) {
                            e = t
                        }, this.getSourceType = function(i) {
                            if (s(e)) return i("youtube");
                            t = i, (n = new XMLHttpRequest).onreadystatechange = r, n.open("GET", e, !0), n.send()
                        }
                    }

                    function F(e, t, n) {
                        var s = e.props,
                            i = s.types,
                            r = s.type,
                            o = s.sources,
                            a = e.resolve;
                        this.getTypeSetByClientForIndex = function(e) {
                            var t;
                            return i && i[e] ? t = i[e] : r && (t = r), t
                        }, this.retrieveTypeWithXhrForIndex = function(e) {
                            var s = a(z);
                            s.setUrlToCheck(o[e]), s.getSourceType((function(s) {
                                t.handleReceivedSourceTypeForUrl(s, o[e]), n.runActionsForSourceTypeAndIndex(s, e)
                            }))
                        }
                    }

                    function N(e, t) {
                        var n = e.componentsServices.hideSourceLoaderIfNotYetCollection,
                            s = e.elements,
                            i = s.sourceWrappersContainer,
                            r = s.sourceMainWrappers;
                        r[t] = document.createElement("div"), r[t].className = "".concat(u, " ").concat(a, " ").concat(l), r[t].innerHTML = '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>';
                        var o = r[t].firstChild;
                        n[t] = function() {
                                r[t].contains(o) && r[t].removeChild(o)
                            }, i.appendChild(r[t]),
                            function(e, t) {
                                var n = e.elements,
                                    s = n.sourceMainWrappers,
                                    i = n.sourceAnimationWrappers;
                                i[t] = document.createElement("div"), s[t].appendChild(i[t])
                            }(e, t)
                    }

                    function D(e, t, n, s) {
                        var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        r.setAttributeNS(null, "width", t), r.setAttributeNS(null, "height", t), r.setAttributeNS(null, "viewBox", n);
                        var o = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        return o.setAttributeNS(null, "class", "".concat(i, "svg-path")), o.setAttributeNS(null, "d", s), r.appendChild(o), e.appendChild(r), r
                    }

                    function H(e, t) {
                        var n = document.createElement("div");
                        return n.className = "".concat(i, "toolbar-button ").concat(l), n.title = t, e.appendChild(n), n
                    }

                    function B(e) {
                        var t = e.props.sources,
                            n = e.elements.container,
                            s = document.createElement("div");
                        s.className = "".concat(i, "nav"), n.appendChild(s),
                            function(e, t) {
                                var n = document.createElement("div");
                                n.className = "".concat(i, "toolbar"), t.appendChild(n),
                                    function(e, t) {
                                        var n = e.componentsServices,
                                            s = e.core.fullscreenToggler,
                                            i = e.data,
                                            r = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
                                            o = H(t);
                                        o.title = "Enter fullscreen";
                                        var a = D(o, "20px", "0 0 18 18", r);
                                        n.enterFullscreen = function() {
                                            i.isFullscreenOpen = !0, o.title = "Exit fullscreen", a.setAttributeNS(null, "width", "24px"), a.setAttributeNS(null, "height", "24px"), a.setAttributeNS(null, "viewBox", "0 0 950 1024"), a.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z")
                                        }, n.exitFullscreen = function() {
                                            i.isFullscreenOpen = !1, o.title = "Enter fullscreen", a.setAttributeNS(null, "width", "20px"), a.setAttributeNS(null, "height", "20px"), a.setAttributeNS(null, "viewBox", "0 0 18 18"), a.firstChild.setAttributeNS(null, "d", r)
                                        }, o.onclick = function() {
                                            i.isFullscreenOpen ? s.exitFullscreen() : s.enterFullscreen()
                                        }
                                    }(e, n),
                                    function(e, t) {
                                        var n = H(t, "Close");
                                        n.onclick = e.core.lightboxCloser.closeLightbox, D(n, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z")
                                    }(e, n)
                            }(e, s), t.length > 1 && function(e, t) {
                                var n = e.componentsServices,
                                    s = e.props.sources,
                                    r = (e.stageIndexes, document.createElement("div"));
                                r.className = "".concat(i, "slide-number-container");
                                var o = document.createElement("div");
                                o.className = l;
                                var a = document.createElement("span");
                                n.setSlideNumber = function(e) {
                                    return a.innerHTML = e
                                };
                                var c = document.createElement("span");
                                c.className = "".concat(i, "slash");
                                var d = document.createElement("div");
                                d.innerHTML = s.length, r.appendChild(o), o.appendChild(a), o.appendChild(c), o.appendChild(d), t.appendChild(r), setTimeout((function() {
                                    o.offsetWidth > 55 && (r.style.justifyContent = "flex-start")
                                }))
                            }(e, s)
                    }

                    function W(e, t) {
                        var n = this,
                            s = e.elements.sourceMainWrappers,
                            i = e.props,
                            r = 0;
                        this.byValue = function(e) {
                            return r = e, n
                        }, this.negative = function() {
                            o(-a())
                        }, this.zero = function() {
                            o(0)
                        }, this.positive = function() {
                            o(a())
                        };
                        var o = function(e) {
                                s[t].style.transform = "translateX(".concat(e + r, "px)"), r = 0
                            },
                            a = function() {
                                return (1 + i.slideDistance) * innerWidth
                            }
                    }

                    function _(e, t, n, s) {
                        var i = e.elements.container,
                            r = n.charAt(0).toUpperCase() + n.slice(1),
                            o = document.createElement("div");
                        o.className = "".concat(h, " ").concat(h, "-").concat(n), o.title = "".concat(r, " slide"), o.onclick = t,
                            function(e, t) {
                                var n = document.createElement("div");
                                n.className = "".concat(p, " ").concat(l), D(n, "20px", "0 0 20 20", t), e.appendChild(n)
                            }(o, s), i.appendChild(o)
                    }

                    function G(e, t) {
                        var n = e.classList;
                        n.contains(t) && n.remove(t)
                    }

                    function j(e) {
                        var t = this,
                            n = e.core,
                            s = n.eventsDispatcher,
                            i = n.fullscreenToggler,
                            r = n.globalEventsController,
                            o = n.scrollbarRecompensor,
                            a = e.data,
                            l = e.elements,
                            d = e.props,
                            u = e.sourcePointerProps;
                        this.isLightboxFadingOut = !1, this.runActions = function() {
                            t.isLightboxFadingOut = !0, l.container.classList.add(v), r.removeListeners(), d.exitFullscreenOnClose && a.isFullscreenOpen && i.exitFullscreen(), setTimeout((function() {
                                t.isLightboxFadingOut = !1, u.isPointering = !1, l.container.classList.remove(v), document.documentElement.classList.remove(c), o.removeRecompense(), document.body.removeChild(l.container), s.dispatch("onClose")
                            }), 270)
                        }
                    }

                    function R(e) {
                        var t = e.core,
                            n = t.lightboxCloser,
                            s = t.fullscreenToggler,
                            i = t.slideChangeFacade;
                        this.listener = function(e) {
                            switch (e.key) {
                                case "Escape":
                                    n.closeLightbox();
                                    break;
                                case "ArrowLeft":
                                    i.changeToPrevious();
                                    break;
                                case "ArrowRight":
                                    i.changeToNext();
                                    break;
                                case "F11":
                                    e.preventDefault(), s.enterFullscreen()
                            }
                        }
                    }

                    function q(e) {
                        var t = e.collections.sourceMainWrappersTransformers,
                            n = e.elements,
                            s = e.sourcePointerProps,
                            i = e.stageIndexes;

                        function r(e, n) {
                            t[e].byValue(s.swipedX)[n]()
                        }
                        this.runActionsForEvent = function(e) {
                            var t, a, l;
                            n.container.contains(n.slideSwipingHoverer) || n.container.appendChild(n.slideSwipingHoverer), t = n.container, a = o, (l = t.classList).contains(a) || l.add(a), s.swipedX = e.screenX - s.downScreenX, r(i.current, "zero"), void 0 !== i.previous && s.swipedX > 0 ? r(i.previous, "negative") : void 0 !== i.next && s.swipedX < 0 && r(i.next, "positive")
                        }
                    }

                    function V(e) {
                        var t = e.props.sources,
                            n = e.resolve,
                            s = e.sourcePointerProps,
                            i = n(q);
                        1 === t.length ? this.listener = function() {
                            s.swipedX = 1
                        } : this.listener = function(e) {
                            s.isPointering && i.runActionsForEvent(e)
                        }
                    }

                    function X(e) {
                        var t = e.collections.sourceMainWrappersTransformers,
                            n = e.core.slideIndexChanger,
                            s = e.elements.sourceMainWrappers,
                            i = e.stageIndexes;
                        this.runPositiveSwipedXActions = function() {
                            void 0 === i.previous || (r("positive"), n.changeTo(i.previous)), r("zero")
                        }, this.runNegativeSwipedXActions = function() {
                            void 0 === i.next || (r("negative"), n.changeTo(i.next)), r("zero")
                        };
                        var r = function(e) {
                            s[i.current].classList.add(d), t[i.current][e]()
                        }
                    }

                    function Y(e, t) {
                        e.contains(t) && e.removeChild(t)
                    }

                    function U(e) {
                        var t = e.core.lightboxCloser,
                            n = e.elements,
                            s = e.resolve,
                            i = e.sourcePointerProps,
                            r = s(X);
                        this.runNoSwipeActions = function() {
                            Y(n.container, n.slideSwipingHoverer), i.isSourceDownEventTarget || t.closeLightbox(), i.isPointering = !1
                        }, this.runActions = function() {
                            i.swipedX > 0 ? r.runPositiveSwipedXActions() : r.runNegativeSwipedXActions(), Y(n.container, n.slideSwipingHoverer), n.container.classList.remove(o), i.isPointering = !1
                        }
                    }

                    function K(e) {
                        var t = e.resolve,
                            n = e.sourcePointerProps,
                            s = t(U);
                        this.listener = function() {
                            n.isPointering && (n.swipedX ? s.runActions() : s.runNoSwipeActions())
                        }
                    }

                    function Q(e) {
                        var t, n, s;
                        n = (t = e).core.classFacade, s = t.elements, n.removeFromEachElementClassIfContains = function(e, t) {
                                for (var n = 0; n < s[e].length; n++) G(s[e][n], t)
                            },
                            function(e) {
                                var t = e.core.eventsDispatcher,
                                    n = e.props;
                                t.dispatch = function(e) {
                                    n[e] && n[e]()
                                }
                            }(e),
                            function(e) {
                                var t = e.componentsServices,
                                    n = e.core.fullscreenToggler;
                                n.enterFullscreen = function() {
                                    t.enterFullscreen();
                                    var e = document.documentElement;
                                    e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
                                }, n.exitFullscreen = function() {
                                    t.exitFullscreen(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
                                }
                            }(e),
                            function(e) {
                                var t = e.core,
                                    n = t.globalEventsController,
                                    s = t.windowResizeActioner,
                                    i = e.resolve,
                                    r = i(R),
                                    o = i(V),
                                    a = i(K);
                                n.attachListeners = function() {
                                    document.addEventListener("pointermove", o.listener), document.addEventListener("pointerup", a.listener), addEventListener("resize", s.runActions), document.addEventListener("keydown", r.listener)
                                }, n.removeListeners = function() {
                                    document.removeEventListener("pointermove", o.listener), document.removeEventListener("pointerup", a.listener), removeEventListener("resize", s.runActions), document.removeEventListener("keydown", r.listener)
                                }
                            }(e),
                            function(e) {
                                var t = e.core.lightboxCloser,
                                    n = (0, e.resolve)(j);
                                t.closeLightbox = function() {
                                    n.isLightboxFadingOut || n.runActions()
                                }
                            }(e), Z(e),
                            function(e) {
                                var t = e.data,
                                    n = e.core.scrollbarRecompensor;

                                function s() {
                                    document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t.scrollbarWidth + "px")
                                }
                                n.addRecompense = function() {
                                    "complete" === document.readyState ? s() : addEventListener("load", (function() {
                                        s(), n.addRecompense = s
                                    }))
                                }, n.removeRecompense = function() {
                                    document.body.style.removeProperty("margin-right")
                                }
                            }(e),
                            function(e) {
                                var t = e.core,
                                    n = t.slideChangeFacade,
                                    s = t.slideIndexChanger,
                                    i = t.stageManager;
                                e.props.sources.length > 1 ? (n.changeToPrevious = function() {
                                    s.jumpTo(i.getPreviousSlideIndex())
                                }, n.changeToNext = function() {
                                    s.jumpTo(i.getNextSlideIndex())
                                }) : (n.changeToPrevious = function() {}, n.changeToNext = function() {})
                            }(e),
                            function(e) {
                                var t, n, s = e.collections.sourceMainWrappersTransformers,
                                    i = e.componentsServices,
                                    r = e.core,
                                    o = r.classFacade,
                                    a = r.slideIndexChanger,
                                    l = r.sourceDisplayFacade,
                                    c = r.stageManager,
                                    u = e.elements.sourceAnimationWrappers,
                                    p = e.stageIndexes,
                                    h = (t = function() {
                                        o.removeFromEachElementClassIfContains("sourceAnimationWrappers", m)
                                    }, n = [], function() {
                                        n.push(!0), setTimeout((function() {
                                            n.pop(), n.length || t()
                                        }), 300)
                                    });
                                a.changeTo = function(e) {
                                    p.current = e, c.updateStageIndexes(), i.setSlideNumber(e + 1), l.displaySourcesWhichShouldBeDisplayed()
                                }, a.jumpTo = function(e) {
                                    var t = p.current;
                                    a.changeTo(e), o.removeFromEachElementClassIfContains("sourceMainWrappers", d), G(u[t], g), G(u[t], f), u[t].classList.add(m), G(u[e], g), G(u[e], m), u[e].classList.add(f), h(), s[e].zero(), setTimeout((function() {
                                        t !== p.current && s[t].negative()
                                    }), 270)
                                }
                            }(e),
                            function(e) {
                                var t = e.core,
                                    n = t.classFacade,
                                    s = t.sourcesPointerDown,
                                    i = e.elements.sources,
                                    r = e.sourcePointerProps,
                                    o = e.stageIndexes;
                                s.listener = function(e) {
                                    "VIDEO" !== e.target.tagName && e.preventDefault(), r.isPointering = !0, r.downScreenX = e.screenX, r.swipedX = 0;
                                    var t = i[o.current];
                                    t && t.contains(e.target) ? r.isSourceDownEventTarget = !0 : r.isSourceDownEventTarget = !1, n.removeFromEachElementClassIfContains("sourceMainWrappers", d)
                                }
                            }(e),
                            function(e) {
                                var t = e.collections.sourcesRenderFunctions,
                                    n = e.core.sourceDisplayFacade,
                                    s = e.props,
                                    i = e.stageIndexes;

                                function r(e) {
                                    t[e] && (t[e](), delete t[e])
                                }
                                n.displaySourcesWhichShouldBeDisplayed = function() {
                                    if (s.loadOnlyCurrentSource) r(i.current);
                                    else
                                        for (var e in i) r(i[e])
                                }
                            }(e),
                            function(e) {
                                var t = e.stageIndexes,
                                    n = e.core.stageManager,
                                    s = e.props.sources.length - 1;
                                n.getPreviousSlideIndex = function() {
                                    return 0 === t.current ? s : t.current - 1
                                }, n.getNextSlideIndex = function() {
                                    return t.current === s ? 0 : t.current + 1
                                }, n.updateStageIndexes = 0 === s ? function() {} : 1 === s ? function() {
                                    0 === t.current ? (t.next = 1, delete t.previous) : (t.previous = 0, delete t.next)
                                } : function() {
                                    t.previous = n.getPreviousSlideIndex(), t.next = n.getNextSlideIndex()
                                }, n.isSourceInStage = s <= 2 ? function() {
                                    return !0
                                } : function(e) {
                                    var n = t.current;
                                    if (0 === n && e === s || n === s && 0 === e) return !0;
                                    var i = n - e;
                                    return -1 === i || 0 === i || 1 === i
                                }
                            }(e),
                            function(e) {
                                var t = e.collections,
                                    n = t.sourceMainWrappersTransformers,
                                    s = t.sourceSizers,
                                    i = e.core.windowResizeActioner,
                                    r = e.data,
                                    o = e.elements.sourceMainWrappers,
                                    a = e.props,
                                    l = e.stageIndexes;
                                i.runActions = function() {
                                    innerWidth < 992 ? r.maxSourceWidth = innerWidth : r.maxSourceWidth = .9 * innerWidth, r.maxSourceHeight = .9 * innerHeight;
                                    for (var e = 0; e < a.sources.length; e++) G(o[e], d), e !== l.current && n[e].negative(), s[e] && s[e].adjustSize()
                                }
                            }(e)
                    }

                    function J(e) {
                        var t = e.core.eventsDispatcher,
                            n = e.data,
                            s = e.elements,
                            r = e.props.sources;
                        n.isInitialized = !0, n.scrollbarWidth = function(e) {
                                var t = e.props.disableLocalStorage;
                                if (!t) {
                                    var n = localStorage.getItem("fslightbox-scrollbar-width");
                                    if (n) return n
                                }
                                var s = function() {
                                        var e = document.createElement("div"),
                                            t = e.style;
                                        return t.visibility = "hidden", t.width = "100px", t.msOverflowStyle = "scrollbar", t.overflow = "scroll", e
                                    }(),
                                    i = function() {
                                        var e = document.createElement("div");
                                        return e.style.width = "100%", e
                                    }();
                                document.body.appendChild(s);
                                var r = s.offsetWidth;
                                s.appendChild(i);
                                var o = i.offsetWidth;
                                document.body.removeChild(s);
                                var a = r - o;
                                return t || localStorage.setItem("fslightbox-scrollbar-width", a.toString()), a
                            }(e),
                            function(e) {
                                for (var t = e.collections.sourceMainWrappersTransformers, n = e.props.sources, s = e.resolve, i = 0; i < n.length; i++) t[i] = s(W, [i])
                            }(e), Q(e), s.container = document.createElement("div"), s.container.className = "".concat(i, "container ").concat(a, " ").concat(g),
                            function(e) {
                                var t = e.elements;
                                t.slideSwipingHoverer = document.createElement("div"), t.slideSwipingHoverer.className = "".concat(i, "slide-swiping-hoverer ").concat(a, " ").concat(u)
                            }(e), B(e),
                            function(e) {
                                var t = e.core.sourcesPointerDown,
                                    n = e.elements,
                                    s = e.props.sources,
                                    i = document.createElement("div");
                                i.className = "".concat(u, " ").concat(a), n.container.appendChild(i), i.addEventListener("pointerdown", t.listener), n.sourceWrappersContainer = i;
                                for (var r = 0; r < s.length; r++) N(e, r)
                            }(e), r.length > 1 && function(e) {
                                var t = e.core.slideChangeFacade;
                                _(e, t.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"), _(e, t.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")
                            }(e),
                            function(e) {
                                for (var t = e.props.sources, n = e.resolve, s = n(S), i = n($), r = n(F, [s, i]), o = 0; o < t.length; o++)
                                    if ("string" == typeof t[o]) {
                                        var a = r.getTypeSetByClientForIndex(o);
                                        if (a) i.runActionsForSourceTypeAndIndex(a, o);
                                        else {
                                            var l = s.getSourceTypeFromLocalStorageByUrl(t[o]);
                                            l ? i.runActionsForSourceTypeAndIndex(l, o) : r.retrieveTypeWithXhrForIndex(o)
                                        }
                                    } else i.runActionsForSourceTypeAndIndex("custom", o)
                            }(e), t.dispatch("onInit")
                    }

                    function Z(e) {
                        var t = e.collections.sourceMainWrappersTransformers,
                            n = e.componentsServices,
                            s = e.core,
                            i = s.eventsDispatcher,
                            r = s.lightboxOpener,
                            o = s.globalEventsController,
                            a = s.scrollbarRecompensor,
                            l = s.sourceDisplayFacade,
                            d = s.stageManager,
                            u = s.windowResizeActioner,
                            p = e.data,
                            h = e.elements,
                            f = e.stageIndexes;
                        r.open = function() {
                            var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            f.current = s, p.isInitialized ? i.dispatch("onShow") : J(e), d.updateStageIndexes(), l.displaySourcesWhichShouldBeDisplayed(), n.setSlideNumber(s + 1), document.body.appendChild(h.container), document.documentElement.classList.add(c), a.addRecompense(), o.attachListeners(), u.runActions(), t[f.current].zero(), i.dispatch("onOpen")
                        }
                    }

                    function ee(e, t, n) {
                        return (ee = te() ? Reflect.construct : function(e, t, n) {
                            var s = [null];
                            s.push.apply(s, t);
                            var i = new(Function.bind.apply(e, s));
                            return n && ne(i, n.prototype), i
                        }).apply(null, arguments)
                    }

                    function te() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }

                    function ne(e, t) {
                        return (ne = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t, e
                        })(e, t)
                    }

                    function se(e) {
                        return function(e) {
                            if (Array.isArray(e)) return ie(e)
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                        }(e) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return ie(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ie(e, t) : void 0
                            }
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function ie(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, s = new Array(t); n < t; n++) s[n] = e[n];
                        return s
                    }

                    function re() {
                        for (var e = document.getElementsByTagName("a"), t = function(t) {
                                if (!e[t].hasAttribute("data-fslightbox")) return "continue";
                                var n = e[t].getAttribute("data-fslightbox"),
                                    s = e[t].getAttribute("href");
                                fsLightboxInstances[n] || (fsLightboxInstances[n] = new FsLightbox);
                                var i = null;
                                "#" === s.charAt(0) ? (i = document.getElementById(s.substring(1)).cloneNode(!0)).removeAttribute("id") : i = s, fsLightboxInstances[n].props.sources.push(i), fsLightboxInstances[n].elements.a.push(e[t]);
                                var r = fsLightboxInstances[n].props.sources.length - 1;
                                e[t].onclick = function(e) {
                                    e.preventDefault(), fsLightboxInstances[n].open(r)
                                }, u("types", "data-type"), u("videosPosters", "data-video-poster"), u("customClasses", "data-class"), u("customClasses", "data-custom-class");
                                for (var o = ["href", "data-fslightbox", "data-type", "data-video-poster", "data-class", "data-custom-class"], a = e[t].attributes, l = fsLightboxInstances[n].props.customAttributes, c = 0; c < a.length; c++)
                                    if (-1 === o.indexOf(a[c].name) && "data-" === a[c].name.substr(0, 5)) {
                                        l[r] || (l[r] = {});
                                        var d = a[c].name.substr(5);
                                        l[r][d] = a[c].value
                                    }
                                function u(s, i) {
                                    e[t].hasAttribute(i) && (fsLightboxInstances[n].props[s][r] = e[t].getAttribute(i))
                                }
                            }, n = 0; n < e.length; n++) t(n);
                        var s = Object.keys(fsLightboxInstances);
                        window.fsLightbox = fsLightboxInstances[s[s.length - 1]]
                    }
                    "object" === ("undefined" == typeof document ? "undefined" : y(document)) && ((s = document.createElement("style")).className = r, s.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")), document.head.appendChild(s)), window.FsLightbox = function() {
                        var e = this;
                        this.props = {
                            sources: [],
                            customAttributes: [],
                            customClasses: [],
                            types: [],
                            videosPosters: [],
                            slideDistance: .3
                        }, this.data = {
                            isInitialized: !1,
                            isFullscreenOpen: !1,
                            maxSourceWidth: 0,
                            maxSourceHeight: 0,
                            scrollbarWidth: 0
                        }, this.sourcePointerProps = {
                            downScreenX: null,
                            isPointering: !1,
                            isSourceDownEventTarget: !1,
                            swipedX: 0
                        }, this.stageIndexes = {}, this.elements = {
                            a: [],
                            container: null,
                            slideSwipingHoverer: null,
                            sourceWrappersContainer: null,
                            sources: [],
                            sourceMainWrappers: [],
                            sourceAnimationWrappers: []
                        }, this.componentsServices = {
                            enterFullscreen: null,
                            exitFullscreen: null,
                            hideSourceLoaderIfNotYetCollection: [],
                            setSlideNumber: function() {}
                        }, this.resolve = function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return n.unshift(e), ee(t, se(n))
                        }, this.collections = {
                            sourceMainWrappersTransformers: [],
                            sourceLoadHandlers: [],
                            sourcesRenderFunctions: [],
                            sourceSizers: []
                        }, this.core = {
                            classFacade: {},
                            eventsDispatcher: {},
                            fullscreenToggler: {},
                            globalEventsController: {},
                            lightboxCloser: {},
                            lightboxOpener: {},
                            lightboxUpdater: {},
                            scrollbarRecompensor: {},
                            slideChangeFacade: {},
                            slideIndexChanger: {},
                            sourcesPointerDown: {},
                            sourceDisplayFacade: {},
                            stageManager: {},
                            windowResizeActioner: {}
                        }, Z(this), this.open = function(t) {
                            return e.core.lightboxOpener.open(t)
                        }, this.close = function() {
                            return e.core.lightboxCloser.closeLightbox()
                        }
                    }, window.fsLightboxInstances = {}, re(), window.refreshFsLightbox = function() {
                        for (var e in fsLightboxInstances) {
                            var t = fsLightboxInstances[e].props;
                            fsLightboxInstances[e] = new FsLightbox, fsLightboxInstances[e].props = t, fsLightboxInstances[e].props.sources = [], fsLightboxInstances[e].elements.a = []
                        }
                        re()
                    }
                }])
            },
            2: function(e, t, n) {
                var s, i;
                window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
                        var t, n = (this.document || this.ownerDocument).querySelectorAll(e),
                            s = this;
                        do {
                            for (t = n.length; 0 <= --t && n.item(t) !== s;);
                        } while (t < 0 && (s = s.parentElement));
                        return s
                    }),
                    function() {
                        function e(e, t) {
                            t = t || {
                                bubbles: !1,
                                cancelable: !1,
                                detail: void 0
                            };
                            var n = document.createEvent("CustomEvent");
                            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                        }
                        "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
                    }(),
                    function() {
                        for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
                        window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
                            var s = (new Date).getTime(),
                                i = Math.max(0, 16 - (s - e)),
                                r = window.setTimeout((function() {
                                    t(s + i)
                                }), i);
                            return e = s + i, r
                        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                            clearTimeout(e)
                        })
                    }(), i = void 0 !== n.g ? n.g : "undefined" != typeof window ? window : this, s = function() {
                        return function(e) {
                            "use strict";
                            var t = {
                                    ignore: "[data-scroll-ignore]",
                                    header: null,
                                    topOnEmptyHash: !0,
                                    speed: 500,
                                    speedAsDuration: !1,
                                    durationMax: null,
                                    durationMin: null,
                                    clip: !0,
                                    offset: 0,
                                    easing: "easeInOutCubic",
                                    customEasing: null,
                                    updateURL: !0,
                                    popstate: !0,
                                    emitEvents: !0
                                },
                                n = function() {
                                    var e = {};
                                    return Array.prototype.forEach.call(arguments, (function(t) {
                                        for (var n in t) {
                                            if (!t.hasOwnProperty(n)) return;
                                            e[n] = t[n]
                                        }
                                    })), e
                                },
                                s = function(e) {
                                    "#" === e.charAt(0) && (e = e.substr(1));
                                    for (var t, n = String(e), s = n.length, i = -1, r = "", o = n.charCodeAt(0); ++i < s;) {
                                        if (0 === (t = n.charCodeAt(i))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                                        r += 1 <= t && t <= 31 || 127 == t || 0 === i && 48 <= t && t <= 57 || 1 === i && 48 <= t && t <= 57 && 45 === o ? "\\" + t.toString(16) + " " : 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(i) : "\\" + n.charAt(i)
                                    }
                                    return "#" + r
                                },
                                i = function() {
                                    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
                                },
                                r = function(t, n, s) {
                                    0 === t && document.body.focus(), s || (t.focus(), document.activeElement !== t && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none"), e.scrollTo(0, n))
                                },
                                o = function(t, n, s, i) {
                                    if (n.emitEvents && "function" == typeof e.CustomEvent) {
                                        var r = new CustomEvent(t, {
                                            bubbles: !0,
                                            detail: {
                                                anchor: s,
                                                toggle: i
                                            }
                                        });
                                        document.dispatchEvent(r)
                                    }
                                };
                            return function(a, l) {
                                var c, d, u, p, h = {
                                        cancelScroll: function(e) {
                                            cancelAnimationFrame(p), p = null, e || o("scrollCancel", c)
                                        },
                                        animateScroll: function(s, a, l) {
                                            h.cancelScroll();
                                            var d = n(c || t, l || {}),
                                                f = "[object Number]" === Object.prototype.toString.call(s),
                                                m = f || !s.tagName ? null : s;
                                            if (f || m) {
                                                var g = e.pageYOffset;
                                                d.header && !u && (u = document.querySelector(d.header));
                                                var v, b, w, x, y, S, C, E, T = function(t) {
                                                        return t ? (n = t, parseInt(e.getComputedStyle(n).height, 10) + t.offsetTop) : 0;
                                                        var n
                                                    }(u),
                                                    L = f ? s : function(t, n, s, r) {
                                                        var o = 0;
                                                        if (t.offsetParent)
                                                            for (; o += t.offsetTop, t = t.offsetParent;);
                                                        return o = Math.max(o - n - s, 0), r && (o = Math.min(o, i() - e.innerHeight)), o
                                                    }(m, T, parseInt("function" == typeof d.offset ? d.offset(s, a) : d.offset, 10), d.clip),
                                                    M = L - g,
                                                    k = i(),
                                                    A = 0,
                                                    P = (v = M, w = (b = d).speedAsDuration ? b.speed : Math.abs(v / 1e3 * b.speed), b.durationMax && w > b.durationMax ? b.durationMax : b.durationMin && w < b.durationMin ? b.durationMin : parseInt(w, 10)),
                                                    O = function(t) {
                                                        var n, i, l;
                                                        x || (x = t), A += t - x, S = g + M * (i = y = 1 < (y = 0 === P ? 0 : A / P) ? 1 : y, "easeInQuad" === (n = d).easing && (l = i * i), "easeOutQuad" === n.easing && (l = i * (2 - i)), "easeInOutQuad" === n.easing && (l = i < .5 ? 2 * i * i : (4 - 2 * i) * i - 1), "easeInCubic" === n.easing && (l = i * i * i), "easeOutCubic" === n.easing && (l = --i * i * i + 1), "easeInOutCubic" === n.easing && (l = i < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1), "easeInQuart" === n.easing && (l = i * i * i * i), "easeOutQuart" === n.easing && (l = 1 - --i * i * i * i), "easeInOutQuart" === n.easing && (l = i < .5 ? 8 * i * i * i * i : 1 - 8 * --i * i * i * i), "easeInQuint" === n.easing && (l = i * i * i * i * i), "easeOutQuint" === n.easing && (l = 1 + --i * i * i * i * i), "easeInOutQuint" === n.easing && (l = i < .5 ? 16 * i * i * i * i * i : 1 + 16 * --i * i * i * i * i), n.customEasing && (l = n.customEasing(i)), l || i), e.scrollTo(0, Math.floor(S)),
                                                            function(t, n) {
                                                                var i = e.pageYOffset;
                                                                if (t == n || i == n || (g < n && e.innerHeight + i) >= k) return h.cancelScroll(!0), r(s, n, f), o("scrollStop", d, s, a), !(p = x = null)
                                                            }(S, L) || (p = e.requestAnimationFrame(O), x = t)
                                                    };
                                                0 === e.pageYOffset && e.scrollTo(0, 0), C = s, E = d, f || history.pushState && E.updateURL && history.pushState({
                                                    smoothScroll: JSON.stringify(E),
                                                    anchor: C.id
                                                }, document.title, C === document.documentElement ? "#top" : "#" + C.id), "matchMedia" in e && e.matchMedia("(prefers-reduced-motion)").matches ? r(s, Math.floor(L), !1) : (o("scrollStart", d, s, a), h.cancelScroll(!0), e.requestAnimationFrame(O))
                                            }
                                        }
                                    },
                                    f = function(t) {
                                        if (!t.defaultPrevented && !(0 !== t.button || t.metaKey || t.ctrlKey || t.shiftKey) && "closest" in t.target && (d = t.target.closest(a)) && "a" === d.tagName.toLowerCase() && !t.target.closest(c.ignore) && d.hostname === e.location.hostname && d.pathname === e.location.pathname && /#/.test(d.href)) {
                                            var n, i;
                                            try {
                                                n = s(decodeURIComponent(d.hash))
                                            } catch (t) {
                                                n = s(d.hash)
                                            }
                                            if ("#" === n) {
                                                if (!c.topOnEmptyHash) return;
                                                i = document.documentElement
                                            } else i = document.querySelector(n);
                                            (i = i || "#top" !== n ? i : document.documentElement) && (t.preventDefault(), function(t) {
                                                if (history.replaceState && t.updateURL && !history.state) {
                                                    var n = e.location.hash;
                                                    n = n || "", history.replaceState({
                                                        smoothScroll: JSON.stringify(t),
                                                        anchor: n || e.pageYOffset
                                                    }, document.title, n || e.location.href)
                                                }
                                            }(c), h.animateScroll(i, d))
                                        }
                                    },
                                    m = function(e) {
                                        if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(c)) {
                                            var t = history.state.anchor;
                                            "string" == typeof t && t && !(t = document.querySelector(s(history.state.anchor))) || h.animateScroll(t, null, {
                                                updateURL: !1
                                            })
                                        }
                                    };
                                return h.destroy = function() {
                                        c && (document.removeEventListener("click", f, !1), e.removeEventListener("popstate", m, !1), h.cancelScroll(), p = u = d = c = null)
                                    },
                                    function() {
                                        if (!("querySelector" in document && "addEventListener" in e && "requestAnimationFrame" in e && "closest" in e.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                                        h.destroy(), c = n(t, l || {}), u = c.header ? document.querySelector(c.header) : null, document.addEventListener("click", f, !1), c.updateURL && c.popstate && e.addEventListener("popstate", m, !1)
                                    }(), h
                            }
                        }(i)
                    }.apply(t, []), void 0 === s || (e.exports = s)
            }
        },
        t = {};

    function n(s) {
        var i = t[s];
        if (void 0 !== i) return i.exports;
        var r = t[s] = {
            exports: {}
        };
        return e[s].call(r.exports, r, r.exports, n), r.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, n.d = (e, t) => {
        for (var s in t) n.o(t, s) && !n.o(e, s) && Object.defineProperty(e, s, {
            enumerable: !0,
            get: t[s]
        })
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        "use strict";
        n(425), console.log((() => {
            const e = navigator.userAgent || navigator.vendor || window.opera;
            return /android/i.test(e) ? (document.documentElement.classList.add("page--android"), "Android") : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? (document.documentElement.classList.add("page--ios"), "iOS") : "unknown"
        })());
        const e = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250,
                n = !1,
                s = null,
                i = null;
            return function r() {
                for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++) a[l] = arguments[l];
                if (n) return s = a, void(i = this);
                e.apply(this, a), n = !0, setTimeout((() => {
                    n = !1, i && (r.apply(i, s), i = null, s = null)
                }), t)
            }
        };
        let t = e((() => {
            console.log("throttle")
        }));
        window.addEventListener("resize", t);
        let s = e((() => {
            let e = window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${e}px`)
        }));

        function i(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
        }

        function r(e = {}, t = {}) {
            Object.keys(t).forEach((n => {
                void 0 === e[n] ? e[n] = t[n] : i(t[n]) && i(e[n]) && Object.keys(t[n]).length > 0 && r(e[n], t[n])
            }))
        }
        s(), window.addEventListener("resize", s), n(353), n(213), n(494), n(288);
        const o = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({
                initEvent() {}
            }),
            createElement: () => ({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName: () => []
            }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };

        function a() {
            const e = "undefined" != typeof document ? document : {};
            return r(e, o), e
        }
        const l = {
            document: o,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function() {
                return this
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle: () => ({
                getPropertyValue: () => ""
            }),
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia: () => ({}),
            requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };

        function c() {
            const e = "undefined" != typeof window ? window : {};
            return r(e, l), e
        }
        class d extends Array {
            constructor(e) {
                "number" == typeof e ? super(e) : (super(...e || []), function(e) {
                    const t = e.__proto__;
                    Object.defineProperty(e, "__proto__", {
                        get: () => t,
                        set(e) {
                            t.__proto__ = e
                        }
                    })
                }(this))
            }
        }

        function u(e = []) {
            const t = [];
            return e.forEach((e => {
                Array.isArray(e) ? t.push(...u(e)) : t.push(e)
            })), t
        }

        function p(e, t) {
            return Array.prototype.filter.call(e, t)
        }

        function h(e, t) {
            const n = c(),
                s = a();
            let i = [];
            if (!t && e instanceof d) return e;
            if (!e) return new d(i);
            if ("string" == typeof e) {
                const n = e.trim();
                if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                    let e = "div";
                    0 === n.indexOf("<li") && (e = "ul"), 0 === n.indexOf("<tr") && (e = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (e = "tr"), 0 === n.indexOf("<tbody") && (e = "table"), 0 === n.indexOf("<option") && (e = "select");
                    const t = s.createElement(e);
                    t.innerHTML = n;
                    for (let e = 0; e < t.childNodes.length; e += 1) i.push(t.childNodes[e])
                } else i = function(e, t) {
                    if ("string" != typeof e) return [e];
                    const n = [],
                        s = t.querySelectorAll(e);
                    for (let e = 0; e < s.length; e += 1) n.push(s[e]);
                    return n
                }(e.trim(), t || s)
            } else if (e.nodeType || e === n || e === s) i.push(e);
            else if (Array.isArray(e)) {
                if (e instanceof d) return e;
                i = e
            }
            return new d(function(e) {
                const t = [];
                for (let n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
                return t
            }(i))
        }
        h.fn = d.prototype;
        const f = "resize scroll".split(" ");

        function m(e) {
            return function(...t) {
                if (void 0 === t[0]) {
                    for (let t = 0; t < this.length; t += 1) f.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : h(this[t]).trigger(e));
                    return this
                }
                return this.on(e, ...t)
            }
        }
        m("click"), m("blur"), m("focus"), m("focusin"), m("focusout"), m("keyup"), m("keydown"), m("keypress"), m("submit"), m("change"), m("mousedown"), m("mousemove"), m("mouseup"), m("mouseenter"), m("mouseleave"), m("mouseout"), m("mouseover"), m("touchstart"), m("touchend"), m("touchmove"), m("resize"), m("scroll");
        const g = {
            addClass: function(...e) {
                const t = u(e.map((e => e.split(" "))));
                return this.forEach((e => {
                    e.classList.add(...t)
                })), this
            },
            removeClass: function(...e) {
                const t = u(e.map((e => e.split(" "))));
                return this.forEach((e => {
                    e.classList.remove(...t)
                })), this
            },
            hasClass: function(...e) {
                const t = u(e.map((e => e.split(" "))));
                return p(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
            },
            toggleClass: function(...e) {
                const t = u(e.map((e => e.split(" "))));
                this.forEach((e => {
                    t.forEach((t => {
                        e.classList.toggle(t)
                    }))
                }))
            },
            attr: function(e, t) {
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (let n = 0; n < this.length; n += 1)
                    if (2 === arguments.length) this[n].setAttribute(e, t);
                    else
                        for (const t in e) this[n][t] = e[t], this[n].setAttribute(t, e[t]);
                return this
            },
            removeAttr: function(e) {
                for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this
            },
            transform: function(e) {
                for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                return this
            },
            transition: function(e) {
                for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                return this
            },
            on: function(...e) {
                let [t, n, s, i] = e;

                function r(e) {
                    const t = e.target;
                    if (!t) return;
                    const i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), h(t).is(n)) s.apply(t, i);
                    else {
                        const e = h(t).parents();
                        for (let t = 0; t < e.length; t += 1) h(e[t]).is(n) && s.apply(e[t], i)
                    }
                }

                function o(e) {
                    const t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t)
                }
                "function" == typeof e[1] && ([t, s, i] = e, n = void 0), i || (i = !1);
                const a = t.split(" ");
                let l;
                for (let e = 0; e < this.length; e += 1) {
                    const t = this[e];
                    if (n)
                        for (l = 0; l < a.length; l += 1) {
                            const e = a[l];
                            t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                                listener: s,
                                proxyListener: r
                            }), t.addEventListener(e, r, i)
                        } else
                            for (l = 0; l < a.length; l += 1) {
                                const e = a[l];
                                t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                                    listener: s,
                                    proxyListener: o
                                }), t.addEventListener(e, o, i)
                            }
                }
                return this
            },
            off: function(...e) {
                let [t, n, s, i] = e;
                "function" == typeof e[1] && ([t, s, i] = e, n = void 0), i || (i = !1);
                const r = t.split(" ");
                for (let e = 0; e < r.length; e += 1) {
                    const t = r[e];
                    for (let e = 0; e < this.length; e += 1) {
                        const r = this[e];
                        let o;
                        if (!n && r.dom7Listeners ? o = r.dom7Listeners[t] : n && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]), o && o.length)
                            for (let e = o.length - 1; e >= 0; e -= 1) {
                                const n = o[e];
                                s && n.listener === s || s && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === s ? (r.removeEventListener(t, n.proxyListener, i), o.splice(e, 1)) : s || (r.removeEventListener(t, n.proxyListener, i), o.splice(e, 1))
                            }
                    }
                }
                return this
            },
            trigger: function(...e) {
                const t = c(),
                    n = e[0].split(" "),
                    s = e[1];
                for (let i = 0; i < n.length; i += 1) {
                    const r = n[i];
                    for (let n = 0; n < this.length; n += 1) {
                        const i = this[n];
                        if (t.CustomEvent) {
                            const n = new t.CustomEvent(r, {
                                detail: s,
                                bubbles: !0,
                                cancelable: !0
                            });
                            i.dom7EventData = e.filter(((e, t) => t > 0)), i.dispatchEvent(n), i.dom7EventData = [], delete i.dom7EventData
                        }
                    }
                }
                return this
            },
            transitionEnd: function(e) {
                const t = this;
                return e && t.on("transitionend", (function n(s) {
                    s.target === this && (e.call(this, s), t.off("transitionend", n))
                })), this
            },
            outerWidth: function(e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function(e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            styles: function() {
                const e = c();
                return this[0] ? e.getComputedStyle(this[0], null) : {}
            },
            offset: function() {
                if (this.length > 0) {
                    const e = c(),
                        t = a(),
                        n = this[0],
                        s = n.getBoundingClientRect(),
                        i = t.body,
                        r = n.clientTop || i.clientTop || 0,
                        o = n.clientLeft || i.clientLeft || 0,
                        l = n === e ? e.scrollY : n.scrollTop,
                        d = n === e ? e.scrollX : n.scrollLeft;
                    return {
                        top: s.top + l - r,
                        left: s.left + d - o
                    }
                }
                return null
            },
            css: function(e, t) {
                const n = c();
                let s;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (s = 0; s < this.length; s += 1)
                            for (const t in e) this[s].style[t] = e[t];
                        return this
                    }
                    if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
                    return this
                }
                return this
            },
            each: function(e) {
                return e ? (this.forEach(((t, n) => {
                    e.apply(t, [t, n])
                })), this) : this
            },
            html: function(e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this
            },
            text: function(e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this
            },
            is: function(e) {
                const t = c(),
                    n = a(),
                    s = this[0];
                let i, r;
                if (!s || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (s.matches) return s.matches(e);
                    if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
                    if (s.msMatchesSelector) return s.msMatchesSelector(e);
                    for (i = h(e), r = 0; r < i.length; r += 1)
                        if (i[r] === s) return !0;
                    return !1
                }
                if (e === n) return s === n;
                if (e === t) return s === t;
                if (e.nodeType || e instanceof d) {
                    for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
                        if (i[r] === s) return !0;
                    return !1
                }
                return !1
            },
            index: function() {
                let e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                    return e
                }
            },
            eq: function(e) {
                if (void 0 === e) return this;
                const t = this.length;
                if (e > t - 1) return h([]);
                if (e < 0) {
                    const n = t + e;
                    return h(n < 0 ? [] : [this[n]])
                }
                return h([this[e]])
            },
            append: function(...e) {
                let t;
                const n = a();
                for (let s = 0; s < e.length; s += 1) {
                    t = e[s];
                    for (let e = 0; e < this.length; e += 1)
                        if ("string" == typeof t) {
                            const s = n.createElement("div");
                            for (s.innerHTML = t; s.firstChild;) this[e].appendChild(s.firstChild)
                        } else if (t instanceof d)
                        for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
                    else this[e].appendChild(t)
                }
                return this
            },
            prepend: function(e) {
                const t = a();
                let n, s;
                for (n = 0; n < this.length; n += 1)
                    if ("string" == typeof e) {
                        const i = t.createElement("div");
                        for (i.innerHTML = e, s = i.childNodes.length - 1; s >= 0; s -= 1) this[n].insertBefore(i.childNodes[s], this[n].childNodes[0])
                    } else if (e instanceof d)
                    for (s = 0; s < e.length; s += 1) this[n].insertBefore(e[s], this[n].childNodes[0]);
                else this[n].insertBefore(e, this[n].childNodes[0]);
                return this
            },
            next: function(e) {
                return this.length > 0 ? e ? this[0].nextElementSibling && h(this[0].nextElementSibling).is(e) ? h([this[0].nextElementSibling]) : h([]) : this[0].nextElementSibling ? h([this[0].nextElementSibling]) : h([]) : h([])
            },
            nextAll: function(e) {
                const t = [];
                let n = this[0];
                if (!n) return h([]);
                for (; n.nextElementSibling;) {
                    const s = n.nextElementSibling;
                    e ? h(s).is(e) && t.push(s) : t.push(s), n = s
                }
                return h(t)
            },
            prev: function(e) {
                if (this.length > 0) {
                    const t = this[0];
                    return e ? t.previousElementSibling && h(t.previousElementSibling).is(e) ? h([t.previousElementSibling]) : h([]) : t.previousElementSibling ? h([t.previousElementSibling]) : h([])
                }
                return h([])
            },
            prevAll: function(e) {
                const t = [];
                let n = this[0];
                if (!n) return h([]);
                for (; n.previousElementSibling;) {
                    const s = n.previousElementSibling;
                    e ? h(s).is(e) && t.push(s) : t.push(s), n = s
                }
                return h(t)
            },
            parent: function(e) {
                const t = [];
                for (let n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? h(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
                return h(t)
            },
            parents: function(e) {
                const t = [];
                for (let n = 0; n < this.length; n += 1) {
                    let s = this[n].parentNode;
                    for (; s;) e ? h(s).is(e) && t.push(s) : t.push(s), s = s.parentNode
                }
                return h(t)
            },
            closest: function(e) {
                let t = this;
                return void 0 === e ? h([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
            },
            find: function(e) {
                const t = [];
                for (let n = 0; n < this.length; n += 1) {
                    const s = this[n].querySelectorAll(e);
                    for (let e = 0; e < s.length; e += 1) t.push(s[e])
                }
                return h(t)
            },
            children: function(e) {
                const t = [];
                for (let n = 0; n < this.length; n += 1) {
                    const s = this[n].children;
                    for (let n = 0; n < s.length; n += 1) e && !h(s[n]).is(e) || t.push(s[n])
                }
                return h(t)
            },
            filter: function(e) {
                return h(p(this, e))
            },
            remove: function() {
                for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            }
        };
        Object.keys(g).forEach((e => {
            Object.defineProperty(h.fn, e, {
                value: g[e],
                writable: !0
            })
        }));
        const v = h;

        function b(e, t = 0) {
            return setTimeout(e, t)
        }

        function w() {
            return Date.now()
        }

        function x(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function y(...e) {
            const t = Object(e[0]),
                n = ["__proto__", "constructor", "prototype"];
            for (let i = 1; i < e.length; i += 1) {
                const r = e[i];
                if (null != r && (s = r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                    const e = Object.keys(Object(r)).filter((e => n.indexOf(e) < 0));
                    for (let n = 0, s = e.length; n < s; n += 1) {
                        const s = e[n],
                            i = Object.getOwnPropertyDescriptor(r, s);
                        void 0 !== i && i.enumerable && (x(t[s]) && x(r[s]) ? r[s].__swiper__ ? t[s] = r[s] : y(t[s], r[s]) : !x(t[s]) && x(r[s]) ? (t[s] = {}, r[s].__swiper__ ? t[s] = r[s] : y(t[s], r[s])) : t[s] = r[s])
                    }
                }
            }
            var s;
            return t
        }

        function S(e, t, n) {
            e.style.setProperty(t, n)
        }

        function C({
            swiper: e,
            targetPosition: t,
            side: n
        }) {
            const s = c(),
                i = -e.translate;
            let r, o = null;
            const a = e.params.speed;
            e.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(e.cssModeFrameID);
            const l = t > i ? "next" : "prev",
                d = (e, t) => "next" === l && e >= t || "prev" === l && e <= t,
                u = () => {
                    r = (new Date).getTime(), null === o && (o = r);
                    const l = Math.max(Math.min((r - o) / a, 1), 0),
                        c = .5 - Math.cos(l * Math.PI) / 2;
                    let p = i + c * (t - i);
                    if (d(p, t) && (p = t), e.wrapperEl.scrollTo({
                            [n]: p
                        }), d(p, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                            [n]: p
                        })
                    })), void s.cancelAnimationFrame(e.cssModeFrameID);
                    e.cssModeFrameID = s.requestAnimationFrame(u)
                };
            u()
        }
        let E, T, L;

        function M() {
            return E || (E = function() {
                const e = c(),
                    t = a();
                return {
                    smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                    passiveListener: function() {
                        let t = !1;
                        try {
                            const n = Object.defineProperty({}, "passive", {
                                get() {
                                    t = !0
                                }
                            });
                            e.addEventListener("testPassiveListener", null, n)
                        } catch (e) {}
                        return t
                    }(),
                    gestures: "ongesturestart" in e
                }
            }()), E
        }
        const k = {
                on(e, t, n) {
                    const s = this;
                    if ("function" != typeof t) return s;
                    const i = n ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][i](t)
                    })), s
                },
                once(e, t, n) {
                    const s = this;
                    if ("function" != typeof t) return s;

                    function i(...n) {
                        s.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(s, n)
                    }
                    return i.__emitterProxy = t, s.on(e, i, n)
                },
                onAny(e, t) {
                    const n = this;
                    if ("function" != typeof e) return n;
                    const s = t ? "unshift" : "push";
                    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[s](e), n
                },
                offAny(e) {
                    const t = this;
                    if (!t.eventsAnyListeners) return t;
                    const n = t.eventsAnyListeners.indexOf(e);
                    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
                },
                off(e, t) {
                    const n = this;
                    return n.eventsListeners ? (e.split(" ").forEach((e => {
                        void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach(((s, i) => {
                            (s === t || s.__emitterProxy && s.__emitterProxy === t) && n.eventsListeners[e].splice(i, 1)
                        }))
                    })), n) : n
                },
                emit(...e) {
                    const t = this;
                    if (!t.eventsListeners) return t;
                    let n, s, i;
                    return "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], s = e.slice(1, e.length), i = t) : (n = e[0].events, s = e[0].data, i = e[0].context || t), s.unshift(i), (Array.isArray(n) ? n : n.split(" ")).forEach((e => {
                        t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                            t.apply(i, [e, ...s])
                        })), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e => {
                            e.apply(i, s)
                        }))
                    })), t
                }
            },
            A = {
                updateSize: function() {
                    const e = this;
                    let t, n;
                    const s = e.$el;
                    t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : s[0].clientWidth, n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : s[0].clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(s.css("padding-left") || 0, 10) - parseInt(s.css("padding-right") || 0, 10), n = n - parseInt(s.css("padding-top") || 0, 10) - parseInt(s.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
                        width: t,
                        height: n,
                        size: e.isHorizontal() ? t : n
                    }))
                },
                updateSlides: function() {
                    const e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        } [t]
                    }

                    function n(e, n) {
                        return parseFloat(e.getPropertyValue(t(n)) || 0)
                    }
                    const s = e.params,
                        {
                            $wrapperEl: i,
                            size: r,
                            rtlTranslate: o,
                            wrongRTL: a
                        } = e,
                        l = e.virtual && s.virtual.enabled,
                        c = l ? e.virtual.slides.length : e.slides.length,
                        d = i.children(`.${e.params.slideClass}`),
                        u = l ? e.virtual.slides.length : d.length;
                    let p = [];
                    const h = [],
                        f = [];
                    let m = s.slidesOffsetBefore;
                    "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
                    let g = s.slidesOffsetAfter;
                    "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
                    const v = e.snapGrid.length,
                        b = e.slidesGrid.length;
                    let w = s.spaceBetween,
                        x = -m,
                        y = 0,
                        C = 0;
                    if (void 0 === r) return;
                    "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * r), e.virtualSize = -w, o ? d.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : d.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }), s.centeredSlides && s.cssMode && (S(e.wrapperEl, "--swiper-centered-offset-before", ""), S(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    const E = s.grid && s.grid.rows > 1 && e.grid;
                    let T;
                    E && e.grid.initSlides(u);
                    const L = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
                    for (let i = 0; i < u; i += 1) {
                        T = 0;
                        const o = d.eq(i);
                        if (E && e.grid.updateSlide(i, o, u, t), "none" !== o.css("display")) {
                            if ("auto" === s.slidesPerView) {
                                L && (d[i].style[t("width")] = "");
                                const r = getComputedStyle(o[0]),
                                    a = o[0].style.transform,
                                    l = o[0].style.webkitTransform;
                                if (a && (o[0].style.transform = "none"), l && (o[0].style.webkitTransform = "none"), s.roundLengths) T = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                                else {
                                    const e = n(r, "width"),
                                        t = n(r, "padding-left"),
                                        s = n(r, "padding-right"),
                                        i = n(r, "margin-left"),
                                        a = n(r, "margin-right"),
                                        l = r.getPropertyValue("box-sizing");
                                    if (l && "border-box" === l) T = e + i + a;
                                    else {
                                        const {
                                            clientWidth: n,
                                            offsetWidth: r
                                        } = o[0];
                                        T = e + t + s + i + a + (r - n)
                                    }
                                }
                                a && (o[0].style.transform = a), l && (o[0].style.webkitTransform = l), s.roundLengths && (T = Math.floor(T))
                            } else T = (r - (s.slidesPerView - 1) * w) / s.slidesPerView, s.roundLengths && (T = Math.floor(T)), d[i] && (d[i].style[t("width")] = `${T}px`);
                            d[i] && (d[i].swiperSlideSize = T), f.push(T), s.centeredSlides ? (x = x + T / 2 + y / 2 + w, 0 === y && 0 !== i && (x = x - r / 2 - w), 0 === i && (x = x - r / 2 - w), Math.abs(x) < .001 && (x = 0), s.roundLengths && (x = Math.floor(x)), C % s.slidesPerGroup == 0 && p.push(x), h.push(x)) : (s.roundLengths && (x = Math.floor(x)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && p.push(x), h.push(x), x = x + T + w), e.virtualSize += T + w, y = T, C += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, r) + g, o && a && ("slide" === s.effect || "coverflow" === s.effect) && i.css({
                            width: `${e.virtualSize+s.spaceBetween}px`
                        }), s.setWrapperSize && i.css({
                            [t("width")]: `${e.virtualSize+s.spaceBetween}px`
                        }), E && e.grid.updateWrapperSize(T, p, t), !s.centeredSlides) {
                        const t = [];
                        for (let n = 0; n < p.length; n += 1) {
                            let i = p[n];
                            s.roundLengths && (i = Math.floor(i)), p[n] <= e.virtualSize - r && t.push(i)
                        }
                        p = t, Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - r)
                    }
                    if (0 === p.length && (p = [0]), 0 !== s.spaceBetween) {
                        const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
                        d.filter(((e, t) => !s.cssMode || t !== d.length - 1)).css({
                            [n]: `${w}px`
                        })
                    }
                    if (s.centeredSlides && s.centeredSlidesBounds) {
                        let e = 0;
                        f.forEach((t => {
                            e += t + (s.spaceBetween ? s.spaceBetween : 0)
                        })), e -= s.spaceBetween;
                        const t = e - r;
                        p = p.map((e => e < 0 ? -m : e > t ? t + g : e))
                    }
                    if (s.centerInsufficientSlides) {
                        let e = 0;
                        if (f.forEach((t => {
                                e += t + (s.spaceBetween ? s.spaceBetween : 0)
                            })), e -= s.spaceBetween, e < r) {
                            const t = (r - e) / 2;
                            p.forEach(((e, n) => {
                                p[n] = e - t
                            })), h.forEach(((e, n) => {
                                h[n] = e + t
                            }))
                        }
                    }
                    if (Object.assign(e, {
                            slides: d,
                            snapGrid: p,
                            slidesGrid: h,
                            slidesSizesGrid: f
                        }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                        S(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"), S(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            n = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + n))
                    }
                    u !== c && e.emit("slidesLengthChange"), p.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset()
                },
                updateAutoHeight: function(e) {
                    const t = this,
                        n = [],
                        s = t.virtual && t.params.virtual.enabled;
                    let i, r = 0;
                    "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const o = e => s ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides) t.visibleSlides.each((e => {
                            n.push(e)
                        }));
                        else
                            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                                const e = t.activeIndex + i;
                                if (e > t.slides.length && !s) break;
                                n.push(o(e))
                            } else n.push(o(t.activeIndex));
                    for (i = 0; i < n.length; i += 1)
                        if (void 0 !== n[i]) {
                            const e = n[i].offsetHeight;
                            r = e > r ? e : r
                        }(r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
                },
                updateSlidesOffset: function() {
                    const e = this,
                        t = e.slides;
                    for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
                },
                updateSlidesProgress: function(e = this && this.translate || 0) {
                    const t = this,
                        n = t.params,
                        {
                            slides: s,
                            rtlTranslate: i,
                            snapGrid: r
                        } = t;
                    if (0 === s.length) return;
                    void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
                    let o = -e;
                    i && (o = e), s.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (let e = 0; e < s.length; e += 1) {
                        const a = s[e];
                        let l = a.swiperSlideOffset;
                        n.cssMode && n.centeredSlides && (l -= s[0].swiperSlideOffset);
                        const c = (o + (n.centeredSlides ? t.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween),
                            d = (o - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween),
                            u = -(o - l),
                            p = u + t.slidesSizesGrid[e];
                        (u >= 0 && u < t.size - 1 || p > 1 && p <= t.size || u <= 0 && p >= t.size) && (t.visibleSlides.push(a), t.visibleSlidesIndexes.push(e), s.eq(e).addClass(n.slideVisibleClass)), a.progress = i ? -c : c, a.originalProgress = i ? -d : d
                    }
                    t.visibleSlides = v(t.visibleSlides)
                },
                updateProgress: function(e) {
                    const t = this;
                    if (void 0 === e) {
                        const n = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * n || 0
                    }
                    const n = t.params,
                        s = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: i,
                        isBeginning: r,
                        isEnd: o
                    } = t;
                    const a = r,
                        l = o;
                    0 === s ? (i = 0, r = !0, o = !0) : (i = (e - t.minTranslate()) / s, r = i <= 0, o = i >= 1), Object.assign(t, {
                        progress: i,
                        isBeginning: r,
                        isEnd: o
                    }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), r && !a && t.emit("reachBeginning toEdge"), o && !l && t.emit("reachEnd toEdge"), (a && !r || l && !o) && t.emit("fromEdge"), t.emit("progress", i)
                },
                updateSlidesClasses: function() {
                    const e = this,
                        {
                            slides: t,
                            params: n,
                            $wrapperEl: s,
                            activeIndex: i,
                            realIndex: r
                        } = e,
                        o = e.virtual && n.virtual.enabled;
                    let a;
                    t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`), a = o ? e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), a.addClass(n.slideActiveClass), n.loop && (a.hasClass(n.slideDuplicateClass) ? s.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(n.slideDuplicateActiveClass) : s.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(n.slideDuplicateActiveClass));
                    let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
                    n.loop && 0 === l.length && (l = t.eq(0), l.addClass(n.slideNextClass));
                    let c = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
                    n.loop && 0 === c.length && (c = t.eq(-1), c.addClass(n.slidePrevClass)), n.loop && (l.hasClass(n.slideDuplicateClass) ? s.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : s.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? s.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : s.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)), e.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    const t = this,
                        n = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            slidesGrid: s,
                            snapGrid: i,
                            params: r,
                            activeIndex: o,
                            realIndex: a,
                            snapIndex: l
                        } = t;
                    let c, d = e;
                    if (void 0 === d) {
                        for (let e = 0; e < s.length; e += 1) void 0 !== s[e + 1] ? n >= s[e] && n < s[e + 1] - (s[e + 1] - s[e]) / 2 ? d = e : n >= s[e] && n < s[e + 1] && (d = e + 1) : n >= s[e] && (d = e);
                        r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                    }
                    if (i.indexOf(n) >= 0) c = i.indexOf(n);
                    else {
                        const e = Math.min(r.slidesPerGroupSkip, d);
                        c = e + Math.floor((d - e) / r.slidesPerGroup)
                    }
                    if (c >= i.length && (c = i.length - 1), d === o) return void(c !== l && (t.snapIndex = c, t.emit("snapIndexChange")));
                    const u = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                    Object.assign(t, {
                        snapIndex: c,
                        realIndex: u,
                        previousIndex: o,
                        activeIndex: d
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), a !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function(e) {
                    const t = this,
                        n = t.params,
                        s = v(e).closest(`.${n.slideClass}`)[0];
                    let i, r = !1;
                    if (s)
                        for (let e = 0; e < t.slides.length; e += 1)
                            if (t.slides[e] === s) {
                                r = !0, i = e;
                                break
                            } if (!s || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(v(s).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            };

        function P({
            swiper: e,
            runCallbacks: t,
            direction: n,
            step: s
        }) {
            const {
                activeIndex: i,
                previousIndex: r
            } = e;
            let o = n;
            if (o || (o = i > r ? "next" : i < r ? "prev" : "reset"), e.emit(`transition${s}`), t && i !== r) {
                if ("reset" === o) return void e.emit(`slideResetTransition${s}`);
                e.emit(`slideChangeTransition${s}`), "next" === o ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
            }
        }
        const O = {
                slideTo: function(e = 0, t = this.params.speed, n = !0, s, i) {
                    if ("number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                    if ("string" == typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const r = this;
                    let o = e;
                    o < 0 && (o = 0);
                    const {
                        params: a,
                        snapGrid: l,
                        slidesGrid: c,
                        previousIndex: d,
                        activeIndex: u,
                        rtlTranslate: p,
                        wrapperEl: h,
                        enabled: f
                    } = r;
                    if (r.animating && a.preventInteractionOnTransition || !f && !s && !i) return !1;
                    const m = Math.min(r.params.slidesPerGroupSkip, o);
                    let g = m + Math.floor((o - m) / r.params.slidesPerGroup);
                    g >= l.length && (g = l.length - 1), (u || a.initialSlide || 0) === (d || 0) && n && r.emit("beforeSlideChangeStart");
                    const v = -l[g];
                    if (r.updateProgress(v), a.normalizeSlideIndex)
                        for (let e = 0; e < c.length; e += 1) {
                            const t = -Math.floor(100 * v),
                                n = Math.floor(100 * c[e]),
                                s = Math.floor(100 * c[e + 1]);
                            void 0 !== c[e + 1] ? t >= n && t < s - (s - n) / 2 ? o = e : t >= n && t < s && (o = e + 1) : t >= n && (o = e)
                        }
                    if (r.initialized && o !== u) {
                        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                        if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (u || 0) !== o) return !1
                    }
                    let b;
                    if (b = o > u ? "next" : o < u ? "prev" : "reset", p && -v === r.translate || !p && v === r.translate) return r.updateActiveIndex(o), a.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== a.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(n, b), r.transitionEnd(n, b)), !1;
                    if (a.cssMode) {
                        const e = r.isHorizontal(),
                            n = p ? v : -v;
                        if (0 === t) {
                            const t = r.virtual && r.params.virtual.enabled;
                            t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = n, t && requestAnimationFrame((() => {
                                r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
                            }))
                        } else {
                            if (!r.support.smoothScroll) return C({
                                swiper: r,
                                targetPosition: n,
                                side: e ? "left" : "top"
                            }), !0;
                            h.scrollTo({
                                [e ? "left" : "top"]: n,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(n, b), 0 === t ? r.transitionEnd(n, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(n, b))
                    }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function(e = 0, t = this.params.speed, n = !0, s) {
                    const i = this;
                    let r = e;
                    return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, n, s)
                },
                slideNext: function(e = this.params.speed, t = !0, n) {
                    const s = this,
                        {
                            animating: i,
                            enabled: r,
                            params: o
                        } = s;
                    if (!r) return s;
                    let a = o.slidesPerGroup;
                    "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                    const l = s.activeIndex < o.slidesPerGroupSkip ? 1 : a;
                    if (o.loop) {
                        if (i && o.loopPreventsSlide) return !1;
                        s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                    }
                    return o.rewind && s.isEnd ? s.slideTo(0, e, t, n) : s.slideTo(s.activeIndex + l, e, t, n)
                },
                slidePrev: function(e = this.params.speed, t = !0, n) {
                    const s = this,
                        {
                            params: i,
                            animating: r,
                            snapGrid: o,
                            slidesGrid: a,
                            rtlTranslate: l,
                            enabled: c
                        } = s;
                    if (!c) return s;
                    if (i.loop) {
                        if (r && i.loopPreventsSlide) return !1;
                        s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                    }

                    function d(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const u = d(l ? s.translate : -s.translate),
                        p = o.map((e => d(e)));
                    let h = o[p.indexOf(u) - 1];
                    if (void 0 === h && i.cssMode) {
                        let e;
                        o.forEach(((t, n) => {
                            u >= t && (e = n)
                        })), void 0 !== e && (h = o[e > 0 ? e - 1 : e])
                    }
                    let f = 0;
                    return void 0 !== h && (f = a.indexOf(h), f < 0 && (f = s.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = f - s.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), i.rewind && s.isBeginning ? s.slideTo(s.slides.length - 1, e, t, n) : s.slideTo(f, e, t, n)
                },
                slideReset: function(e = this.params.speed, t = !0, n) {
                    return this.slideTo(this.activeIndex, e, t, n)
                },
                slideToClosest: function(e = this.params.speed, t = !0, n, s = .5) {
                    const i = this;
                    let r = i.activeIndex;
                    const o = Math.min(i.params.slidesPerGroupSkip, r),
                        a = o + Math.floor((r - o) / i.params.slidesPerGroup),
                        l = i.rtlTranslate ? i.translate : -i.translate;
                    if (l >= i.snapGrid[a]) {
                        const e = i.snapGrid[a];
                        l - e > (i.snapGrid[a + 1] - e) * s && (r += i.params.slidesPerGroup)
                    } else {
                        const e = i.snapGrid[a - 1];
                        l - e <= (i.snapGrid[a] - e) * s && (r -= i.params.slidesPerGroup)
                    }
                    return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, n)
                },
                slideToClickedSlide: function() {
                    const e = this,
                        {
                            params: t,
                            $wrapperEl: n
                        } = e,
                        s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let i, r = e.clickedIndex;
                    if (t.loop) {
                        if (e.animating) return;
                        i = parseInt(v(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - s / 2 || r > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), r = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), b((() => {
                            e.slideTo(r)
                        }))) : e.slideTo(r) : r > e.slides.length - s ? (e.loopFix(), r = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), b((() => {
                            e.slideTo(r)
                        }))) : e.slideTo(r)
                    } else e.slideTo(r)
                }
            },
            I = {
                loopCreate: function() {
                    const e = this,
                        t = a(),
                        {
                            params: n,
                            $wrapperEl: s
                        } = e,
                        i = s.children().length > 0 ? v(s.children()[0].parentNode) : s;
                    i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
                    let r = i.children(`.${n.slideClass}`);
                    if (n.loopFillGroupWithBlank) {
                        const e = n.slidesPerGroup - r.length % n.slidesPerGroup;
                        if (e !== n.slidesPerGroup) {
                            for (let s = 0; s < e; s += 1) {
                                const e = v(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
                                i.append(e)
                            }
                            r = i.children(`.${n.slideClass}`)
                        }
                    }
                    "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > r.length && (e.loopedSlides = r.length);
                    const o = [],
                        l = [];
                    r.each(((t, n) => {
                        const s = v(t);
                        n < e.loopedSlides && l.push(t), n < r.length && n >= r.length - e.loopedSlides && o.push(t), s.attr("data-swiper-slide-index", n)
                    }));
                    for (let e = 0; e < l.length; e += 1) i.append(v(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
                    for (let e = o.length - 1; e >= 0; e -= 1) i.prepend(v(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass))
                },
                loopFix: function() {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {
                        activeIndex: t,
                        slides: n,
                        loopedSlides: s,
                        allowSlidePrev: i,
                        allowSlideNext: r,
                        snapGrid: o,
                        rtlTranslate: a
                    } = e;
                    let l;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const c = -o[t] - e.getTranslate();
                    t < s ? (l = n.length - 3 * s + t, l += s, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((a ? -e.translate : e.translate) - c)) : t >= n.length - s && (l = -n.length + t + s, l += s, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((a ? -e.translate : e.translate) - c)), e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix")
                },
                loopDestroy: function() {
                    const {
                        $wrapperEl: e,
                        params: t,
                        slides: n
                    } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index")
                }
            };

        function $(e) {
            const t = this,
                n = a(),
                s = c(),
                i = t.touchEventsData,
                {
                    params: r,
                    touches: o,
                    enabled: l
                } = t;
            if (!l) return;
            if (t.animating && r.preventInteractionOnTransition) return;
            !t.animating && r.cssMode && r.loop && t.loopFix();
            let d = e;
            d.originalEvent && (d = d.originalEvent);
            let u = v(d.target);
            if ("wrapper" === r.touchEventsTarget && !u.closest(t.wrapperEl).length) return;
            if (i.isTouchEvent = "touchstart" === d.type, !i.isTouchEvent && "which" in d && 3 === d.which) return;
            if (!i.isTouchEvent && "button" in d && d.button > 0) return;
            if (i.isTouched && i.isMoved) return;
            r.noSwipingClass && "" !== r.noSwipingClass && d.target && d.target.shadowRoot && e.path && e.path[0] && (u = v(e.path[0]));
            const p = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
                h = !(!d.target || !d.target.shadowRoot);
            if (r.noSwiping && (h ? function(e, t = this) {
                    return function t(n) {
                        return n && n !== a() && n !== c() ? (n.assignedSlot && (n = n.assignedSlot), n.closest(e) || t(n.getRootNode().host)) : null
                    }(t)
                }(p, d.target) : u.closest(p)[0])) return void(t.allowClick = !0);
            if (r.swipeHandler && !u.closest(r.swipeHandler)[0]) return;
            o.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX, o.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY;
            const f = o.currentX,
                m = o.currentY,
                g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                b = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
            if (g && (f <= b || f >= s.innerWidth - b)) {
                if ("prevent" !== g) return;
                e.preventDefault()
            }
            if (Object.assign(i, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), o.startX = f, o.startY = m, i.touchStartTime = w(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== d.type) {
                let e = !0;
                u.is(i.focusableElements) && (e = !1), n.activeElement && v(n.activeElement).is(i.focusableElements) && n.activeElement !== u[0] && n.activeElement.blur();
                const s = e && t.allowTouchMove && r.touchStartPreventDefault;
                !r.touchStartForcePreventDefault && !s || u[0].isContentEditable || d.preventDefault()
            }
            t.emit("touchStart", d)
        }

        function z(e) {
            const t = a(),
                n = this,
                s = n.touchEventsData,
                {
                    params: i,
                    touches: r,
                    rtlTranslate: o,
                    enabled: l
                } = n;
            if (!l) return;
            let c = e;
            if (c.originalEvent && (c = c.originalEvent), !s.isTouched) return void(s.startMoving && s.isScrolling && n.emit("touchMoveOpposite", c));
            if (s.isTouchEvent && "touchmove" !== c.type) return;
            const d = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
                u = "touchmove" === c.type ? d.pageX : c.pageX,
                p = "touchmove" === c.type ? d.pageY : c.pageY;
            if (c.preventedByNestedSwiper) return r.startX = u, void(r.startY = p);
            if (!n.allowTouchMove) return n.allowClick = !1, void(s.isTouched && (Object.assign(r, {
                startX: u,
                startY: p,
                currentX: u,
                currentY: p
            }), s.touchStartTime = w()));
            if (s.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                if (n.isVertical()) {
                    if (p < r.startY && n.translate <= n.maxTranslate() || p > r.startY && n.translate >= n.minTranslate()) return s.isTouched = !1, void(s.isMoved = !1)
                } else if (u < r.startX && n.translate <= n.maxTranslate() || u > r.startX && n.translate >= n.minTranslate()) return;
            if (s.isTouchEvent && t.activeElement && c.target === t.activeElement && v(c.target).is(s.focusableElements)) return s.isMoved = !0, void(n.allowClick = !1);
            if (s.allowTouchCallbacks && n.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
            r.currentX = u, r.currentY = p;
            const h = r.currentX - r.startX,
                f = r.currentY - r.startY;
            if (n.params.threshold && Math.sqrt(h ** 2 + f ** 2) < n.params.threshold) return;
            if (void 0 === s.isScrolling) {
                let e;
                n.isHorizontal() && r.currentY === r.startY || n.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, s.isScrolling = n.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
            }
            if (s.isScrolling && n.emit("touchMoveOpposite", c), void 0 === s.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (s.startMoving = !0)), s.isScrolling) return void(s.isTouched = !1);
            if (!s.startMoving) return;
            n.allowClick = !1, !i.cssMode && c.cancelable && c.preventDefault(), i.touchMoveStopPropagation && !i.nested && c.stopPropagation(), s.isMoved || (i.loop && !i.cssMode && n.loopFix(), s.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, !i.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", c)), n.emit("sliderMove", c), s.isMoved = !0;
            let m = n.isHorizontal() ? h : f;
            r.diff = m, m *= i.touchRatio, o && (m = -m), n.swipeDirection = m > 0 ? "prev" : "next", s.currentTranslate = m + s.startTranslate;
            let g = !0,
                b = i.resistanceRatio;
            if (i.touchReleaseOnEdges && (b = 0), m > 0 && s.currentTranslate > n.minTranslate() ? (g = !1, i.resistance && (s.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + s.startTranslate + m) ** b)) : m < 0 && s.currentTranslate < n.maxTranslate() && (g = !1, i.resistance && (s.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - s.startTranslate - m) ** b)), g && (c.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), n.allowSlidePrev || n.allowSlideNext || (s.currentTranslate = s.startTranslate), i.threshold > 0) {
                if (!(Math.abs(m) > i.threshold || s.allowThresholdMove)) return void(s.currentTranslate = s.startTranslate);
                if (!s.allowThresholdMove) return s.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, s.currentTranslate = s.startTranslate, void(r.diff = n.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
            }
            i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && n.freeMode || i.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), n.params.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(s.currentTranslate), n.setTranslate(s.currentTranslate))
        }

        function F(e) {
            const t = this,
                n = t.touchEventsData,
                {
                    params: s,
                    touches: i,
                    rtlTranslate: r,
                    slidesGrid: o,
                    enabled: a
                } = t;
            if (!a) return;
            let l = e;
            if (l.originalEvent && (l = l.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", l), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && s.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
            s.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const c = w(),
                d = c - n.touchStartTime;
            if (t.allowClick) {
                const e = l.path || l.composedPath && l.composedPath();
                t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), d < 300 && c - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
            }
            if (n.lastClickTime = w(), b((() => {
                    t.destroyed || (t.allowClick = !0)
                })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === i.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
            let u;
            if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, u = s.followFinger ? r ? t.translate : -t.translate : -n.currentTranslate, s.cssMode) return;
            if (t.params.freeMode && s.freeMode.enabled) return void t.freeMode.onTouchEnd({
                currentPos: u
            });
            let p = 0,
                h = t.slidesSizesGrid[0];
            for (let e = 0; e < o.length; e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                void 0 !== o[e + t] ? u >= o[e] && u < o[e + t] && (p = e, h = o[e + t] - o[e]) : u >= o[e] && (p = e, h = o[o.length - 1] - o[o.length - 2])
            }
            const f = (u - o[p]) / h,
                m = p < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
            if (d > s.longSwipesMs) {
                if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (f >= s.longSwipesRatio ? t.slideTo(p + m) : t.slideTo(p)), "prev" === t.swipeDirection && (f > 1 - s.longSwipesRatio ? t.slideTo(p + m) : t.slideTo(p))
            } else {
                if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                !t.navigation || l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(p + m), "prev" === t.swipeDirection && t.slideTo(p)) : l.target === t.navigation.nextEl ? t.slideTo(p + m) : t.slideTo(p)
            }
        }

        function N() {
            const e = this,
                {
                    params: t,
                    el: n
                } = e;
            if (n && 0 === n.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            const {
                allowSlideNext: s,
                allowSlidePrev: i,
                snapGrid: r
            } = e;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = s, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }

        function D(e) {
            const t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
        }

        function H() {
            const e = this,
                {
                    wrapperEl: t,
                    rtlTranslate: n,
                    enabled: s
                } = e;
            if (!s) return;
            let i;
            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
            const r = e.maxTranslate() - e.minTranslate();
            i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
        }
        let B = !1;

        function W() {}
        const _ = (e, t) => {
                const n = a(),
                    {
                        params: s,
                        touchEvents: i,
                        el: r,
                        wrapperEl: o,
                        device: l,
                        support: c
                    } = e,
                    d = !!s.nested,
                    u = "on" === t ? "addEventListener" : "removeEventListener",
                    p = t;
                if (c.touch) {
                    const t = !("touchstart" !== i.start || !c.passiveListener || !s.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r[u](i.start, e.onTouchStart, t), r[u](i.move, e.onTouchMove, c.passiveListener ? {
                        passive: !1,
                        capture: d
                    } : d), r[u](i.end, e.onTouchEnd, t), i.cancel && r[u](i.cancel, e.onTouchEnd, t)
                } else r[u](i.start, e.onTouchStart, !1), n[u](i.move, e.onTouchMove, d), n[u](i.end, e.onTouchEnd, !1);
                (s.preventClicks || s.preventClicksPropagation) && r[u]("click", e.onClick, !0), s.cssMode && o[u]("scroll", e.onScroll), s.updateOnWindowResize ? e[p](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N, !0) : e[p]("observerUpdate", N, !0)
            },
            G = {
                attachEvents: function() {
                    const e = this,
                        t = a(),
                        {
                            params: n,
                            support: s
                        } = e;
                    e.onTouchStart = $.bind(e), e.onTouchMove = z.bind(e), e.onTouchEnd = F.bind(e), n.cssMode && (e.onScroll = H.bind(e)), e.onClick = D.bind(e), s.touch && !B && (t.addEventListener("touchstart", W), B = !0), _(e, "on")
                },
                detachEvents: function() {
                    _(this, "off")
                }
            },
            j = (e, t) => e.grid && t.grid && t.grid.rows > 1,
            R = {
                addClasses: function() {
                    const e = this,
                        {
                            classNames: t,
                            params: n,
                            rtl: s,
                            $el: i,
                            device: r,
                            support: o
                        } = e,
                        a = function(e, t) {
                            const n = [];
                            return e.forEach((e => {
                                "object" == typeof e ? Object.keys(e).forEach((s => {
                                    e[s] && n.push(t + s)
                                })) : "string" == typeof e && n.push(t + e)
                            })), n
                        }(["initialized", n.direction, {
                            "pointer-events": !o.touch
                        }, {
                            "free-mode": e.params.freeMode && n.freeMode.enabled
                        }, {
                            autoheight: n.autoHeight
                        }, {
                            rtl: s
                        }, {
                            grid: n.grid && n.grid.rows > 1
                        }, {
                            "grid-column": n.grid && n.grid.rows > 1 && "column" === n.grid.fill
                        }, {
                            android: r.android
                        }, {
                            ios: r.ios
                        }, {
                            "css-mode": n.cssMode
                        }, {
                            centered: n.cssMode && n.centeredSlides
                        }], n.containerModifierClass);
                    t.push(...a), i.addClass([...t].join(" ")), e.emitContainerClasses()
                },
                removeClasses: function() {
                    const {
                        $el: e,
                        classNames: t
                    } = this;
                    e.removeClass(t.join(" ")), this.emitContainerClasses()
                }
            },
            q = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

        function V(e, t) {
            return function(n = {}) {
                const s = Object.keys(n)[0],
                    i = n[s];
                "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 && !0 === e[s] && (e[s] = {
                    auto: !0
                }), s in e && "enabled" in i ? (!0 === e[s] && (e[s] = {
                    enabled: !0
                }), "object" != typeof e[s] || "enabled" in e[s] || (e[s].enabled = !0), e[s] || (e[s] = {
                    enabled: !1
                }), y(t, n)) : y(t, n)) : y(t, n)
            }
        }
        const X = {
                eventsEmitter: k,
                update: A,
                translate: {
                    getTranslate: function(e = (this.isHorizontal() ? "x" : "y")) {
                        const {
                            params: t,
                            rtlTranslate: n,
                            translate: s,
                            $wrapperEl: i
                        } = this;
                        if (t.virtualTranslate) return n ? -s : s;
                        if (t.cssMode) return s;
                        let r = function(e, t = "x") {
                            const n = c();
                            let s, i, r;
                            const o = function(e) {
                                const t = c();
                                let n;
                                return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
                            }(e);
                            return n.WebKitCSSMatrix ? (i = o.transform || o.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), r = new n.WebKitCSSMatrix("none" === i ? "" : i)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = r.toString().split(",")), "x" === t && (i = n.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === t && (i = n.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), i || 0
                        }(i[0], e);
                        return n && (r = -r), r || 0
                    },
                    setTranslate: function(e, t) {
                        const n = this,
                            {
                                rtlTranslate: s,
                                params: i,
                                $wrapperEl: r,
                                wrapperEl: o,
                                progress: a
                            } = n;
                        let l, c = 0,
                            d = 0;
                        n.isHorizontal() ? c = s ? -e : e : d = e, i.roundLengths && (c = Math.floor(c), d = Math.floor(d)), i.cssMode ? o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -c : -d : i.virtualTranslate || r.transform(`translate3d(${c}px, ${d}px, 0px)`), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? c : d;
                        const u = n.maxTranslate() - n.minTranslate();
                        l = 0 === u ? 0 : (e - n.minTranslate()) / u, l !== a && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
                    },
                    minTranslate: function() {
                        return -this.snapGrid[0]
                    },
                    maxTranslate: function() {
                        return -this.snapGrid[this.snapGrid.length - 1]
                    },
                    translateTo: function(e = 0, t = this.params.speed, n = !0, s = !0, i) {
                        const r = this,
                            {
                                params: o,
                                wrapperEl: a
                            } = r;
                        if (r.animating && o.preventInteractionOnTransition) return !1;
                        const l = r.minTranslate(),
                            c = r.maxTranslate();
                        let d;
                        if (d = s && e > l ? l : s && e < c ? c : e, r.updateProgress(d), o.cssMode) {
                            const e = r.isHorizontal();
                            if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
                            else {
                                if (!r.support.smoothScroll) return C({
                                    swiper: r,
                                    targetPosition: -d,
                                    side: e ? "left" : "top"
                                }), !0;
                                a.scrollTo({
                                    [e ? "left" : "top"]: -d,
                                    behavior: "smooth"
                                })
                            }
                            return !0
                        }
                        return 0 === t ? (r.setTransition(0), r.setTranslate(d), n && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(d), n && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, n && r.emit("transitionEnd"))
                        }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
                    }
                },
                transition: {
                    setTransition: function(e, t) {
                        const n = this;
                        n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
                    },
                    transitionStart: function(e = !0, t) {
                        const n = this,
                            {
                                params: s
                            } = n;
                        s.cssMode || (s.autoHeight && n.updateAutoHeight(), P({
                            swiper: n,
                            runCallbacks: e,
                            direction: t,
                            step: "Start"
                        }))
                    },
                    transitionEnd: function(e = !0, t) {
                        const n = this,
                            {
                                params: s
                            } = n;
                        n.animating = !1, s.cssMode || (n.setTransition(0), P({
                            swiper: n,
                            runCallbacks: e,
                            direction: t,
                            step: "End"
                        }))
                    }
                },
                slide: O,
                loop: I,
                grabCursor: {
                    setGrabCursor: function(e) {
                        const t = this;
                        if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                        const n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                        n.style.cursor = "move", n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", n.style.cursor = e ? "-moz-grabbin" : "-moz-grab", n.style.cursor = e ? "grabbing" : "grab"
                    },
                    unsetGrabCursor: function() {
                        const e = this;
                        e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                    }
                },
                events: G,
                breakpoints: {
                    setBreakpoint: function() {
                        const e = this,
                            {
                                activeIndex: t,
                                initialized: n,
                                loopedSlides: s = 0,
                                params: i,
                                $el: r
                            } = e,
                            o = i.breakpoints;
                        if (!o || o && 0 === Object.keys(o).length) return;
                        const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
                        if (!a || e.currentBreakpoint === a) return;
                        const l = (a in o ? o[a] : void 0) || e.originalParams,
                            c = j(e, i),
                            d = j(e, l),
                            u = i.enabled;
                        c && !d ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && d && (r.addClass(`${i.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses());
                        const p = l.direction && l.direction !== i.direction,
                            h = i.loop && (l.slidesPerView !== i.slidesPerView || p);
                        p && n && e.changeDirection(), y(e.params, l);
                        const f = e.params.enabled;
                        Object.assign(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }), u && !f ? e.disable() : !u && f && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", l), h && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                    },
                    getBreakpoint: function(e, t = "window", n) {
                        if (!e || "container" === t && !n) return;
                        let s = !1;
                        const i = c(),
                            r = "window" === t ? i.innerHeight : n.clientHeight,
                            o = Object.keys(e).map((e => {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    const t = parseFloat(e.substr(1));
                                    return {
                                        value: r * t,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            }));
                        o.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                        for (let e = 0; e < o.length; e += 1) {
                            const {
                                point: r,
                                value: a
                            } = o[e];
                            "window" === t ? i.matchMedia(`(min-width: ${a}px)`).matches && (s = r) : a <= n.clientWidth && (s = r)
                        }
                        return s || "max"
                    }
                },
                checkOverflow: {
                    checkOverflow: function() {
                        const e = this,
                            {
                                isLocked: t,
                                params: n
                            } = e,
                            {
                                slidesOffsetBefore: s
                            } = n;
                        if (s) {
                            const t = e.slides.length - 1,
                                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                            e.isLocked = e.size > n
                        } else e.isLocked = 1 === e.snapGrid.length;
                        !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                    }
                },
                classes: R,
                images: {
                    loadImage: function(e, t, n, s, i, r) {
                        const o = c();
                        let a;

                        function l() {
                            r && r()
                        }
                        v(e).parent("picture")[0] || e.complete && i ? l() : t ? (a = new o.Image, a.onload = l, a.onerror = l, s && (a.sizes = s), n && (a.srcset = n), t && (a.src = t)) : l()
                    },
                    preloadImages: function() {
                        const e = this;

                        function t() {
                            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                        }
                        e.imagesToLoad = e.$el.find("img");
                        for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                            const s = e.imagesToLoad[n];
                            e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                        }
                    }
                }
            },
            Y = {};
        class U {
            constructor(...e) {
                let t, n;
                if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? n = e[0] : [t, n] = e, n || (n = {}), n = y({}, n), t && !n.el && (n.el = t), n.el && v(n.el).length > 1) {
                    const e = [];
                    return v(n.el).each((t => {
                        const s = y({}, n, {
                            el: t
                        });
                        e.push(new U(s))
                    })), e
                }
                const s = this;
                s.__swiper__ = !0, s.support = M(), s.device = function(e = {}) {
                    return T || (T = function({
                        userAgent: e
                    } = {}) {
                        const t = M(),
                            n = c(),
                            s = n.navigator.platform,
                            i = e || n.navigator.userAgent,
                            r = {
                                ios: !1,
                                android: !1
                            },
                            o = n.screen.width,
                            a = n.screen.height,
                            l = i.match(/(Android);?[\s\/]+([\d.]+)?/);
                        let d = i.match(/(iPad).*OS\s([\d_]+)/);
                        const u = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                            p = !d && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                            h = "Win32" === s;
                        let f = "MacIntel" === s;
                        return !d && f && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${a}`) >= 0 && (d = i.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), f = !1), l && !h && (r.os = "android", r.android = !0), (d || p || u) && (r.os = "ios", r.ios = !0), r
                    }(e)), T
                }({
                    userAgent: n.userAgent
                }), s.browser = (L || (L = function() {
                    const e = c();
                    return {
                        isSafari: function() {
                            const t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                        }(),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), L), s.eventsListeners = {}, s.eventsAnyListeners = [], s.modules = [...s.__modules__], n.modules && Array.isArray(n.modules) && s.modules.push(...n.modules);
                const i = {};
                s.modules.forEach((e => {
                    e({
                        swiper: s,
                        extendParams: V(n, i),
                        on: s.on.bind(s),
                        once: s.once.bind(s),
                        off: s.off.bind(s),
                        emit: s.emit.bind(s)
                    })
                }));
                const r = y({}, q, i);
                return s.params = y({}, r, Y, n), s.originalParams = y({}, s.params), s.passedParams = y({}, n), s.params && s.params.on && Object.keys(s.params.on).forEach((e => {
                    s.on(e, s.params.on[e])
                })), s.params && s.params.onAny && s.onAny(s.params.onAny), s.$ = v, Object.assign(s, {
                    enabled: s.params.enabled,
                    el: t,
                    classNames: [],
                    slides: v(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: () => "horizontal" === s.params.direction,
                    isVertical: () => "vertical" === s.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: s.params.allowSlideNext,
                    allowSlidePrev: s.params.allowSlidePrev,
                    touchEvents: function() {
                        const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                            t = ["pointerdown", "pointermove", "pointerup"];
                        return s.touchEventsTouch = {
                            start: e[0],
                            move: e[1],
                            end: e[2],
                            cancel: e[3]
                        }, s.touchEventsDesktop = {
                            start: t[0],
                            move: t[1],
                            end: t[2]
                        }, s.support.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: s.params.focusableElements,
                        lastClickTime: w(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: s.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), s.emit("_swiper"), s.params.init && s.init(), s
            }
            enable() {
                const e = this;
                e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
            }
            disable() {
                const e = this;
                e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
            }
            setProgress(e, t) {
                const n = this;
                e = Math.min(Math.max(e, 0), 1);
                const s = n.minTranslate(),
                    i = (n.maxTranslate() - s) * e + s;
                n.translateTo(i, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
            }
            emitContainerClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                e.emit("_containerClasses", t.join(" "))
            }
            getSlideClasses(e) {
                const t = this;
                return e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
            }
            emitSlidesClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = [];
                e.slides.each((n => {
                    const s = e.getSlideClasses(n);
                    t.push({
                        slideEl: n,
                        classNames: s
                    }), e.emit("_slideClass", n, s)
                })), e.emit("_slideClasses", t)
            }
            slidesPerViewDynamic(e = "current", t = !1) {
                const {
                    params: n,
                    slides: s,
                    slidesGrid: i,
                    slidesSizesGrid: r,
                    size: o,
                    activeIndex: a
                } = this;
                let l = 1;
                if (n.centeredSlides) {
                    let e, t = s[a].swiperSlideSize;
                    for (let n = a + 1; n < s.length; n += 1) s[n] && !e && (t += s[n].swiperSlideSize, l += 1, t > o && (e = !0));
                    for (let n = a - 1; n >= 0; n -= 1) s[n] && !e && (t += s[n].swiperSlideSize, l += 1, t > o && (e = !0))
                } else if ("current" === e)
                    for (let e = a + 1; e < s.length; e += 1)(t ? i[e] + r[e] - i[a] < o : i[e] - i[a] < o) && (l += 1);
                else
                    for (let e = a - 1; e >= 0; e -= 1) i[a] - i[e] < o && (l += 1);
                return l
            }
            update() {
                const e = this;
                if (!e || e.destroyed) return;
                const {
                    snapGrid: t,
                    params: n
                } = e;

                function s() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                let i;
                n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || s()), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
            }
            changeDirection(e, t = !0) {
                const n = this,
                    s = n.params.direction;
                return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass(`${n.params.containerModifierClass}${s}`).addClass(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.each((t => {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                })), n.emit("changeDirection"), t && n.update()), n
            }
            mount(e) {
                const t = this;
                if (t.mounted) return !0;
                const n = v(e || t.params.el);
                if (!(e = n[0])) return !1;
                e.swiper = t;
                const s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
                let i = (() => {
                    if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                        const t = v(e.shadowRoot.querySelector(s()));
                        return t.children = e => n.children(e), t
                    }
                    return n.children(s())
                })();
                if (0 === i.length && t.params.createElements) {
                    const e = a().createElement("div");
                    i = v(e), e.className = t.params.wrapperClass, n.append(e), n.children(`.${t.params.slideClass}`).each((e => {
                        i.append(e)
                    }))
                }
                return Object.assign(t, {
                    $el: n,
                    el: e,
                    $wrapperEl: i,
                    wrapperEl: i[0],
                    mounted: !0,
                    rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
                    wrongRTL: "-webkit-box" === i.css("display")
                }), !0
            }
            init(e) {
                const t = this;
                return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
            }
            destroy(e = !0, t = !0) {
                const n = this,
                    {
                        params: s,
                        $el: i,
                        $wrapperEl: r,
                        slides: o
                    } = n;
                return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), s.loop && n.loopDestroy(), t && (n.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((e => {
                    n.off(e)
                })), !1 !== e && (n.$el[0].swiper = null, function(e) {
                    const t = e;
                    Object.keys(t).forEach((e => {
                        try {
                            t[e] = null
                        } catch (e) {}
                        try {
                            delete t[e]
                        } catch (e) {}
                    }))
                }(n)), n.destroyed = !0), null
            }
            static extendDefaults(e) {
                y(Y, e)
            }
            static get extendedDefaults() {
                return Y
            }
            static get defaults() {
                return q
            }
            static installModule(e) {
                U.prototype.__modules__ || (U.prototype.__modules__ = []);
                const t = U.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
            }
            static use(e) {
                return Array.isArray(e) ? (e.forEach((e => U.installModule(e))), U) : (U.installModule(e), U)
            }
        }
        Object.keys(X).forEach((e => {
            Object.keys(X[e]).forEach((t => {
                U.prototype[t] = X[e][t]
            }))
        })), U.use([function({
            swiper: e,
            on: t,
            emit: n
        }) {
            const s = c();
            let i = null;
            const r = () => {
                    e && !e.destroyed && e.initialized && (n("beforeResize"), n("resize"))
                },
                o = () => {
                    e && !e.destroyed && e.initialized && n("orientationchange")
                };
            t("init", (() => {
                e.params.resizeObserver && void 0 !== s.ResizeObserver ? e && !e.destroyed && e.initialized && (i = new ResizeObserver((t => {
                    const {
                        width: n,
                        height: s
                    } = e;
                    let i = n,
                        o = s;
                    t.forEach((({
                        contentBoxSize: t,
                        contentRect: n,
                        target: s
                    }) => {
                        s && s !== e.el || (i = n ? n.width : (t[0] || t).inlineSize, o = n ? n.height : (t[0] || t).blockSize)
                    })), i === n && o === s || r()
                })), i.observe(e.el)) : (s.addEventListener("resize", r), s.addEventListener("orientationchange", o))
            })), t("destroy", (() => {
                i && i.unobserve && e.el && (i.unobserve(e.el), i = null), s.removeEventListener("resize", r), s.removeEventListener("orientationchange", o)
            }))
        }, function({
            swiper: e,
            extendParams: t,
            on: n,
            emit: s
        }) {
            const i = [],
                r = c(),
                o = (e, t = {}) => {
                    const n = new(r.MutationObserver || r.WebkitMutationObserver)((e => {
                        if (1 === e.length) return void s("observerUpdate", e[0]);
                        const t = function() {
                            s("observerUpdate", e[0])
                        };
                        r.requestAnimationFrame ? r.requestAnimationFrame(t) : r.setTimeout(t, 0)
                    }));
                    n.observe(e, {
                        attributes: void 0 === t.attributes || t.attributes,
                        childList: void 0 === t.childList || t.childList,
                        characterData: void 0 === t.characterData || t.characterData
                    }), i.push(n)
                };
            t({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            }), n("init", (() => {
                if (e.params.observer) {
                    if (e.params.observeParents) {
                        const t = e.$el.parents();
                        for (let e = 0; e < t.length; e += 1) o(t[e])
                    }
                    o(e.$el[0], {
                        childList: e.params.observeSlideChildren
                    }), o(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            })), n("destroy", (() => {
                i.forEach((e => {
                    e.disconnect()
                })), i.splice(0, i.length)
            }))
        }]);
        const K = U;

        function Q(e, t, n, s) {
            const i = a();
            return e.params.createElements && Object.keys(s).forEach((r => {
                if (!n[r] && !0 === n.auto) {
                    let o = e.$el.children(`.${s[r]}`)[0];
                    o || (o = i.createElement("div"), o.className = s[r], e.$el.append(o)), n[r] = o, t[r] = o
                }
            })), n
        }

        function J(e = "") {
            return `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
        }
        K.use([function({
            swiper: e,
            extendParams: t,
            on: n,
            emit: s
        }) {
            function i(t) {
                let n;
                return t && (n = v(t), e.params.uniqueNavElements && "string" == typeof t && n.length > 1 && 1 === e.$el.find(t).length && (n = e.$el.find(t))), n
            }

            function r(t, n) {
                const s = e.params.navigation;
                t && t.length > 0 && (t[n ? "addClass" : "removeClass"](s.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = n), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](s.lockClass))
            }

            function o() {
                if (e.params.loop) return;
                const {
                    $nextEl: t,
                    $prevEl: n
                } = e.navigation;
                r(n, e.isBeginning && !e.params.rewind), r(t, e.isEnd && !e.params.rewind)
            }

            function a(t) {
                t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev()
            }

            function l(t) {
                t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext()
            }

            function c() {
                const t = e.params.navigation;
                if (e.params.navigation = Q(e, e.originalParams.navigation, e.params.navigation, {
                        nextEl: "swiper-button-next",
                        prevEl: "swiper-button-prev"
                    }), !t.nextEl && !t.prevEl) return;
                const n = i(t.nextEl),
                    s = i(t.prevEl);
                n && n.length > 0 && n.on("click", l), s && s.length > 0 && s.on("click", a), Object.assign(e.navigation, {
                    $nextEl: n,
                    nextEl: n && n[0],
                    $prevEl: s,
                    prevEl: s && s[0]
                }), e.enabled || (n && n.addClass(t.lockClass), s && s.addClass(t.lockClass))
            }

            function d() {
                const {
                    $nextEl: t,
                    $prevEl: n
                } = e.navigation;
                t && t.length && (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click", a), n.removeClass(e.params.navigation.disabledClass))
            }
            t({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            }), e.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            }, n("init", (() => {
                c(), o()
            })), n("toEdge fromEdge lock unlock", (() => {
                o()
            })), n("destroy", (() => {
                d()
            })), n("enable disable", (() => {
                const {
                    $nextEl: t,
                    $prevEl: n
                } = e.navigation;
                t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), n && n[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
            })), n("click", ((t, n) => {
                const {
                    $nextEl: i,
                    $prevEl: r
                } = e.navigation, o = n.target;
                if (e.params.navigation.hideOnClick && !v(o).is(r) && !v(o).is(i)) {
                    if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === o || e.pagination.el.contains(o))) return;
                    let t;
                    i ? t = i.hasClass(e.params.navigation.hiddenClass) : r && (t = r.hasClass(e.params.navigation.hiddenClass)), s(!0 === t ? "navigationShow" : "navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass)
                }
            })), Object.assign(e.navigation, {
                update: o,
                init: c,
                destroy: d
            })
        }, function({
            swiper: e,
            extendParams: t,
            on: n,
            emit: s
        }) {
            const i = "swiper-pagination";
            let r;
            t({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: e => e,
                    formatFractionTotal: e => e,
                    bulletClass: `${i}-bullet`,
                    bulletActiveClass: `${i}-bullet-active`,
                    modifierClass: `${i}-`,
                    currentClass: `${i}-current`,
                    totalClass: `${i}-total`,
                    hiddenClass: `${i}-hidden`,
                    progressbarFillClass: `${i}-progressbar-fill`,
                    progressbarOppositeClass: `${i}-progressbar-opposite`,
                    clickableClass: `${i}-clickable`,
                    lockClass: `${i}-lock`,
                    horizontalClass: `${i}-horizontal`,
                    verticalClass: `${i}-vertical`
                }
            }), e.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let o = 0;

            function a() {
                return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
            }

            function l(t, n) {
                const {
                    bulletActiveClass: s
                } = e.params.pagination;
                t[n]().addClass(`${s}-${n}`)[n]().addClass(`${s}-${n}-${n}`)
            }

            function c() {
                const t = e.rtl,
                    n = e.params.pagination;
                if (a()) return;
                const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    c = e.pagination.$el;
                let d;
                const u = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? (d = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), d > i - 1 - 2 * e.loopedSlides && (d -= i - 2 * e.loopedSlides), d > u - 1 && (d -= u), d < 0 && "bullets" !== e.params.paginationType && (d = u + d)) : d = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === n.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                    const s = e.pagination.bullets;
                    let i, a, u;
                    if (n.dynamicBullets && (r = s.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), c.css(e.isHorizontal() ? "width" : "height", r * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (o += d - (e.previousIndex - e.loopedSlides || 0), o > n.dynamicMainBullets - 1 ? o = n.dynamicMainBullets - 1 : o < 0 && (o = 0)), i = Math.max(d - o, 0), a = i + (Math.min(s.length, n.dynamicMainBullets) - 1), u = (a + i) / 2), s.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${n.bulletActiveClass}${e}`)).join(" ")), c.length > 1) s.each((e => {
                        const t = v(e),
                            s = t.index();
                        s === d && t.addClass(n.bulletActiveClass), n.dynamicBullets && (s >= i && s <= a && t.addClass(`${n.bulletActiveClass}-main`), s === i && l(t, "prev"), s === a && l(t, "next"))
                    }));
                    else {
                        const t = s.eq(d),
                            r = t.index();
                        if (t.addClass(n.bulletActiveClass), n.dynamicBullets) {
                            const t = s.eq(i),
                                o = s.eq(a);
                            for (let e = i; e <= a; e += 1) s.eq(e).addClass(`${n.bulletActiveClass}-main`);
                            if (e.params.loop)
                                if (r >= s.length) {
                                    for (let e = n.dynamicMainBullets; e >= 0; e -= 1) s.eq(s.length - e).addClass(`${n.bulletActiveClass}-main`);
                                    s.eq(s.length - n.dynamicMainBullets - 1).addClass(`${n.bulletActiveClass}-prev`)
                                } else l(t, "prev"), l(o, "next");
                            else l(t, "prev"), l(o, "next")
                        }
                    }
                    if (n.dynamicBullets) {
                        const i = Math.min(s.length, n.dynamicMainBullets + 4),
                            o = (r * i - r) / 2 - u * r,
                            a = t ? "right" : "left";
                        s.css(e.isHorizontal() ? a : "top", `${o}px`)
                    }
                }
                if ("fraction" === n.type && (c.find(J(n.currentClass)).text(n.formatFractionCurrent(d + 1)), c.find(J(n.totalClass)).text(n.formatFractionTotal(u))), "progressbar" === n.type) {
                    let t;
                    t = n.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    const s = (d + 1) / u;
                    let i = 1,
                        r = 1;
                    "horizontal" === t ? i = s : r = s, c.find(J(n.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`).transition(e.params.speed)
                }
                "custom" === n.type && n.renderCustom ? (c.html(n.renderCustom(e, d + 1, u)), s("paginationRender", c[0])) : s("paginationUpdate", c[0]), e.params.watchOverflow && e.enabled && c[e.isLocked ? "addClass" : "removeClass"](n.lockClass)
            }

            function d() {
                const t = e.params.pagination;
                if (a()) return;
                const n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    i = e.pagination.$el;
                let r = "";
                if ("bullets" === t.type) {
                    let s = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && s > n && (s = n);
                    for (let n = 0; n < s; n += 1) t.renderBullet ? r += t.renderBullet.call(e, n, t.bulletClass) : r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                    i.html(r), e.pagination.bullets = i.find(J(t.bulletClass))
                }
                "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, i.html(r)), "custom" !== t.type && s("paginationRender", e.pagination.$el[0])
            }

            function u() {
                e.params.pagination = Q(e, e.originalParams.pagination, e.params.pagination, {
                    el: "swiper-pagination"
                });
                const t = e.params.pagination;
                if (!t.el) return;
                let n = v(t.el);
                0 !== n.length && (e.params.uniqueNavElements && "string" == typeof t.el && n.length > 1 && (n = e.$el.find(t.el), n.length > 1 && (n = n.filter((t => v(t).parents(".swiper")[0] === e.el)))), "bullets" === t.type && t.clickable && n.addClass(t.clickableClass), n.addClass(t.modifierClass + t.type), n.addClass(t.modifierClass + e.params.direction), "bullets" === t.type && t.dynamicBullets && (n.addClass(`${t.modifierClass}${t.type}-dynamic`), o = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && n.addClass(t.progressbarOppositeClass), t.clickable && n.on("click", J(t.bulletClass), (function(t) {
                    t.preventDefault();
                    let n = v(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (n += e.loopedSlides), e.slideTo(n)
                })), Object.assign(e.pagination, {
                    $el: n,
                    el: n[0]
                }), e.enabled || n.addClass(t.lockClass))
            }

            function p() {
                const t = e.params.pagination;
                if (a()) return;
                const n = e.pagination.$el;
                n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), n.removeClass(t.modifierClass + e.params.direction), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", J(t.bulletClass))
            }
            n("init", (() => {
                u(), d(), c()
            })), n("activeIndexChange", (() => {
                (e.params.loop || void 0 === e.snapIndex) && c()
            })), n("snapIndexChange", (() => {
                e.params.loop || c()
            })), n("slidesLengthChange", (() => {
                e.params.loop && (d(), c())
            })), n("snapGridLengthChange", (() => {
                e.params.loop || (d(), c())
            })), n("destroy", (() => {
                p()
            })), n("enable disable", (() => {
                const {
                    $el: t
                } = e.pagination;
                t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
            })), n("lock unlock", (() => {
                c()
            })), n("click", ((t, n) => {
                const i = n.target,
                    {
                        $el: r
                    } = e.pagination;
                if (e.params.pagination.el && e.params.pagination.hideOnClick && r.length > 0 && !v(i).hasClass(e.params.pagination.bulletClass)) {
                    if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl)) return;
                    const t = r.hasClass(e.params.pagination.hiddenClass);
                    s(!0 === t ? "paginationShow" : "paginationHide"), r.toggleClass(e.params.pagination.hiddenClass)
                }
            })), Object.assign(e.pagination, {
                render: d,
                update: c,
                init: u,
                destroy: p
            })
        }]), new K(".pages__slider", {
            slidesPerView: "auto",
            spaceBetween: 30,
            speed: 500,
            loop: !0,
            navigation: {
                nextEl: ".pages__btn--next",
                prevEl: ".pages__btn--prev"
            }
        }), new K(".testimonial__slider", {
            slidesPerView: "auto",
            spaceBetween: 30,
            speed: 500,
            loop: !0,
            centeredSlides: !0,
            breakpoints: {
                577: {
                    spaceBetween: 90
                }
            },
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: !0
            }
        });
        var Z = n(2);
        new(n.n(Z)())('a[href*="#"]', {})
    })()
})();