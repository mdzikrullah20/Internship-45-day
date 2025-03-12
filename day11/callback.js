// Callback Function Kya Hota Hai
// ek function hota hai jo kisi doosre function ke andar argument ke roop me pass hota hai 
//  Yeh asynchronous programming ka ek important concept hai


function msg(name, callback) {
    console.log("Hello," + name);
    callback();
}
function data() {
    console.log("How are you feeling today");
}
msg("Zikrullah",data);
