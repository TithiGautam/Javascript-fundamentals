function charaterMatch(regex,str){
    return str.match(regex);
}
console.log(charaterMatch(/\d/g,"abc123"));
console.log(charaterMatch(/[A-Z]/g,"Auri"));
console.log(charaterMatch(/[a-z]/g,"panna"));
console.log(charaterMatch(/[\W_]/g,"hii_thee"));