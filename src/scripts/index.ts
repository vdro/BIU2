import { PersonTable } from "./person-table";

const advancedSearch = $('.js-adv-search');
const advancedSearchButton = $('.js-adv-search-btn');
const peopleTable = $('div#table');
const tableNext = $('#js-button-next');
const tablePrev = $('#js-button-prev');

class Startup {
    public static main(): void {
        advancedSearch.hide();
        advancedSearchButton.click((event) => Startup.onAdvancedSearchClicked(event));
        let table = new PersonTable(peopleTable);
        table.next();
        tableNext.click(() => table.next());
        tablePrev.click(() => table.prev());
    }

    private static onAdvancedSearchClicked(event: JQueryEventObject) {
        event.preventDefault();
        // -> powouje, że strona nie będzie się przeładowywac
        if (advancedSearch.is(':visible')) {
            advancedSearch.fadeOut(1000);
        } else {
            advancedSearch.fadeIn(1000);
        }
    }
}

$(Startup.main)
