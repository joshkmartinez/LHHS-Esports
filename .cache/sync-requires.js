// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/joshuamartinez/Desktop/LHHS-Esports/.cache/dev-404-page.js")),
  "component---src-pages-hackathon-resources-js": preferDefault(require("/Users/joshuamartinez/Desktop/LHHS-Esports/src/pages/hackathon/resources.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/joshuamartinez/Desktop/LHHS-Esports/src/pages/index.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/joshuamartinez/Desktop/LHHS-Esports/.cache/json/dev-404-page.json"),
  "hackathon-resources.json": require("/Users/joshuamartinez/Desktop/LHHS-Esports/.cache/json/hackathon-resources.json"),
  "index.json": require("/Users/joshuamartinez/Desktop/LHHS-Esports/.cache/json/index.json")
}