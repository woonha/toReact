const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        ["/member/**", "/precedent/**", "/chart/**", "/post/**", "/comment/**", "/statute/**"],
        createProxyMiddleware({
            target: 'http://3.37.220.80:8080',
            changeOrigin: true,
        })
    ),
        app.use(
            ["/kauth", "/oauth/**"],
            createProxyMiddleware({
                target: 'https://kauth.kakao.com',
                changeOrigin: true,
            })
        ),
        app.use(
            ["/hoho"],
            createProxyMiddleware({
                target: 'https://accounts.kakao.com',
                changeOrigin: true,
            })
        ),
        app.use(
            ["/v2/user"],
            createProxyMiddleware({
                target: 'kapi.kakao.com',
                changeOrigin: true,
            })
        ),


        app.use(
            "/rss/search",
            createProxyMiddleware({
                target: 'https://news.google.com/',
                changeOrigin: true,
            })
        ),
        app.use(
            "/chatbot",
            createProxyMiddleware({
                target: 'http://3.39.242.42:5000/',
                changeOrigin: true,
            })
        )
}