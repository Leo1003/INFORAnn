var mongoose = require('mongoose');
var querystring = require('querystring');
var Ann = mongoose.model('Ann');
var admin = require('./admin');
var moment = require('moment');

/*
 * GET home page.
 */

exports.index = function (req, res, next) 
{
    var qudata = querystring.parse(req.url.query);
	Ann.find({ visible: true }).sort( '-ontop').sort( '-update' ).exec(function (err, anns) {
        admin.levelfind(req, function (err, tologin, name) {
            if (err) return next(err);

            res.render('index', {
                moment: moment,
                title: 'INFOR Ann System',
                data: anns,
                menu: tologin
            });
        });
    });
    //res.render('index', { title: 'INFOR Ann System' ,data: {}});
};
