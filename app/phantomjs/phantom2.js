var phantom = require('phantom');

var url = "https://goods.kaola.com/product/1571992.html";
phantom.create(function(ph) {
    ph.createPage(function(page) {
        page.open(url, function() {
            page.evaluate(function() {
                var text = document.querySelector( ".PTags.f-hkdn" ).innerText;
                console.log( text );
            }, function() {
                ph.exit()
            });
        });
    });
});