export class Groupers {
    
    groupObjByKey(data, key) {
        const obj = {};
    
        data.forEach((el) => {
            const k = el[key]
            if (!obj[k]) {
                obj[k] = [];
            }
            obj[k].push(el);
        });
    
        return obj
    }

    groupObjByKeyUsingReduce(data, key) {
        return data.reduce((prev, curr) => {
            const k = curr[key]
            if (!prev[k])
                prev[k] = []
            prev[k].push(curr)
            return prev
        }, {})
    }
    
    groupMapByKey(data, key) {
        const map = new Map();
        data.forEach((el) => {
            const k = el[key]
            if (!map.has(k)) {
                map.set(k, []);
            }
            map.get(k).push(el);
        });
        return map
    }
}
