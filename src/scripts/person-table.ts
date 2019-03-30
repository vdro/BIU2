import { PersonList } from "./person-list";
import { PersonService, PagingInfo } from "./Services/person-service";

export class PersonTable{

    constructor(public context: JQuery) {
    }
    personService = new PersonService()
    list = new PersonList();
    currentPage = 0;
    pageSize = 10;

    public next() {
        this.list.clear();
        this.currentPage++;
        this.list.people = this.personService.getPeople(new PagingInfo(this.currentPage, this.pageSize));
        this.refreshTable();
    }

    public prev(): void {
        this.list.clear();
        if (this.currentPage <= 1) return;
        this.currentPage--;
        this.list.people = this.personService.getPeople(new PagingInfo(this.currentPage, this.pageSize));
        this.refreshTable();
    }

    private refreshTable() {
        this.context.html(this.list.toTable());
    }
}