import { Groupers } from "./groupers";
import { PeopleFactory } from "./peopleFactory";
import { calculateAverageTime } from "./speedCalculator";


const peopleFactory = new PeopleFactory;
const data = peopleFactory.makePeople(100*1000);

const groupers = new Groupers;
/**
 * Gropuping by age will result in few groups, so it will test
 * a lot of search by key, but few keys creations
 */
calculateAverageTime()
let result = calculateAverageTime(
    data, 
    groupers.groupObjByKey, 
    groupers.groupMapByKey, 
    'age',
)
console.log( `grouping by age, obj vs map: `, result)
