var comparator = new Comparators();

function init(){
    $('.js-adv-search').hide();
    $('.js-adv-search-btn').click(function(event){
        event.preventDefault();
        if($('.js-adv-search').is(':visible')){
            $('.js-adv-search').fadeOut(1000);
        }else{
            $('.js-adv-search').fadeIn(1000);
        }
    });
    var viewModel = new PeopleTableViewModel({
        pageSize:25,
        count:data.length,
        context:$('div#table')
    });
    viewModel.next();
    $('#js-button-next').click(viewModel.next);
    $('#js-button-prev').click(viewModel.prev);
    $('.js-sort-name').click(function(){
         viewModel.sort(comparator.byName);
    });
}

$(function(){
    init();
})