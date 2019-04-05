
import { people } from './data'; //-> import danych o osobach
import { PersonListItem } from "../person-list-item";//-> impoert klasy PersonListItem
import {Comparators} from '../Comparators';

export class PagingInfo {
    constructor(public page: number, public count: number, public sorter: string) {
    }
}

export class PersonService {

    public getPeople(pagingInfo: PagingInfo): Array<PersonListItem> {

        let begin = pagingInfo.page - 1;
        if (begin < 0) begin = 0;

        let comparator = new Comparators();

        var byWhat = (function(sorter):any{
            switch(sorter){
                case 'id':
                    return comparator.byID;
                case 'name':
                    return comparator.byName;
                case 'surname':
                    return comparator.bySurname;
                case 'gender':
                    return comparator.byGender;
                case 'email':
                    return comparator.byEmail;
                case 'age':
                    return comparator.byAge;
                case 'birthsday':
                    return comparator.byBirthsday;
                case 'income':
                    return comparator.byIncome;
                case '':
                    return byWhat;
                default:
                    return comparator.byID;
            }
        })(pagingInfo.sorter)
       

        return people
            .sort(byWhat)            
            .slice(begin * pagingInfo.count,
                    begin * pagingInfo.count + pagingInfo.count)
                //-> z zaimportowanej kolekcji wybieramy stronę wynikow 
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
            //-> pobrane wyniki mapujemy na obiekty PersonListItem
    }

    public getFiltered (filterKind:string, filterParam: string): any{
        
        let filterExpression = new RegExp(filterParam,'i');

        return people
            //.filter(element=>element[filterKind]==filterExpression)
            .filter(element=>filterExpression.test(element[filterKind]))
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
            })};
    
    public getSearchResult (searchForm:JQuery): any{
        let sForm = searchForm;
        let sName = new RegExp('^'+sForm.find('.js-input-name').val(),'i');
        let sSurname = new RegExp('^'+sForm.find('.js-input-surname').val(),'i');
        let hAge = sForm.find('.js-input-age').val();
        let sAge = hAge.length !==0 ? new RegExp('^'+hAge+'$') : new RegExp('');
        let sGender = new RegExp('^'+sForm.find('.js-input-gender').val(),'i');
        let sEmail = new RegExp(sForm.find('.js-input-email').val(),'i');
        let sBirthsday = new RegExp(sForm.find('.js-input-birthsday').val());

        return people
            .filter(element=>sName.test(element.firstName)
                && sSurname.test(element.lastName)
                && sAge.test(String(element.age))
                && sGender.test(element.gender)
                && sEmail.test(element.email)
                && sBirthsday.test(element.birthsday))
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
            })

    }
}


