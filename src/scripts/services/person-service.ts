
import { people } from './data'; //-> import danych o osobach
import { PersonListItem } from "../person-list-item";//-> impoert klasy PersonListItem

export class PagingInfo {
    constructor(public page: number, public count: number) {
    }
}

export class PersonService {

    public getPeople(pagingInfo: PagingInfo): Array<PersonListItem> {

        let begin = pagingInfo.page - 1;
        if (begin < 0) begin = 0;

        return people
            .slice(begin * pagingInfo.count,
                    begin * pagingInfo.count + pagingInfo.count)
            .map(x => {
                let person = new PersonListItem();
                person.firstname = x.firstName;
                person.lastname = x.lastName;
                person.gender = x.gender;
                person.email = x.email;
                person.income = +x.income
                person.age = x.age;
                person.birthsday = new Date(x.birthsday);
                person.id = x.id;
                return person;
            });
    }
}

var service = new PersonService();

console.log(service.getPeople(new PagingInfo(1, 5)));