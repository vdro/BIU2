import { PersonList } from "./person-list";
import { PersonService, PagingInfo } from "./Services/person-service";
import {Comparators} from "./Comparators";

export class PersonTable{

    private value: string;

    constructor(public context: JQuery) {
    }

    personService = new PersonService()
    list = new PersonList();
    currentPage = 0;
    pageSize = Number($("#howManyRows").val());
    
    
    
    

    public next() {
        this.list.clear();
        this.pageSize = Number($("#howManyRows").val());
        this.currentPage++;
        this.list.people = this.personService.getPeople(new PagingInfo(this.currentPage, this.pageSize, ''));
        this.refreshTable();
        $('#table').on("click",".js-sort-id",{comparer:"id",list:this.list,ps:this.personService,cp:this.currentPage, page:this.pageSize,cn:this.context},this.sortColumn);
        $('#table').on("click",".js-sort-name",{comparer:"name",list:this.list,ps:this.personService,cp:this.currentPage, page:this.pageSize,cn:this.context},this.sortColumn);
        $('#table').on("click",".js-sort-surnamename",{comparer:"surname",list:this.list,ps:this.personService,cp:this.currentPage, page:this.pageSize,cn:this.context},this.sortColumn);
        $('#table').on("click",".js-sort-gender",{comparer:"gender",list:this.list,ps:this.personService,cp:this.currentPage, page:this.pageSize,cn:this.context},this.sortColumn);
        $('#table').on("click",".js-sort-email",{comparer:"email",list:this.list,ps:this.personService,cp:this.currentPage, page:this.pageSize,cn:this.context},this.sortColumn);
        $('#table').on("click",".js-sort-age",{comparer:"age",list:this.list,ps:this.personService,cp:this.currentPage, page:this.pageSize,cn:this.context},this.sortColumn);
        $('#table').on("click",".js-sort-birthsday",{comparer:"birthsday",list:this.list,ps:this.personService,cp:this.currentPage, page:this.pageSize,cn:this.context},this.sortColumn);
        $('#table').on("click",".js-sort-income",{comparer:"income",list:this.list,ps:this.personService,cp:this.currentPage, page:this.pageSize,cn:this.context},this.sortColumn);

        $('#table').on("change","#idField",{filterKind:'id',filterParam:this,list:this.list,ps:this.personService,cp:this.currentPage, page:this.pageSize,cn:this.context},this.filterColumn);
        $('#table').on("change","#nameField",{filterKind:'firstName',filterParam:this,list:this.list,ps:this.personService,cp:this.currentPage, page:this.pageSize,cn:this.context},this.filterColumn);
        $('#table').on("change","#surnameField",{filterKind:'lastName',filterParam:this,list:this.list,ps:this.personService,cp:this.currentPage, page:this.pageSize,cn:this.context},this.filterColumn);
        $('#table').on("change","#genderField",{filterKind:'gender',filterParam:this,list:this.list,ps:this.personService,cp:this.currentPage, page:this.pageSize,cn:this.context},this.filterColumn);
        $('#table').on("change","#emailField",{filterKind:'email',filterParam:this,list:this.list,ps:this.personService,cp:this.currentPage, page:this.pageSize,cn:this.context},this.filterColumn);
        $('#table').on("change","#ageField",{filterKind:'age',filterParam:this,list:this.list,ps:this.personService,cp:this.currentPage, page:this.pageSize,cn:this.context},this.filterColumn);
        $('#table').on("change","#birthsdayField",{filterKind:'birthsday',filterParam:this,list:this.list,ps:this.personService,cp:this.currentPage, page:this.pageSize,cn:this.context},this.filterColumn);
        $('#table').on("change","#incomeField",{filterKind:'income',filterParam:this,list:this.list,ps:this.personService,cp:this.currentPage, page:this.pageSize,cn:this.context},this.filterColumn);
        
        
    }

    public prev(): void {
        this.list.clear();
        if (this.currentPage <= 1) return;
        this.currentPage--;
        this.list.people = this.personService.getPeople(new PagingInfo(this.currentPage, this.pageSize, ''));
        this.refreshTable();
    }

    public search(searchForm:JQuery){
        event.preventDefault();
        this.list.clear();
        this.list.people = this.personService.getSearchResult(searchForm);
        this.refreshTable();
    };

    private refreshTable() {
        this.context.html(this.list.toTable());
    }

    private sortColumn (event:any): any{
        let list = event.data.list;
        let currentPage = event.data.cp;
        let pageSize = event.data.page;
        let comparer = event.data.comparer
        list.clear();
        list.people = event.data.ps.getPeople(new PagingInfo(currentPage,pageSize, comparer));
        event.data.cn.html(list.toTable());
    }

    private filterColumn(event:any):any{

        let filterKind = event.data.filterKind
        let list = event.data.list;
        let currentPage = event.data.cp;
        let pageSize = event.data.page;

        list.clear();
        let filterParam = this.value;
        list.people = event.data.ps.getFiltered(filterKind,filterParam);
        event.data.cn.html(list.toTable());
        

        

    }
}