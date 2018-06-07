var loaderUtils = require('loader-utils')

module.exports = function(content) {
    const options = loaderUtils.getOptions(this) || {}

    let  url = loaderUtils.interpolateName(this, options.name, { content })
    this.emitFile(url, content)
    return 'module.exports = __webpack_public_path__ +' + JSON.stringify(url) 
}

module.exports.raw = true