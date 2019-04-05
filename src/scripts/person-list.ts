import { PersonListItem } from "./person-list-item";

export class PersonList {

    private _people : Array<PersonListItem> = [];
    public get people() : Array<PersonListItem> {
        return this._people;
    }
    public set people(v : Array<PersonListItem>) {
        this._people = v;
    }
    
    public toTable(): string {
        var table = '<table class="table table-striped table-hover table-bordered">';
        table += this.generateTableHeader();
        this._people.forEach(person => table += person.toTableRow());
        table += '</table>'
        return table;
    }


    public clear() {
        this._people = [];
    }
    
    private generateTableHeader(): string {
        return '<tr><th><button  class="btn btn-sm btn-danger js-sort-id">ID</button></br>'
            + '<input type="text" id="idField" value=""></th>'
            + ' <th><button  class="btn btn-sm btn-danger js-sort-name">Name</button></br>'
            + '<input type="text" id="nameField" value=""></th>'
            + ' <th><button  class="btn btn-sm btn-danger js-sort-surnamename">Surname</button></br>'
            + '<input type="text" id="surnameField" value=""></th>'
            + ' <th><button  class="btn btn-sm btn-danger js-sort-gender">Gender</button></br>'
            + '<input type="text" id="genderField" value=""></th>'
            + ' <th><button  class="btn btn-sm btn-danger js-sort-email">Email</button></br>'
            + '<input type="text" id="emailField" value=""></th>'
            + ' <th><button  class="btn btn-sm btn-danger js-sort-age">Age</button></br>'
            + '<input type="text" id="ageField" value=""></th>'
            + ' <th><button  class="btn btn-sm btn-danger js-sort-birthsday">Birthsday</button></br>'
            + '<input type="text" id="birthsdayField" value=""></th>'
            + ' <th><button  class="btn btn-sm btn-danger js-sort-income">Income</button></br>'
            + '<input type="text" id="incomeField" value=""></th>'
            + '</tr>'
    }
}