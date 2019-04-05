export class Comparators {

    public byID(person1:any, person2:any){
        return person1.id - person2.id;}

    public byName = function(person1:any, person2:any){
        return person1.firstName.localeCompare(person2.firstName);}

    public bySurname = function(person1:any, person2:any){
        return person1.lastName.localeCompare(person2.lastName);}

    public byGender = function(person1:any, person2:any){
        return person1.gender.localeCompare(person2.gender);}

    public byEmail = function(person1:any, person2:any){
        return person1.email.localeCompare(person2.email);}

    public byIncome = function(person1:any, person2:any){
        return person1.income - person2.income;}

    public byBirthsday = function(person1:any, person2:any){
        return person1.birthsday.localeCompare(person2.birthsday);}
    
    public byAge = function(person1:any, person2:any){
        return person1.age - person2.age;}
}