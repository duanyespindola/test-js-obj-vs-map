import { PeopleFactory } from "./peopleFactory.js";
import { calculateAverageTime } from "./speedCalculator.js";
import {groupMapByKey, groupObjByKey} from './groupers.js'

const peopleFactory = new PeopleFactory;
const data = peopleFactory.makePeople(100*1000);


/**
 * Gropuping by age will result in few groups, so it will test
 * a lot of search by key, but few keys creations
 */
let result;


result = calculateAverageTime(
    data, 
    groupObjByKey, 
    groupMapByKey, 
    'age',
    500
)
console.log( `grouping by age, obj vs map: `, result)

result = calculateAverageTime(
    data, 
    groupObjByKey, 
    groupMapByKey, 
    'age',
    100,
    500
)
console.log( `grouping by age, max=500, obj vs map: `, result)

result = calculateAverageTime(
    data, 
    groupObjByKey, 
    groupMapByKey, 
    'age',
    100,
    2
)
console.log( `grouping by age, max=2, obj vs map: `, result)

