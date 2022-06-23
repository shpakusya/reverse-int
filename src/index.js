module.exports = function reverse (n) {
    let nmod = Math.abs(n);
    let stringarr = nmod.toString().split('');
    let reversedarr = stringarr.reverse();
    let reversed='';
    console.log(reversedarr)
    for(let i = 0; i<reversedarr.length;i++){
      reversed+=Number(reversedarr[i]);
    }
    return reversed;
}
