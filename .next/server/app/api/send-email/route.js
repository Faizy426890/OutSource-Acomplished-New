"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/send-email/route";
exports.ids = ["app/api/send-email/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.js&appDir=C%3A%5COutSource%20Accomplished%20New%5COutSource-Acomplished-New%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5COutSource%20Accomplished%20New%5COutSource-Acomplished-New&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.js&appDir=C%3A%5COutSource%20Accomplished%20New%5COutSource-Acomplished-New%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5COutSource%20Accomplished%20New%5COutSource-Acomplished-New&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_OutSource_Accomplished_New_OutSource_Acomplished_New_src_app_api_send_email_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/send-email/route.js */ \"(rsc)/./src/app/api/send-email/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/send-email/route\",\n        pathname: \"/api/send-email\",\n        filename: \"route\",\n        bundlePath: \"app/api/send-email/route\"\n    },\n    resolvedPagePath: \"C:\\\\OutSource Accomplished New\\\\OutSource-Acomplished-New\\\\src\\\\app\\\\api\\\\send-email\\\\route.js\",\n    nextConfigOutput,\n    userland: C_OutSource_Accomplished_New_OutSource_Acomplished_New_src_app_api_send_email_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/send-email/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VuZC1lbWFpbCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDT3V0U291cmNlJTIwQWNjb21wbGlzaGVkJTIwTmV3JTVDT3V0U291cmNlLUFjb21wbGlzaGVkLU5ldyU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q091dFNvdXJjZSUyMEFjY29tcGxpc2hlZCUyME5ldyU1Q091dFNvdXJjZS1BY29tcGxpc2hlZC1OZXcmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDOEM7QUFDM0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZW5meS1uZXh0anMvPzI3YjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcT3V0U291cmNlIEFjY29tcGxpc2hlZCBOZXdcXFxcT3V0U291cmNlLUFjb21wbGlzaGVkLU5ld1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxzZW5kLWVtYWlsXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zZW5kLWVtYWlsL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2VuZC1lbWFpbFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2VuZC1lbWFpbC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXE91dFNvdXJjZSBBY2NvbXBsaXNoZWQgTmV3XFxcXE91dFNvdXJjZS1BY29tcGxpc2hlZC1OZXdcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcc2VuZC1lbWFpbFxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zZW5kLWVtYWlsL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.js&appDir=C%3A%5COutSource%20Accomplished%20New%5COutSource-Acomplished-New%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5COutSource%20Accomplished%20New%5COutSource-Acomplished-New&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/send-email/route.js":
/*!*****************************************!*\
  !*** ./src/app/api/send-email/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n// Create transporter\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n    service: \"gmail\",\n    auth: {\n        user: \"weathersportifyteam@gmail.com\",\n        pass: \"stnyiaraqnatomgs\"\n    }\n});\n// Email template for admin\nconst getEmailTemplate = (fullName, phone, email, message)=>`\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\" />\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n  <title>New Contact Form Submission</title>\r\n</head>\r\n<body style=\"margin:0;padding:0;font-family:'Arial',sans-serif;background-color:#f4f4f4;\">\r\n  <table role=\"presentation\" style=\"width:100%;border-collapse:collapse;\">\r\n    <tr>\r\n      <td align=\"center\" style=\"padding:40px 0;\">\r\n        <table role=\"presentation\" style=\"width:600px;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 6px rgba(0,0,0,0.1);border-radius:10px;overflow:hidden;\">\r\n          <tr>\r\n            <td style=\"background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 30px;text-align:center;\">\r\n              <h1 style=\"margin:0;color:#fff;font-size:28px;font-weight:bold;text-transform:uppercase;letter-spacing:2px;\">\r\n                New Contact Form Submission\r\n              </h1>\r\n              <p style=\"margin:10px 0 0;color:#f0f0f0;font-size:14px;\">You have received a new message from your website</p>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"padding:40px 30px;\">\r\n              <table role=\"presentation\" style=\"width:100%;border-collapse:collapse;\">\r\n                <tr>\r\n                  <td style=\"padding:20px;background-color:#f8f9fa;border-radius:8px;\">\r\n                    <p style=\"margin:0;color:#6c757d;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;\">Full Name</p>\r\n                    <p style=\"margin:5px 0 0;color:#212529;font-size:16px;font-weight:600;\">${fullName}</p>\r\n                  </td>\r\n                </tr>\r\n                <tr><td style=\"height:15px;\"></td></tr>\r\n                <tr>\r\n                  <td style=\"padding:20px;background-color:#f8f9fa;border-radius:8px;\">\r\n                    <p style=\"margin:0;color:#6c757d;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;\">Email Address</p>\r\n                    <p style=\"margin:5px 0 0;\">\r\n                      <a href=\"mailto:${email}\" style=\"color:#667eea;text-decoration:none;\">${email}</a>\r\n                    </p>\r\n                  </td>\r\n                </tr>\r\n                <tr><td style=\"height:15px;\"></td></tr>\r\n                <tr>\r\n                  <td style=\"padding:20px;background-color:#f8f9fa;border-radius:8px;\">\r\n                    <p style=\"margin:0;color:#6c757d;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;\">Phone Number</p>\r\n                    <p style=\"margin:5px 0 0;\">\r\n                      <a href=\"tel:${phone}\" style=\"color:#667eea;text-decoration:none;\">${phone}</a>\r\n                    </p>\r\n                  </td>\r\n                </tr>\r\n                <tr><td style=\"height:15px;\"></td></tr>\r\n                <tr>\r\n                  <td style=\"padding:20px;background-color:#f8f9fa;border-radius:8px;\">\r\n                    <p style=\"margin:0;color:#6c757d;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;\">Message</p>\r\n                    <p style=\"margin:10px 0 0;color:#212529;font-size:15px;line-height:1.6;\">${message}</p>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"padding:0 30px 40px;text-align:center;\">\r\n              <a href=\"mailto:${email}\" style=\"display:inline-block;padding:15px 40px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;text-decoration:none;border-radius:50px;font-weight:600;font-size:16px;box-shadow:0 4px 15px rgba(102,126,234,0.4);transition:all 0.3s ease;\">\r\n                Reply to ${fullName}\r\n              </a>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"background-color:#f8f9fa;padding:30px;text-align:center;border-top:3px solid #667eea;\">\r\n              <p style=\"margin:0;color:#6c757d;font-size:13px;\">This email was sent from your website contact form</p>\r\n              <p style=\"margin:10px 0 0;color:#adb5bd;font-size:12px;\">© ${new Date().getFullYear()} Outsource Accomplished. All rights reserved.</p>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</body>\r\n</html>\r\n`;\n// Auto-reply template for user\nconst getAutoReplyTemplate = (fullName)=>`\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\" />\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n  <title>Thank You for Contacting Us</title>\r\n</head>\r\n<body style=\"margin:0;padding:0;font-family:'Arial',sans-serif;background-color:#f4f4f4;\">\r\n  <table role=\"presentation\" style=\"width:100%;border-collapse:collapse;\">\r\n    <tr>\r\n      <td align=\"center\" style=\"padding:40px 0;\">\r\n        <table role=\"presentation\" style=\"width:600px;background-color:#fff;box-shadow:0 4px 6px rgba(0,0,0,0.1);border-radius:10px;overflow:hidden;\">\r\n          <tr>\r\n            <td style=\"background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 30px;text-align:center;\">\r\n              <h1 style=\"margin:0;color:#fff;font-size:32px;font-weight:bold;\">Thank You! 🎉</h1>\r\n              <p style=\"margin:10px 0 0;color:#f0f0f0;font-size:16px;\">We've received your message</p>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"padding:40px 30px;\">\r\n              <p style=\"font-size:18px;color:#212529;\">Hi <strong>${fullName}</strong>,</p>\r\n              <p style=\"font-size:16px;color:#495057;line-height:1.8;\">Thank you for reaching out to us! We’ve received your message and our team will respond within 24 hours on business days.</p>\r\n              <p style=\"font-size:16px;color:#495057;line-height:1.8;\">Meanwhile, feel free to explore our services or connect with us on social media.</p>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"background-color:#f8f9fa;padding:30px;text-align:center;border-top:3px solid #667eea;\">\r\n              <p style=\"margin:0;color:#6c757d;font-size:13px;\">\r\n                <strong style=\"color:#212529;\">Outsource Accomplished</strong><br />\r\n                Your Digital Success Partner\r\n              </p>\r\n              <p style=\"margin:15px 0 0;color:#adb5bd;font-size:12px;\">© ${new Date().getFullYear()} Outsource Accomplished. All rights reserved.</p>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</body>\r\n</html>\r\n`;\n// ✅ Named export for POST (App Router compatible)\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        const { fullName, phone, email, message } = body;\n        if (!fullName || !phone || !email || !message) {\n            return Response.json({\n                message: \"All fields are required\"\n            }, {\n                status: 400\n            });\n        }\n        // Send to Admin\n        const adminMailOptions = {\n            from: '\"Website Contact Form\" <no-reply@growedgex.com>',\n            to: \"admin@growedgex.com\",\n            subject: `New Contact Form Submission from ${fullName}`,\n            html: getEmailTemplate(fullName, phone, email, message)\n        };\n        const userMailOptions = {\n            from: '\"GrowEdgeX Corp.\" <no-reply@growedgex.com>',\n            to: email,\n            subject: \"Thank You for Contacting Us!\",\n            html: getAutoReplyTemplate(fullName)\n        };\n        await transporter.sendMail(adminMailOptions);\n        await transporter.sendMail(userMailOptions);\n        return Response.json({\n            success: true,\n            message: \"Emails sent successfully!\"\n        });\n    } catch (error) {\n        console.error(\"Error sending email:\", error);\n        return Response.json({\n            success: false,\n            message: \"Failed to send email\",\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZW5kLWVtYWlsL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9DO0FBRXBDLHFCQUFxQjtBQUNyQixNQUFNQyxjQUFjRCx1REFBMEIsQ0FBQztJQUM3Q0csU0FBUztJQUNUQyxNQUFNO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0FBQ0Y7QUFFQSwyQkFBMkI7QUFDM0IsTUFBTUMsbUJBQW1CLENBQUNDLFVBQVVDLE9BQU9DLE9BQU9DLFVBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQTJCNkIsRUFBRUgsU0FBUzs7Ozs7Ozs7c0NBUWpFLEVBQUVFLE1BQU0sOENBQThDLEVBQUVBLE1BQU07Ozs7Ozs7OzttQ0FTakUsRUFBRUQsTUFBTSw4Q0FBOEMsRUFBRUEsTUFBTTs7Ozs7Ozs7NkZBUUosRUFBRUUsUUFBUTs7Ozs7Ozs7OEJBUXpFLEVBQUVELE1BQU07eUJBQ2IsRUFBRUYsU0FBUzs7Ozs7Ozt5RUFPcUMsRUFBRSxJQUFJSSxPQUFPQyxXQUFXLEdBQUc7Ozs7Ozs7OztBQVNwRyxDQUFDO0FBRUQsK0JBQStCO0FBQy9CLE1BQU1DLHVCQUF1QixDQUFDTixXQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrRUFxQnNCLEVBQUVBLFNBQVM7Ozs7Ozs7Ozs7O3lFQVdKLEVBQUUsSUFBSUksT0FBT0MsV0FBVyxHQUFHOzs7Ozs7Ozs7QUFTcEcsQ0FBQztBQUVELGtEQUFrRDtBQUMzQyxlQUFlRSxLQUFLQyxHQUFHO0lBQzVCLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1ELElBQUlFLElBQUk7UUFDM0IsTUFBTSxFQUFFVixRQUFRLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUUsR0FBR007UUFFNUMsSUFBSSxDQUFDVCxZQUFZLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTO1lBQzdDLE9BQU9RLFNBQVNELElBQUksQ0FBQztnQkFBRVAsU0FBUztZQUEwQixHQUFHO2dCQUFFUyxRQUFRO1lBQUk7UUFDN0U7UUFFQSxnQkFBZ0I7UUFDaEIsTUFBTUMsbUJBQW1CO1lBQ3ZCQyxNQUFNO1lBQ05DLElBQUk7WUFDSkMsU0FBUyxDQUFDLGlDQUFpQyxFQUFFaEIsU0FBUyxDQUFDO1lBQ3ZEaUIsTUFBTWxCLGlCQUFpQkMsVUFBVUMsT0FBT0MsT0FBT0M7UUFDakQ7UUFFQSxNQUFNZSxrQkFBa0I7WUFDdEJKLE1BQU07WUFDTkMsSUFBSWI7WUFDSmMsU0FBUztZQUNUQyxNQUFNWCxxQkFBcUJOO1FBQzdCO1FBRUEsTUFBTVAsWUFBWTBCLFFBQVEsQ0FBQ047UUFDM0IsTUFBTXBCLFlBQVkwQixRQUFRLENBQUNEO1FBRTNCLE9BQU9QLFNBQVNELElBQUksQ0FBQztZQUFFVSxTQUFTO1lBQU1qQixTQUFTO1FBQTRCO0lBQzdFLEVBQUUsT0FBT2tCLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDdEMsT0FBT1YsU0FBU0QsSUFBSSxDQUNsQjtZQUFFVSxTQUFTO1lBQU9qQixTQUFTO1lBQXdCa0IsT0FBT0EsTUFBTWxCLE9BQU87UUFBQyxHQUN4RTtZQUFFUyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3plbmZ5LW5leHRqcy8uL3NyYy9hcHAvYXBpL3NlbmQtZW1haWwvcm91dGUuanM/NWM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xyXG5cclxuLy8gQ3JlYXRlIHRyYW5zcG9ydGVyXHJcbmNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gIHNlcnZpY2U6IFwiZ21haWxcIixcclxuICBhdXRoOiB7XHJcbiAgICB1c2VyOiBcIndlYXRoZXJzcG9ydGlmeXRlYW1AZ21haWwuY29tXCIsXHJcbiAgICBwYXNzOiBcInN0bnlpYXJhcW5hdG9tZ3NcIixcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIEVtYWlsIHRlbXBsYXRlIGZvciBhZG1pblxyXG5jb25zdCBnZXRFbWFpbFRlbXBsYXRlID0gKGZ1bGxOYW1lLCBwaG9uZSwgZW1haWwsIG1lc3NhZ2UpID0+IGBcclxuPCFET0NUWVBFIGh0bWw+XHJcbjxodG1sIGxhbmc9XCJlblwiPlxyXG48aGVhZD5cclxuICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxyXG4gIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICA8dGl0bGU+TmV3IENvbnRhY3QgRm9ybSBTdWJtaXNzaW9uPC90aXRsZT5cclxuPC9oZWFkPlxyXG48Ym9keSBzdHlsZT1cIm1hcmdpbjowO3BhZGRpbmc6MDtmb250LWZhbWlseTonQXJpYWwnLHNhbnMtc2VyaWY7YmFja2dyb3VuZC1jb2xvcjojZjRmNGY0O1wiPlxyXG4gIDx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtcIj5cclxuICAgIDx0cj5cclxuICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9XCJwYWRkaW5nOjQwcHggMDtcIj5cclxuICAgICAgICA8dGFibGUgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPVwid2lkdGg6NjAwcHg7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3gtc2hhZG93OjAgNHB4IDZweCByZ2JhKDAsMCwwLDAuMSk7Ym9yZGVyLXJhZGl1czoxMHB4O292ZXJmbG93OmhpZGRlbjtcIj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIHN0eWxlPVwiYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCM2NjdlZWEgMCUsIzc2NGJhMiAxMDAlKTtwYWRkaW5nOjQwcHggMzBweDt0ZXh0LWFsaWduOmNlbnRlcjtcIj5cclxuICAgICAgICAgICAgICA8aDEgc3R5bGU9XCJtYXJnaW46MDtjb2xvcjojZmZmO2ZvbnQtc2l6ZToyOHB4O2ZvbnQtd2VpZ2h0OmJvbGQ7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOjJweDtcIj5cclxuICAgICAgICAgICAgICAgIE5ldyBDb250YWN0IEZvcm0gU3VibWlzc2lvblxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46MTBweCAwIDA7Y29sb3I6I2YwZjBmMDtmb250LXNpemU6MTRweDtcIj5Zb3UgaGF2ZSByZWNlaXZlZCBhIG5ldyBtZXNzYWdlIGZyb20geW91ciB3ZWJzaXRlPC9wPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIHN0eWxlPVwicGFkZGluZzo0MHB4IDMwcHg7XCI+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT1cIndpZHRoOjEwMCU7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO1wiPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nOjIwcHg7YmFja2dyb3VuZC1jb2xvcjojZjhmOWZhO2JvcmRlci1yYWRpdXM6OHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOjA7Y29sb3I6IzZjNzU3ZDtmb250LXNpemU6MTJweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6MXB4O2ZvbnQtd2VpZ2h0OjYwMDtcIj5GdWxsIE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46NXB4IDAgMDtjb2xvcjojMjEyNTI5O2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjYwMDtcIj4ke2Z1bGxOYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+PHRkIHN0eWxlPVwiaGVpZ2h0OjE1cHg7XCI+PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nOjIwcHg7YmFja2dyb3VuZC1jb2xvcjojZjhmOWZhO2JvcmRlci1yYWRpdXM6OHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOjA7Y29sb3I6IzZjNzU3ZDtmb250LXNpemU6MTJweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6MXB4O2ZvbnQtd2VpZ2h0OjYwMDtcIj5FbWFpbCBBZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOjVweCAwIDA7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOiR7ZW1haWx9XCIgc3R5bGU9XCJjb2xvcjojNjY3ZWVhO3RleHQtZGVjb3JhdGlvbjpub25lO1wiPiR7ZW1haWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+PHRkIHN0eWxlPVwiaGVpZ2h0OjE1cHg7XCI+PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nOjIwcHg7YmFja2dyb3VuZC1jb2xvcjojZjhmOWZhO2JvcmRlci1yYWRpdXM6OHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOjA7Y29sb3I6IzZjNzU3ZDtmb250LXNpemU6MTJweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6MXB4O2ZvbnQtd2VpZ2h0OjYwMDtcIj5QaG9uZSBOdW1iZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46NXB4IDAgMDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6JHtwaG9uZX1cIiBzdHlsZT1cImNvbG9yOiM2NjdlZWE7dGV4dC1kZWNvcmF0aW9uOm5vbmU7XCI+JHtwaG9uZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj48dGQgc3R5bGU9XCJoZWlnaHQ6MTVweDtcIj48L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6MjBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmOGY5ZmE7Ym9yZGVyLXJhZGl1czo4cHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46MDtjb2xvcjojNmM3NTdkO2ZvbnQtc2l6ZToxMnB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzoxcHg7Zm9udC13ZWlnaHQ6NjAwO1wiPk1lc3NhZ2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46MTBweCAwIDA7Y29sb3I6IzIxMjUyOTtmb250LXNpemU6MTVweDtsaW5lLWhlaWdodDoxLjY7XCI+JHttZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6MCAzMHB4IDQwcHg7dGV4dC1hbGlnbjpjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzoke2VtYWlsfVwiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzoxNXB4IDQwcHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCM2NjdlZWEgMCUsIzc2NGJhMiAxMDAlKTtjb2xvcjojZmZmO3RleHQtZGVjb3JhdGlvbjpub25lO2JvcmRlci1yYWRpdXM6NTBweDtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE2cHg7Ym94LXNoYWRvdzowIDRweCAxNXB4IHJnYmEoMTAyLDEyNiwyMzQsMC40KTt0cmFuc2l0aW9uOmFsbCAwLjNzIGVhc2U7XCI+XHJcbiAgICAgICAgICAgICAgICBSZXBseSB0byAke2Z1bGxOYW1lfVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2Y4ZjlmYTtwYWRkaW5nOjMwcHg7dGV4dC1hbGlnbjpjZW50ZXI7Ym9yZGVyLXRvcDozcHggc29saWQgIzY2N2VlYTtcIj5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT1cIm1hcmdpbjowO2NvbG9yOiM2Yzc1N2Q7Zm9udC1zaXplOjEzcHg7XCI+VGhpcyBlbWFpbCB3YXMgc2VudCBmcm9tIHlvdXIgd2Vic2l0ZSBjb250YWN0IGZvcm08L3A+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46MTBweCAwIDA7Y29sb3I6I2FkYjViZDtmb250LXNpemU6MTJweDtcIj7CqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gT3V0c291cmNlIEFjY29tcGxpc2hlZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gIDwvdGFibGU+XHJcbjwvYm9keT5cclxuPC9odG1sPlxyXG5gO1xyXG5cclxuLy8gQXV0by1yZXBseSB0ZW1wbGF0ZSBmb3IgdXNlclxyXG5jb25zdCBnZXRBdXRvUmVwbHlUZW1wbGF0ZSA9IChmdWxsTmFtZSkgPT4gYFxyXG48IURPQ1RZUEUgaHRtbD5cclxuPGh0bWwgbGFuZz1cImVuXCI+XHJcbjxoZWFkPlxyXG4gIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8+XHJcbiAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gIDx0aXRsZT5UaGFuayBZb3UgZm9yIENvbnRhY3RpbmcgVXM8L3RpdGxlPlxyXG48L2hlYWQ+XHJcbjxib2R5IHN0eWxlPVwibWFyZ2luOjA7cGFkZGluZzowO2ZvbnQtZmFtaWx5OidBcmlhbCcsc2Fucy1zZXJpZjtiYWNrZ3JvdW5kLWNvbG9yOiNmNGY0ZjQ7XCI+XHJcbiAgPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT1cIndpZHRoOjEwMCU7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO1wiPlxyXG4gICAgPHRyPlxyXG4gICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT1cInBhZGRpbmc6NDBweCAwO1wiPlxyXG4gICAgICAgIDx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgc3R5bGU9XCJ3aWR0aDo2MDBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym94LXNoYWRvdzowIDRweCA2cHggcmdiYSgwLDAsMCwwLjEpO2JvcmRlci1yYWRpdXM6MTBweDtvdmVyZmxvdzpoaWRkZW47XCI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZywjNjY3ZWVhIDAlLCM3NjRiYTIgMTAwJSk7cGFkZGluZzo0MHB4IDMwcHg7dGV4dC1hbGlnbjpjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgICAgPGgxIHN0eWxlPVwibWFyZ2luOjA7Y29sb3I6I2ZmZjtmb250LXNpemU6MzJweDtmb250LXdlaWdodDpib2xkO1wiPlRoYW5rIFlvdSEg8J+OiTwvaDE+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46MTBweCAwIDA7Y29sb3I6I2YwZjBmMDtmb250LXNpemU6MTZweDtcIj5XZSd2ZSByZWNlaXZlZCB5b3VyIG1lc3NhZ2U8L3A+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nOjQwcHggMzBweDtcIj5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZToxOHB4O2NvbG9yOiMyMTI1Mjk7XCI+SGkgPHN0cm9uZz4ke2Z1bGxOYW1lfTwvc3Ryb25nPiw8L3A+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6MTZweDtjb2xvcjojNDk1MDU3O2xpbmUtaGVpZ2h0OjEuODtcIj5UaGFuayB5b3UgZm9yIHJlYWNoaW5nIG91dCB0byB1cyEgV2XigJl2ZSByZWNlaXZlZCB5b3VyIG1lc3NhZ2UgYW5kIG91ciB0ZWFtIHdpbGwgcmVzcG9uZCB3aXRoaW4gMjQgaG91cnMgb24gYnVzaW5lc3MgZGF5cy48L3A+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6MTZweDtjb2xvcjojNDk1MDU3O2xpbmUtaGVpZ2h0OjEuODtcIj5NZWFud2hpbGUsIGZlZWwgZnJlZSB0byBleHBsb3JlIG91ciBzZXJ2aWNlcyBvciBjb25uZWN0IHdpdGggdXMgb24gc29jaWFsIG1lZGlhLjwvcD5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2Y4ZjlmYTtwYWRkaW5nOjMwcHg7dGV4dC1hbGlnbjpjZW50ZXI7Ym9yZGVyLXRvcDozcHggc29saWQgIzY2N2VlYTtcIj5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT1cIm1hcmdpbjowO2NvbG9yOiM2Yzc1N2Q7Zm9udC1zaXplOjEzcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPVwiY29sb3I6IzIxMjUyOTtcIj5PdXRzb3VyY2UgQWNjb21wbGlzaGVkPC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICBZb3VyIERpZ2l0YWwgU3VjY2VzcyBQYXJ0bmVyXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOjE1cHggMCAwO2NvbG9yOiNhZGI1YmQ7Zm9udC1zaXplOjEycHg7XCI+wqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IE91dHNvdXJjZSBBY2NvbXBsaXNoZWQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L3RkPlxyXG4gICAgPC90cj5cclxuICA8L3RhYmxlPlxyXG48L2JvZHk+XHJcbjwvaHRtbD5cclxuYDtcclxuXHJcbi8vIOKchSBOYW1lZCBleHBvcnQgZm9yIFBPU1QgKEFwcCBSb3V0ZXIgY29tcGF0aWJsZSlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgY29uc3QgeyBmdWxsTmFtZSwgcGhvbmUsIGVtYWlsLCBtZXNzYWdlIH0gPSBib2R5O1xyXG5cclxuICAgIGlmICghZnVsbE5hbWUgfHwgIXBob25lIHx8ICFlbWFpbCB8fCAhbWVzc2FnZSkge1xyXG4gICAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWRcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNlbmQgdG8gQWRtaW5cclxuICAgIGNvbnN0IGFkbWluTWFpbE9wdGlvbnMgPSB7XHJcbiAgICAgIGZyb206ICdcIldlYnNpdGUgQ29udGFjdCBGb3JtXCIgPG5vLXJlcGx5QGdyb3dlZGdleC5jb20+JyxcclxuICAgICAgdG86IFwiYWRtaW5AZ3Jvd2VkZ2V4LmNvbVwiLFxyXG4gICAgICBzdWJqZWN0OiBgTmV3IENvbnRhY3QgRm9ybSBTdWJtaXNzaW9uIGZyb20gJHtmdWxsTmFtZX1gLFxyXG4gICAgICBodG1sOiBnZXRFbWFpbFRlbXBsYXRlKGZ1bGxOYW1lLCBwaG9uZSwgZW1haWwsIG1lc3NhZ2UpLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1c2VyTWFpbE9wdGlvbnMgPSB7XHJcbiAgICAgIGZyb206ICdcIkdyb3dFZGdlWCBDb3JwLlwiIDxuby1yZXBseUBncm93ZWRnZXguY29tPicsXHJcbiAgICAgIHRvOiBlbWFpbCxcclxuICAgICAgc3ViamVjdDogXCJUaGFuayBZb3UgZm9yIENvbnRhY3RpbmcgVXMhXCIsXHJcbiAgICAgIGh0bWw6IGdldEF1dG9SZXBseVRlbXBsYXRlKGZ1bGxOYW1lKSxcclxuICAgIH07XHJcblxyXG4gICAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwoYWRtaW5NYWlsT3B0aW9ucyk7XHJcbiAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh1c2VyTWFpbE9wdGlvbnMpO1xyXG5cclxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJFbWFpbHMgc2VudCBzdWNjZXNzZnVsbHkhXCIgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzZW5kaW5nIGVtYWlsOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbihcclxuICAgICAgeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJGYWlsZWQgdG8gc2VuZCBlbWFpbFwiLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJzZXJ2aWNlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwiZ2V0RW1haWxUZW1wbGF0ZSIsImZ1bGxOYW1lIiwicGhvbmUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRBdXRvUmVwbHlUZW1wbGF0ZSIsIlBPU1QiLCJyZXEiLCJib2R5IiwianNvbiIsIlJlc3BvbnNlIiwic3RhdHVzIiwiYWRtaW5NYWlsT3B0aW9ucyIsImZyb20iLCJ0byIsInN1YmplY3QiLCJodG1sIiwidXNlck1haWxPcHRpb25zIiwic2VuZE1haWwiLCJzdWNjZXNzIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/send-email/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.js&appDir=C%3A%5COutSource%20Accomplished%20New%5COutSource-Acomplished-New%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5COutSource%20Accomplished%20New%5COutSource-Acomplished-New&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();