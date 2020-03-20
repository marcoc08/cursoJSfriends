const normal = "Madonna";
const nameToArray = normal.split('');
const nameToreverse = nameToArray.reverse();
const finalname = nameToreverse.join('');
console.log(`${normal},
${nameToArray},
${nameToreverse},
${finalname}`
)

const finalname2 = normal.split('').reverse().join('');
console.log(finalname2);
