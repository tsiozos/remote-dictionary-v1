let next = 0;
const keys: Array<string> = [];
const vals: Array<string> = [];

function indexOfkey(key: string): int32
{
    return keys.indexOf(key);
}

function indexOfval(val: string): int32
{
    return vals.indexOf(val);
}

function readVal(key: string): string
{
    return vals[keys.indexOf(key)];
}

function writeVal(key: string, val: string)
{
    keys.push(key);
    vals.push(val);
}

function delVal(key: string): string
{
    return keys.removeAt(keys.indexOf(key));
}


writeVal("haha", "1");
writeVal("haha2", "12");
writeVal("haha3", "123");
writeVal("haha4", "1234");

console.log(readVal("haha"));
console.log(readVal("haha4"));

delVal("haha");

console.log(readVal("haha"));
