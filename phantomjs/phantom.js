var phantom = require('phantom');

var url = "https://goods.kaola.com/product/1571992.html";
phantom.create(function(ph) {
    ph.createPage(function(page) {
        page.open(url, function() {
            page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
                page.evaluate(function() {
                    console.log( $(".PTags.f-hkdn").innerText );
                }, function() {
                    ph.exit()
                });
            });
        });
    });
});