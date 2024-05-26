function extractGroups(regex,str){
    let matches = regex.exec(str);
    if(matches){
        return matches.groups;
    }else{
        return null;
    }
}
const dateRegex = /(?<day>\d{2})-(?<month>\d{2})-(?<year>\d{4})/;
console.log(extractGroups(dateRegex,"yesterday 25-05-2024"));