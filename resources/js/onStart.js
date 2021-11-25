function stringCount(str, find) {
    return (str.split(find)).length - 1;
}

var siteHomeLink=document.location.origin="/home/";
var siteCurrentLink=document.location.href;
var siteInternalLink=document.location.pathname

var linkPrefixAmt=stringCount(siteInternalLink,"/") - 1;
var linkPrefix=""
for (var i=0;i<linkPrefixAmt;i++) { linkPrefix=linkPrefix+"../"; }

var siteIcon=getImagePath(linkPrefix,"qwibgift-logo.png");
var siteIconType="image/png";
var siteThemeColor="#30415D";
var siteName="Qwibgift";
var siteDesc="The ultimate puzzle dodecahedron, now with added sock";
var siteBanner=getImagePath(linkPrefix,"satisfied.png");
var siteBannerType="image/png"

var names = {"Ohno":"404"};

var name = siteInternalLink.replaceAll("/"," ");
name=name.slice(1,-1);
name=name.split(' ')[name.split(' ').length - 1];
name=name.charAt(0).toUpperCase() + name.slice(1);
if (name in names) { name = names[name]; }

name=name+" | "+siteName;

var head=document.querySelector("head")

function generateMeta() {
    var meta = document.createElement('meta');
    meta.charset = "UTF-8";
    head.appendChild(meta);

    var meta = document.createElement('meta');
    meta.httpEquiv = "Content-type";
    meta.content = "text/html; charset=utf-8";
    head.appendChild(meta);

    var meta = document.createElement('meta');
    meta.httpEquiv = "X-UA-Compatible";
    meta.content = "IE=edge";
    head.appendChild(meta);

    var meta = document.createElement('meta');
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1.0";
    head.appendChild(meta);

    var title = document.createElement("title");
    title.innerHTML=name;
    head.appendChild(title);

    var meta = document.createElement("meta");
    meta.name="description";
    meta.content=siteDesc;
    head.appendChild(meta);

    var link = document.createElement("link");
    link.rel="apple-touch-icon";
    link.href=siteIcon;
    head.append(link);

    var link = document.createElement("link");
    link.rel="icon";
    link.type=siteIconType;
    link.href=siteIcon;
    head.append(link);

    var meta = document.createElement("meta");
    meta.name="apple-mobile-web-app-title";
    meta.content=siteName;
    head.append(meta);

    var meta = document.createElement("meta");
    meta.name="application-name";
    meta.content=siteName;
    head.append(meta);

    var meta = document.createElement("meta");
    meta.name="theme-color";
    meta.content=siteThemeColor;
    head.append(meta);

}

function generateOpenGraph() {

    function gen() {
        var x=document.createElement("meta");
        return x;
    }

    var meta=gen();
    meta.property="og:site_name";
    meta.content=siteName;
    head.append(meta);

    var meta=gen();
    meta.property="og:title";
    meta.content=name;
    head.append(meta);

    var meta=gen();
    meta.property="og:description";
    meta.content=siteDesc;
    head.append(meta);

    var meta=gen();
    meta.property="og:image:type";
    meta.content=siteBannerType;
    head.append(meta);

    var meta=gen();
    meta.property="og:image";
    meta.content=siteBanner;
    head.append(meta);

    var meta=gen();
    meta.property="og:type";
    meta.content="website";
    head.append(meta);

    var meta=gen();
    meta.property="og:url";
    meta.content=siteHomeLink;
    head.append(meta);

}

function generateStyles() {

    function gen() {
        var x = document.createElement("link");
        x.rel="stylesheet";
        return x;
    }

    var paths = [
        "resources/css/global.css",
        "resources/css/styles/colors/palette-global.css",
        "resources/css/styles/colors/c03.css",
        "resources/css/styles/fonts/font-global.css",
        "resources/css/styles/fonts/f01.css",
        "resources/css/styles/btn/global.css",
        "resources/css/styles/btn/round.css",
        "resources/css/styles/sections/layout-headline.css",
        "resources/css/styles/sections/layouts.css",
        "resources/css/darktoggle.css",
        "resources/css/grid.css",
        "resources/css/header.css",
        "resources/css/footer.css",
        "resources/css/scrolling.css",
        "resources/css/animate.css",
        "resources/css/subpage.css"
    ]

    for (var i=0; i < paths.length; i++) {
        var link = gen();
        link.href=linkPrefix+paths[i];
        head.appendChild(link)
    }
}

function generateFontAwesome() {
    var script = document.createElement("script");
    script.src="https://kit.fontawesome.com/73a2cc1270.js";
    script.crossorigin="anonymous";
    head.appendChild(script);

    var link = document.createElement("link");
    link.rel="stylesheet";
    link.href="https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css"
    head.appendChild(link);
}

function getImagePath(prefix,name) {
    return prefix+"resources/img/"+name;
}

generateMeta()
generateOpenGraph()
generateStyles()
generateFontAwesome()

$(window).on("load",function() {
    $("#cover").fadeOut(500);
});