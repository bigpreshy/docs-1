"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[80053],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":"unreleased","badge":true,"noIndex":false,"className":"docs-version-current","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\ud83d\udc4b Welcome","href":"/next/","docId":"welcome"},{"type":"category","label":"API","items":[{"type":"link","label":"\ud83d\udce6 Fiber","href":"/next/api/fiber","docId":"api/fiber"},{"type":"link","label":"\ud83d\ude80 App","href":"/next/api/app","docId":"api/app"},{"type":"link","label":"\ud83e\udde0 Ctx","href":"/next/api/ctx","docId":"api/ctx"},{"type":"link","label":"\ud83d\udccb Constants","href":"/next/api/constants","docId":"api/constants"},{"type":"link","label":"\ud83c\udf0e Client","href":"/next/api/client","docId":"api/client"},{"type":"link","label":"\ud83d\udcc3 Log","href":"/next/api/log","docId":"api/log"},{"type":"category","label":"\ud83e\uddec Middleware","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Adaptor","href":"/next/api/middleware/adaptor","docId":"api/middleware/adaptor"},{"type":"link","label":"BasicAuth","href":"/next/api/middleware/basicauth","docId":"api/middleware/basicauth"},{"type":"link","label":"Cache","href":"/next/api/middleware/cache","docId":"api/middleware/cache"},{"type":"link","label":"Compress","href":"/next/api/middleware/compress","docId":"api/middleware/compress"},{"type":"link","label":"CORS","href":"/next/api/middleware/cors","docId":"api/middleware/cors"},{"type":"link","label":"CSRF","href":"/next/api/middleware/csrf","docId":"api/middleware/csrf"},{"type":"link","label":"EarlyData","href":"/next/api/middleware/earlydata","docId":"api/middleware/earlydata"},{"type":"link","label":"Encrypt Cookie","href":"/next/api/middleware/encryptcookie","docId":"api/middleware/encryptcookie"},{"type":"link","label":"EnvVar","href":"/next/api/middleware/envvar","docId":"api/middleware/envvar"},{"type":"link","label":"ETag","href":"/next/api/middleware/etag","docId":"api/middleware/etag"},{"type":"link","label":"ExpVar","href":"/next/api/middleware/expvar","docId":"api/middleware/expvar"},{"type":"link","label":"Favicon","href":"/next/api/middleware/favicon","docId":"api/middleware/favicon"},{"type":"link","label":"FileSystem","href":"/next/api/middleware/filesystem","docId":"api/middleware/filesystem"},{"type":"link","label":"Helmet","href":"/next/api/middleware/helmet","docId":"api/middleware/helmet"},{"type":"link","label":"Idempotency","href":"/next/api/middleware/idempotency","docId":"api/middleware/idempotency"},{"type":"link","label":"Keyauth","href":"/next/api/middleware/keyauth","docId":"api/middleware/keyauth"},{"type":"link","label":"Limiter","href":"/next/api/middleware/limiter","docId":"api/middleware/limiter"},{"type":"link","label":"Logger","href":"/next/api/middleware/logger","docId":"api/middleware/logger"},{"type":"link","label":"Monitor","href":"/next/api/middleware/monitor","docId":"api/middleware/monitor"},{"type":"link","label":"Pprof","href":"/next/api/middleware/pprof","docId":"api/middleware/pprof"},{"type":"link","label":"Proxy","href":"/next/api/middleware/proxy","docId":"api/middleware/proxy"},{"type":"link","label":"Recover","href":"/next/api/middleware/recover","docId":"api/middleware/recover"},{"type":"link","label":"Redirect","href":"/next/api/middleware/redirect","docId":"api/middleware/redirect"},{"type":"link","label":"RequestID","href":"/next/api/middleware/requestid","docId":"api/middleware/requestid"},{"type":"link","label":"Rewrite","href":"/next/api/middleware/rewrite","docId":"api/middleware/rewrite"},{"type":"link","label":"Session","href":"/next/api/middleware/session","docId":"api/middleware/session"},{"type":"link","label":"Skip","href":"/next/api/middleware/skip","docId":"api/middleware/skip"},{"type":"link","label":"Timeout","href":"/next/api/middleware/timeout","docId":"api/middleware/timeout"}],"href":"/next/category/-middleware"}],"collapsed":false,"collapsible":true,"href":"/next/category/api"},{"type":"category","label":"Guide","items":[{"type":"link","label":"\ud83d\udd0c Routing","href":"/next/guide/routing","docId":"guide/routing"},{"type":"link","label":"\ud83c\udfad Grouping","href":"/next/guide/grouping","docId":"guide/grouping"},{"type":"link","label":"\ud83d\udcdd Templates","href":"/next/guide/templates","docId":"guide/templates"},{"type":"link","label":"\ud83d\udc1b Error Handling","href":"/next/guide/error-handling","docId":"guide/error-handling"},{"type":"link","label":"\ud83d\udd0e Validation","href":"/next/guide/validation","docId":"guide/validation"},{"type":"link","label":"\ud83e\ude9d Hooks","href":"/next/guide/hooks","docId":"guide/hooks"},{"type":"link","label":"\u26a1 Make Fiber Faster","href":"/next/guide/faster-fiber","docId":"guide/faster-fiber"}],"collapsed":false,"collapsible":true,"href":"/next/category/guide"},{"type":"category","label":"Extra","items":[{"type":"link","label":"\ud83e\udd14 FAQ","href":"/next/extra/faq","docId":"extra/faq"},{"type":"link","label":"\ud83d\udcca Benchmarks","href":"/next/extra/benchmarks","docId":"extra/benchmarks"}],"collapsed":false,"collapsible":true,"href":"/next/category/extra"}]},"docs":{"api/app":{"id":"api/app","title":"\ud83d\ude80 App","description":"The app instance conventionally denotes the Fiber application.","sidebar":"tutorialSidebar"},"api/client":{"id":"api/client","title":"\ud83c\udf0e Client","description":"The Client struct represents the Fiber HTTP Client.","sidebar":"tutorialSidebar"},"api/constants":{"id":"api/constants","title":"\ud83d\udccb Constants","description":"Some constants for Fiber.","sidebar":"tutorialSidebar"},"api/ctx":{"id":"api/ctx","title":"\ud83e\udde0 Ctx","description":"The Ctx struct represents the Context which hold the HTTP request and response. It has methods for the request query string, parameters, body, HTTP headers, and so on.","sidebar":"tutorialSidebar"},"api/fiber":{"id":"api/fiber","title":"\ud83d\udce6 Fiber","description":"Fiber represents the fiber package where you start to create an instance.","sidebar":"tutorialSidebar"},"api/log":{"id":"api/log","title":"\ud83d\udcc3 Log","description":"Fiber\'s built-in log package","sidebar":"tutorialSidebar"},"api/middleware/adaptor":{"id":"api/middleware/adaptor","title":"Adaptor","description":"Converter for net/http handlers to/from Fiber request handlers, special thanks to @arsmn!","sidebar":"tutorialSidebar"},"api/middleware/basicauth":{"id":"api/middleware/basicauth","title":"BasicAuth","description":"Basic Authentication middleware for Fiber that provides an HTTP basic authentication. It calls the next handler for valid credentials and 401 Unauthorized or a custom response for missing or invalid credentials.","sidebar":"tutorialSidebar"},"api/middleware/cache":{"id":"api/middleware/cache","title":"Cache","description":"Cache middleware for Fiber designed to intercept responses and cache them. This middleware will cache the Body, Content-Type and StatusCode using the c.Path() as unique identifier. Special thanks to @codemicro for creating this middleware for Fiber core!","sidebar":"tutorialSidebar"},"api/middleware/compress":{"id":"api/middleware/compress","title":"Compress","description":"Compression middleware for Fiber that will compress the response using gzip, deflate and brotli compression depending on the Accept-Encoding header.","sidebar":"tutorialSidebar"},"api/middleware/cors":{"id":"api/middleware/cors","title":"CORS","description":"CORS middleware for Fiber that can be used to enable Cross-Origin Resource Sharing with various options.","sidebar":"tutorialSidebar"},"api/middleware/csrf":{"id":"api/middleware/csrf","title":"CSRF","description":"CSRF middleware for Fiber that provides Cross-site request forgery protection by passing a csrf token via cookies. This cookie value will be used to compare against the client csrf token on requests, other than those defined as \\"safe\\" by RFC7231 \\\\(GET, HEAD, OPTIONS, or TRACE\\\\). When the csrf token is invalid, this middleware will return the fiber.ErrForbidden error.","sidebar":"tutorialSidebar"},"api/middleware/earlydata":{"id":"api/middleware/earlydata","title":"EarlyData","description":"The Early Data middleware for Fiber adds support for TLS 1.3\'s early data (\\"0-RTT\\") feature.","sidebar":"tutorialSidebar"},"api/middleware/encryptcookie":{"id":"api/middleware/encryptcookie","title":"Encrypt Cookie","description":"Encrypt middleware for Fiber which encrypts cookie values. Note: this middleware does not encrypt cookie names.","sidebar":"tutorialSidebar"},"api/middleware/envvar":{"id":"api/middleware/envvar","title":"EnvVar","description":"EnvVar middleware for Fiber that can be used to expose environment variables with various options.","sidebar":"tutorialSidebar"},"api/middleware/etag":{"id":"api/middleware/etag","title":"ETag","description":"ETag middleware for Fiber that lets caches be more efficient and save bandwidth, as a web server does not need to resend a full response if the content has not changed.","sidebar":"tutorialSidebar"},"api/middleware/expvar":{"id":"api/middleware/expvar","title":"ExpVar","description":"Expvar middleware for Fiber that serves via its HTTP server runtime exposed variants in the JSON format. The package is typically only imported for the side effect of registering its HTTP handlers. The handled path is /debug/vars.","sidebar":"tutorialSidebar"},"api/middleware/favicon":{"id":"api/middleware/favicon","title":"Favicon","description":"Favicon middleware for Fiber that ignores favicon requests or caches a provided icon in memory to improve performance by skipping disk access. User agents request favicon.ico frequently and indiscriminately, so you may wish to exclude these requests from your logs by using this middleware before your logger middleware.","sidebar":"tutorialSidebar"},"api/middleware/filesystem":{"id":"api/middleware/filesystem","title":"FileSystem","description":"Filesystem middleware for Fiber that enables you to serve files from a directory.","sidebar":"tutorialSidebar"},"api/middleware/helmet":{"id":"api/middleware/helmet","title":"Helmet","description":"Helmet middleware helps secure your apps by setting various HTTP headers.","sidebar":"tutorialSidebar"},"api/middleware/idempotency":{"id":"api/middleware/idempotency","title":"Idempotency","description":"Idempotency middleware for Fiber allows for fault-tolerant APIs where duplicate requests \u2014 for example due to networking issues on the client-side \u2014 do not erroneously cause the same action performed multiple times on the server-side.","sidebar":"tutorialSidebar"},"api/middleware/keyauth":{"id":"api/middleware/keyauth","title":"Keyauth","description":"Key auth middleware provides a key based authentication.","sidebar":"tutorialSidebar"},"api/middleware/limiter":{"id":"api/middleware/limiter","title":"Limiter","description":"Limiter middleware for Fiber that is used to limit repeat requests to public APIs and/or endpoints such as password reset. It is also useful for API clients, web crawling, or other tasks that need to be throttled.","sidebar":"tutorialSidebar"},"api/middleware/logger":{"id":"api/middleware/logger","title":"Logger","description":"Logger middleware for Fiber that logs HTTP request/response details.","sidebar":"tutorialSidebar"},"api/middleware/monitor":{"id":"api/middleware/monitor","title":"Monitor","description":"Monitor middleware for Fiber that reports server metrics, inspired by express-status-monitor","sidebar":"tutorialSidebar"},"api/middleware/pprof":{"id":"api/middleware/pprof","title":"Pprof","description":"Pprof middleware for Fiber that serves via its HTTP server runtime profiling data in the format expected by the pprof visualization tool. The package is typically only imported for the side effect of registering its HTTP handlers. The handled paths all begin with /debug/pprof/.","sidebar":"tutorialSidebar"},"api/middleware/proxy":{"id":"api/middleware/proxy","title":"Proxy","description":"Proxy middleware for Fiber that allows you to proxy requests to multiple servers.","sidebar":"tutorialSidebar"},"api/middleware/recover":{"id":"api/middleware/recover","title":"Recover","description":"Recover middleware for Fiber that recovers from panics anywhere in the stack chain and handles the control to the centralized ErrorHandler.","sidebar":"tutorialSidebar"},"api/middleware/redirect":{"id":"api/middleware/redirect","title":"Redirect","description":"Redirection middleware for Fiber.","sidebar":"tutorialSidebar"},"api/middleware/requestid":{"id":"api/middleware/requestid","title":"RequestID","description":"RequestID middleware for Fiber that adds an indentifier to the response.","sidebar":"tutorialSidebar"},"api/middleware/rewrite":{"id":"api/middleware/rewrite","title":"Rewrite","description":"Rewrite middleware rewrites the URL path based on provided rules. It can be helpful for backward compatibility or just creating cleaner and more descriptive links.","sidebar":"tutorialSidebar"},"api/middleware/session":{"id":"api/middleware/session","title":"Session","description":"Session middleware for Fiber.","sidebar":"tutorialSidebar"},"api/middleware/skip":{"id":"api/middleware/skip","title":"Skip","description":"Skip middleware for Fiber that skips a wrapped handler if a predicate is true.","sidebar":"tutorialSidebar"},"api/middleware/timeout":{"id":"api/middleware/timeout","title":"Timeout","description":"There exist two distinct implementations of timeout middleware Fiber.","sidebar":"tutorialSidebar"},"extra/benchmarks":{"id":"extra/benchmarks","title":"\ud83d\udcca Benchmarks","description":"These benchmarks aim to compare the performance of Fiber and other web frameworks.","sidebar":"tutorialSidebar"},"extra/faq":{"id":"extra/faq","title":"\ud83e\udd14 FAQ","description":"List of frequently asked questions. Feel free to open an issue to add your question to this page.","sidebar":"tutorialSidebar"},"guide/error-handling":{"id":"guide/error-handling","title":"\ud83d\udc1b Error Handling","description":"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.","sidebar":"tutorialSidebar"},"guide/faster-fiber":{"id":"guide/faster-fiber","title":"\u26a1 Make Fiber Faster","description":"Custom JSON Encoder/Decoder","sidebar":"tutorialSidebar"},"guide/grouping":{"id":"guide/grouping","title":"\ud83c\udfad Grouping","description":"In general, the Group functionality in Fiber behaves similarly to ExpressJS. Groups are declared virtually and all routes declared within the group are flattened into a single list with a prefix, which is then checked by the framework in the order it was declared. This means that the behavior of Group in Fiber is identical to that of ExpressJS.","sidebar":"tutorialSidebar"},"guide/hooks":{"id":"guide/hooks","title":"\ud83e\ude9d Hooks","description":"With Fiber v2.30.0, you can execute custom user functions when to run some methods. Here is a list of this hooks:","sidebar":"tutorialSidebar"},"guide/routing":{"id":"guide/routing","title":"\ud83d\udd0c Routing","description":"Routing refers to how an application\'s endpoints (URIs) respond to client requests.","sidebar":"tutorialSidebar"},"guide/templates":{"id":"guide/templates","title":"\ud83d\udcdd Templates","description":"Fiber supports server-side template engines.","sidebar":"tutorialSidebar"},"guide/validation":{"id":"guide/validation","title":"\ud83d\udd0e Validation","description":"Validator package","sidebar":"tutorialSidebar"},"partials/routing/route-handlers":{"id":"partials/routing/route-handlers","title":"Route Handlers","description":"Registers a route bound to a specific HTTP method."},"welcome":{"id":"welcome","title":"\ud83d\udc4b Welcome","description":"An online API documentation with examples so you can start building web apps with Fiber right away!","sidebar":"tutorialSidebar"}}}')}}]);