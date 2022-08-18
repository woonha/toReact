const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        ["/member/**", "/precedent/**", "/chart/**", "/post/**", "/comment/**", "/statute/**", "/chat/**", "/word/**"],
        createProxyMiddleware({
            target: 'http://localhost:8080/',
            changeOrigin: true,
        })
    ),
        app.use(
            ["/site"],
            createProxyMiddleware({
                target: 'https://opengraph.io/api/1.1/site/',
                changeOrigin: true,
                secure: false,
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
        )
    //이젠 직접보낼 일 없음
    // app.use(
    //     "/chatbot",
    //     createProxyMiddleware({
    //         target: 'http://3.39.242.42:5000/',
    //         changeOrigin: true,
    //         secure: false,
    //     })
    // )
}