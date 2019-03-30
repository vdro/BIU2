function Comparators(){
    var self = this;
    self.byName = function(person1, person2){
        return person1.firstName.localeCompare(person2.firstName);
    }
    
    self.bySurname = function(person1, person2){
        return person1.lastName.localeCompare(person2.lastName);
    }
    
    self.byAge = function(person1, person2){
        return person1.age - person2.age
    }
}

