const a = "hello A";

function Myvar(){
    this.name = "my instance";
    this.hello = "hello Myvar";
}

module.exports = Myvar;
module.exports.a = a;

