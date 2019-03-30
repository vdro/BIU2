import { PersonTable } from "./person-table";

const advancedSearch = $('.js-adv-search');
const advancedSearchButton = $('.js-adv-search-btn');
const peopleTable = $('div#table');
const tableNext = $('#js-button-next');
const tablePrev = $('#js-button-prev');
const tableShow10 = $('#js-button-10');
const tableShow25 = $('#js-button-25');
const tableShow50 = $('#js-button-50');
const tableShow100 = $('#js-button-100');

class Startup {
    public static main(): void {
        advancedSearch.hide();
        advancedSearchButton.click((event) => Startup.onAdvancedSearchClicked(event));
        let table = new PersonTable(peopleTable);
        table.next();
        tableNext.click(() => table.next());
        tablePrev.click(() => table.prev());
       // tableShow10.click(()=> table.pageSize(10));
    }

    private static onAdvancedSearchClicked(event: JQueryEventObject) {
        event.preventDefault();
        if (advancedSearch.is(':visible')) {
            advancedSearch.fadeOut(1000);
        } else {
            advancedSearch.fadeIn(1000);
        }
    }
}

$(Startup.main)
