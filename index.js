function receivesAFunction (callback) {
   return callback()
}
function returnsANamedFunction () {
    return function Rob() {
    }
}
function returnsAnAnonymousFunction () {
    return function () {   
    }
}