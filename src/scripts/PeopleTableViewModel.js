function PeopleTableViewModel(config){
    var self = this;
    self.people = new ListOfPeople();
    self.currentPage = 0;
    self.pageSize = config.pageSize;
    self.context = config.context;

    self.next = function(){
        self.people.clear();
        var begin = (self.currentPage)*self.pageSize;
        var end =(self.currentPage+1)*self.pageSize;
        getData(begin,end);    
        self.currentPage++;
        refreshTable();
    }
    
    self.prev = function(){
        self.people.clear();
        if(self.currentPage-1>=0){
            self.currentPage--;
        }
        var begin = (self.currentPage)*self.pageSize;
        var end =(self.currentPage+1)*self.pageSize;
        getData(begin,end);    
        refreshTable();
    }
    
    self.sort = function(comparer){
        data.sort(comparer);
        self.currentPage=0;
        self.next();
    }
    
    var getData = function(begin, end){
        if(end>data.length){
            end=data.length
        }
        if(begin<0) {
            begin =0;
        }
        for(var i = begin; i<end;i+=1){
            self.people.addPerson(data[i]);
        }  
    }
    
    var refreshTable = function(){
        self.context.html(self.people.toTable());
        $('.js-sort-name').click(function(){
        var comparator = new Comparators();
         self.sort(comparator.byName);
        });
    }
}