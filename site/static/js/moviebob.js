$('#gfEmbed').on('load', function() {
    var fr=$("#gfEmbed");
    fr = (fr.contentWindow) ? fr.contentWindow :  fr.contentDocument;
    console.log(fr)
});

