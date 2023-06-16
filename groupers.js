
export function  groupObjByKey(data, key, max=0) {
    const obj = {};
    let count = 0;
    data.forEach((el) => {
        const k = el[key]
        if( max && obj[k] && obj[k].length >= max){
            delete obj[k]
            count++
        }
        if (!obj[k]) {
            obj[k] = [];
        }
        obj[k].push(el);
    });
    if(max) console.log(`deleted ${count} keys`)
    return obj
}
    
export function groupMapByKey(data, key,max=0) {
    const map = new Map();
    data.forEach((el) => {
        const k = el[key]
        if(max && map.has(k) && map.get(k).length >= max){
            map.delete(k)
        }
        if (!map.has(k)) {
            map.set(k, []);
        }
        map.get(k).push(el);
    });
    return map
}
