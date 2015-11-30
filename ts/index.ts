/// <reference path="typings/tsd.d.ts" />
var through = require("through2");
var path = require("path");
var beautylog = require("beautylog")("os");

var pipelog:any = {} // module object

pipelog.stream = (message:string,type:string,timing:string = "atEnd") => {
    return through.obj((file, enc, cb) => {

        //run callback function to signal end of plugin process.
        return cb(null, file);
    });
};

module.exports = pipelog;
