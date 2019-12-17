//db.getCollection('test').remove({})
var date_UTC = new Date();
var date_local = new Date(date_UTC.getTime() + (9*1000*60*60));
var doc = {
    id: 'id',
    name: 'name',
    date_UTC: date_UTC,
    date_local: date_local
};
db.getCollection('test').insertOne(doc);
db.getCollection('test').findOne();