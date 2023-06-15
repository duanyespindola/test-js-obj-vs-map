//function to calculate the average from a array of numbers
function average(array){
    return array.reduce((acc, curr) => acc + curr, 0) / array.length;
}

/**
 * Will perform n times each function, 
 * randomizing wich one will go first on each roundand, 
 * and return the average time of execution of each function
 * 
 * @param {Array} data 
 * @param {Function} objectGrouperFunction 
 * @param {Function} mapGrouperFunction 
 * @param {String} keyToGroup 
 * @param {Number} times 
 * @returns Object with the average time of each function
 */
export function calculateAverageTime(
    data, 
    objectGrouperFunction,
    mapGrouperFunction, 
    keyToGroup,
    times = 1000
){
    const agregation = {
        obj: {
            id: 'obj',
            fn: objectGrouperFunction,
            arrayOfTimes: []
        },
        map: {
            id: 'map',
            fn: mapGrouperFunction,
            arrayOfTimes: []
        }
    }
    for(let i = 0; i < times; i++){
        const first = Math.random() > 0.5 ? agregation.obj : agregation.map;
        const second = first.id === 'obj' ? agregation.map : agregation.obj;
        let start = performance.now();
        first.fn(data, keyToGroup);
        let end = performance.now();
        first.arrayOfTimes.push(end - start);
        
        start = performance.now();
        second.fn(data, keyToGroup);
        end = performance.now();
        second.arrayOfTimes.push(end - start);

    }
    return {
        objAverageTime: average(agregation.obj.arrayOfTimes),
        mapAverageTime: average(agregation.map.arrayOfTimes)
    }
}
