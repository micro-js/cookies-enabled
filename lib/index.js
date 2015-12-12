/**
 * Modules
 */

var isUndefined = require('@micro-js/is-undefined')

/**
 * Expose cookiesEnabled
 */

module.exports = cookiesEnabled['default'] = cookiesEnabled

/**
 * cookiesEnabled
 */

function cookiesEnabled () {
  if (!isUndefined(navigator.cookieEnabled) && navigator.cookieEnabled) {
    document.cookie = 'testcookie=null'
    var enabled = document.cookie.indexOf('testcookie') !== -1
    document.cookie = 'testcookie=null;expires=' + new Date((+new Date()) - 1)
    return enabled
  }

  return false
}
