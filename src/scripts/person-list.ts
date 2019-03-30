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
        return '<tr><th>Id</th>'
            + ' <th><button class="btn btn-sm btn-danger js-sort-name">Name</button></th>'
            + ' <th><button class="btn btn-sm btn-danger js-sort-name">Surname</button></th>'
            + ' <th><button class="btn btn-sm btn-danger js-sort-name">Gender</button></th>'
            + ' <th><button class="btn btn-sm btn-danger js-sort-name">Email</button></th>'
            + ' <th><button class="btn btn-sm btn-danger js-sort-name">Age</button></th>'
            + ' <th><button class="btn btn-sm btn-danger js-sort-name">Birthsday</button></th>'
            + ' <th><button class="btn btn-sm btn-danger js-sort-name">Income</button></th>'
            + '</tr>'
    }
}