var phantom = require('phantom');
var _ph, _page, _outObj;

var url = "https://goods.kaola.com/product/1571992.html";

phantom.
create().
then(ph => {
    _ph = ph;
    return _ph.createPage();
}).
then(page => {
    _page = page;
    return _page.open( url );
}).
then(status => {
    console.log(status);
    return _page.property('content');
}).
then(content => {
    console.log(content);
    _page.close();
    _ph.exit();
}).
catch(e => console.log(e));