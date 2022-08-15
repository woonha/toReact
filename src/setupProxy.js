const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        ["/member/**", "/precedent/**", "/chart/**", "/post/**", "/comment/**", "/statute/**", "/chat/**"],
        createProxyMiddleware({
            target: 'http://localhost:8080/',
            changeOrigin: true,
        })
    ),
        app.use(
            ["/kauth", "/oauth/**"],
            createProxyMiddleware({
                target: 'https://kauth.kakao.com',
                changeOrigin: true,
                secure: false,
            })
        ),
        app.use(
            ["/hoho"],
            createProxyMiddleware({
                target: 'https://accounts.kakao.com',
                changeOrigin: true,
                secure: false,
            })
        ),
        app.use(
            ["/v2/user"],
            createProxyMiddleware({
                target: 'kapi.kakao.com',
                changeOrigin: true,
                secure: false,
            })
        ),


        app.use(
            "/rss/search",
            createProxyMiddleware({
                target: 'https://news.google.com/',
                changeOrigin: true,
                secure: false,
            })
        ),
        app.use(
            "/chatbot",
            createProxyMiddleware({
                target: 'http://3.39.242.42:5000/',
                changeOrigin: true,
                secure: false,
            })
        )
}