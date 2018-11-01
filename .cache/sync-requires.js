// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/joshuamartinez/Desktop/LHHS-Esports/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/joshuamartinez/Desktop/LHHS-Esports/src/pages/index.js")),
  "component---src-pages-tournaments-js": preferDefault(require("/Users/joshuamartinez/Desktop/LHHS-Esports/src/pages/tournaments.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/joshuamartinez/Desktop/LHHS-Esports/.cache/json/dev-404-page.json"),
  "index.json": require("/Users/joshuamartinez/Desktop/LHHS-Esports/.cache/json/index.json"),
  "tournaments.json": require("/Users/joshuamartinez/Desktop/LHHS-Esports/.cache/json/tournaments.json")
}