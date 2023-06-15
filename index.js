import { PeopleFactory } from "./peopleFactory.js";
import { calculateAverageTime } from "./speedCalculator.js";
import {groupMapByKey, groupObjByKey} from './groupers.js'

const peopleFactory = new PeopleFactory;
const data = peopleFactory.makePeople(100*1000);


/**
 * Gropuping by age will result in few groups, so it will test
 * a lot of search by key, but few keys creations
 */
let result = calculateAverageTime(
    data, 
    groupObjByKey, 
    groupMapByKey, 
    'age',
)
console.log( `grouping by age, obj vs map: `, result)
