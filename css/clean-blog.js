import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "'Nanum Barun Gothic'",
        "fontSize": 20,
        "color": "#404040",
        "webkitTapHighlightColor": "#0085a1"
    },
    "p": {
        "lineHeight": 1.5,
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "p a": {
        "textDecoration": "underline"
    },
    "h1": {
        "fontFamily": "'Nanum Barun Gothic'",
        "fontWeight": "800"
    },
    "h2": {
        "fontFamily": "'Nanum Barun Gothic'",
        "fontWeight": "800"
    },
    "h3": {
        "fontFamily": "'Nanum Barun Gothic'",
        "fontWeight": "800"
    },
    "h4": {
        "fontFamily": "'Nanum Barun Gothic'",
        "fontWeight": "800"
    },
    "h5": {
        "fontFamily": "'Nanum Barun Gothic'",
        "fontWeight": "800"
    },
    "h6": {
        "fontFamily": "'Nanum Barun Gothic'",
        "fontWeight": "800"
    },
    "a": {
        "color": "#404040"
    },
    "a:hover": {
        "color": "#0085a1"
    },
    "a:focus": {
        "color": "#0085a1"
    },
    "a img:hover": {
        "cursor": "zoom-in"
    },
    "a img:focus": {
        "cursor": "zoom-in"
    },
    "blockquote": {
        "color": "#808080",
        "fontStyle": "italic"
    },
    "hrsmall": {
        "maxWidth": 100,
        "marginTop": 15,
        "marginRight": "auto",
        "marginBottom": 15,
        "marginLeft": "auto",
        "borderWidth": 4,
        "borderColor": "white"
    },
    "navbar-custom": {
        "background": "white",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "zIndex": 3,
        "fontFamily": "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    },
    "navbar-custom navbar-brand": {
        "fontWeight": "800"
    },
    "navbar-custom nav li a": {
        "textTransform": "uppercase",
        "fontSize": 12,
        "fontWeight": "800",
        "letterSpacing": 1
    },
    "intro-header": {
        "background": "no-repeat center center",
        "backgroundColor": "#808080",
        "backgroundAttachment": "scroll",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "backgroundSize": "cover",
        "OBackgroundSize": "cover",
        "marginBottom": 50
    },
    "intro-header site-heading": {
        "paddingTop": 100,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0,
        "color": "white",
        "textAlign": "center"
    },
    "intro-header post-heading": {
        "paddingTop": 100,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0,
        "color": "white"
    },
    "intro-header page-heading": {
        "paddingTop": 100,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0,
        "color": "white",
        "textAlign": "center"
    },
    "intro-header site-heading h1": {
        "marginTop": 0,
        "fontSize": 50
    },
    "intro-header page-heading h1": {
        "marginTop": 0,
        "fontSize": 50
    },
    "intro-header site-heading subheading": {
        "fontSize": 24,
        "lineHeight": 1.1,
        "display": "block",
        "fontFamily": "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        "fontWeight": "300",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "intro-header page-heading subheading": {
        "fontSize": 24,
        "lineHeight": 1.1,
        "display": "block",
        "fontFamily": "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        "fontWeight": "300",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "intro-header post-heading h1": {
        "fontSize": 35
    },
    "intro-header post-heading subheading": {
        "lineHeight": 1.1,
        "display": "block",
        "fontFamily": "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        "fontSize": 24,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "fontWeight": "600"
    },
    "intro-header post-heading meta": {
        "lineHeight": 1.1,
        "display": "block",
        "fontFamily": "'Lora', 'Times New Roman', serif",
        "fontStyle": "italic",
        "fontWeight": "300",
        "fontSize": 20
    },
    "intro-header post-heading meta a": {
        "color": "white"
    },
    "post-preview > a": {
        "color": "#404040"
    },
    "post-preview > a:hover": {
        "textDecoration": "none",
        "color": "#0085a1"
    },
    "post-preview > a:focus": {
        "textDecoration": "none",
        "color": "#0085a1"
    },
    "post-preview > a > post-title": {
        "fontSize": 30,
        "marginTop": 30,
        "marginBottom": 10
    },
    "post-preview > a > post-subtitle": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontWeight": "300"
    },
    "post-preview > post-meta": {
        "color": "#808080",
        "fontSize": 18,
        "fontStyle": "italic",
        "marginTop": 0
    },
    "post-preview > post-meta > a": {
        "textDecoration": "none",
        "color": "#404040"
    },
    "post-preview > post-meta > a:hover": {
        "color": "#0085a1",
        "textDecoration": "underline"
    },
    "post-preview > post-meta > a:focus": {
        "color": "#0085a1",
        "textDecoration": "underline"
    },
    "section-heading": {
        "fontSize": 36,
        "marginTop": 60,
        "fontWeight": "700"
    },
    "caption": {
        "textAlign": "center",
        "fontSize": 14,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "fontStyle": "italic",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "display": "block",
        "borderBottomRightRadius": 5,
        "borderBottomLeftRadius": 5
    },
    "footer": {
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 65,
        "paddingLeft": 0
    },
    "footer list-inline": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "footer copyright": {
        "fontSize": 14,
        "textAlign": "center",
        "marginBottom": 0
    },
    "floating-label-form-group": {
        "fontSize": 14,
        "position": "relative",
        "marginBottom": 0,
        "paddingBottom": 0.5,
        "borderBottom": "1px solid #eeeeee"
    },
    "floating-label-form-group input": {
        "zIndex": 1,
        "position": "relative",
        "paddingRight": 0,
        "paddingLeft": 0,
        "border": "none",
        "borderRadius": 0,
        "fontSize": 1.5,
        "background": "none",
        "boxShadow": "none !important",
        "resize": "none"
    },
    "floating-label-form-group textarea": {
        "zIndex": 1,
        "position": "relative",
        "paddingRight": 0,
        "paddingLeft": 0,
        "border": "none",
        "borderRadius": 0,
        "fontSize": 1.5,
        "background": "none",
        "boxShadow": "none !important",
        "resize": "none"
    },
    "floating-label-form-group label": {
        "display": "block",
        "zIndex": 0,
        "position": "relative",
        "top": 2,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 0.85,
        "lineHeight": 1.764705882,
        "verticalAlign": "baseline",
        "opacity": 0,
        "WebkitTransition": "top 0.3s ease,opacity 0.3s ease",
        "MozTransition": "top 0.3s ease,opacity 0.3s ease",
        "MsTransition": "top 0.3s ease,opacity 0.3s ease",
        "transition": "top 0.3s ease,opacity 0.3s ease"
    },
    "floating-label-form-group::not(:first-child)": {
        "paddingLeft": 14,
        "borderLeft": "1px solid #eeeeee"
    },
    "floating-label-form-group-with-value label": {
        "top": 0,
        "opacity": 1
    },
    "floating-label-form-group-with-focus label": {
        "color": "#0085a1"
    },
    "form row:first-child floating-label-form-group": {
        "borderTop": "1px solid #eeeeee"
    },
    "btn": {
        "fontFamily": "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontSize": 14,
        "fontWeight": "800",
        "letterSpacing": 1,
        "borderRadius": 0,
        "paddingTop": 15,
        "paddingRight": 25,
        "paddingBottom": 15,
        "paddingLeft": 25
    },
    "btn-lg": {
        "fontSize": 16,
        "paddingTop": 25,
        "paddingRight": 35,
        "paddingBottom": 25,
        "paddingLeft": 35
    },
    "btn-default:hover": {
        "backgroundColor": "#0085a1",
        "border": "1px solid #0085a1",
        "color": "white"
    },
    "btn-default:focus": {
        "backgroundColor": "#0085a1",
        "border": "1px solid #0085a1",
        "color": "white"
    },
    "pager": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "pager li > a": {
        "fontFamily": "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontSize": 14,
        "fontWeight": "800",
        "letterSpacing": 1,
        "paddingTop": 10,
        "paddingRight": 5,
        "paddingBottom": 10,
        "paddingLeft": 5,
        "backgroundColor": "white",
        "borderRadius": 0
    },
    "pager li > span": {
        "fontFamily": "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontSize": 14,
        "fontWeight": "800",
        "letterSpacing": 1,
        "paddingTop": 10,
        "paddingRight": 5,
        "paddingBottom": 10,
        "paddingLeft": 5,
        "backgroundColor": "white",
        "borderRadius": 0
    },
    "pager li > a:hover": {
        "color": "white",
        "backgroundColor": "#0085a1",
        "border": "1px solid #0085a1"
    },
    "pager li > a:focus": {
        "color": "white",
        "backgroundColor": "#0085a1",
        "border": "1px solid #0085a1"
    },
    "pager disabled > a": {
        "color": "#808080",
        "backgroundColor": "#404040",
        "cursor": "not-allowed"
    },
    "pager disabled > a:hover": {
        "color": "#808080",
        "backgroundColor": "#404040",
        "cursor": "not-allowed"
    },
    "pager disabled > a:focus": {
        "color": "#808080",
        "backgroundColor": "#404040",
        "cursor": "not-allowed"
    },
    "pager disabled > span": {
        "color": "#808080",
        "backgroundColor": "#404040",
        "cursor": "not-allowed"
    },
    "::-moz-selection": {
        "color": "white",
        "textShadow": "none",
        "background": "#0085a1"
    },
    "::selection": {
        "color": "white",
        "textShadow": "none",
        "background": "#0085a1"
    },
    "img::selection": {
        "color": "white",
        "background": "transparent"
    },
    "img::-moz-selection": {
        "color": "white",
        "background": "transparent"
    }
});