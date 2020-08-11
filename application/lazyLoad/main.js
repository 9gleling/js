const http = require("http");
const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");
const ejs = require("ejs");

function send404Message(response) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("uri list:  http://localhost:3000/{eventListner or intersectionObserver or jqueryPlugin}");
    response.end();
}

const getImageList = async () => {
    try {
        const url =
        "https://www.google.com/search?q=%EA%B3%A0%EC%96%91%EC%9D%B4&newwindow=1&rlz=1C1GCEU_koKR872KR872&sxsrf=ALeKk00b6r2yyHMzyGY9QVU9leEW3y2E4Q:1596610149294&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjqiKymvIPrAhXSA4gKHXohDDUQ_AUoAXoECBgQAw&biw=1374&bih=1283";

        return axios({
            method: "get",
            url: url,
            headers: {
                'user-agent': ':Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
            },
        });        
    } catch (error) {
        console.error(`error msg: ${error.message}`);
    }
}

function index(request, response) {
    const pagesList = ['/intersectionObserver', '/jqueryPlugin'];
    if(request.url === '/') request.url = '/jqueryPlugin';

    if(pagesList.indexOf(request.url) !== -1) {

        getImageList()
        .then((html) => {
            let imgList = [];
            const $ = cheerio.load(html.data);
            const $imgList = $("div").children('img.rg_i');

            $imgList.each(function (i, elem) {
                if($(elem).data("src") !== undefined) {
                    imgList.push({"image_url":$(elem).data("src")});
                }
            });
            return imgList;
        })
        .then((res) => {

            console.log(res);
            fs.readFile(`../../skin/javascript/lazyLoad${request.url}/index.ejs`, 'utf8', function(error, data){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(ejs.render(data, {imgList: JSON.stringify(res)}));

               
            })

        });

    } else {
        send404Message(response);
    }
}

const port = 3000;
http.createServer(index).listen(port);
