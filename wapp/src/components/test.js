


Array.prototype.mapYuri = function(callback, thisArg) {
    console.log(this, callback, thisArg)

    this.forEach(element => {
        callback(element)
    });
}
// var j = Array(2)
j = [1,2,3]
j.mapYuri(x => console.log(x))