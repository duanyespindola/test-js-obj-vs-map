import { faker } from '@faker-js/faker/locale/pt_BR';

export class PeopleFactory{

    constructor(){}

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    makeOnePerson() {
        return {
            name: faker.name.firstName(),
            age: getRandomInt(18, 45),
            email: faker.internet.email(),
            id: faker.random.alphaNumeric(15)
        }
    }

    makePeople(count) {
        const people = []
        for (let index = 0; index < count; index++) {
            people.push(this.makeOnePerson() )
        }
    }
}
