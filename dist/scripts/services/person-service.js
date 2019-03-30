"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var person_list_item_1 = require("../person-list-item");
var PagingInfo = /** @class */ (function () {
    function PagingInfo(page, count) {
        this.page = page;
        this.count = count;
    }
    return PagingInfo;
}());
exports.PagingInfo = PagingInfo;
var PErsonService = /** @class */ (function () {
    function PErsonService() {
    }
    PErsonService.prototype.getPeople = function (pagingInfo) {
        var begin = pagingInfo.page - 1;
        if (begin < 0)
            begin = 0;
        return data_1.people
            .slice(begin * pagingInfo.count, begin * pagingInfo.count + pagingInfo.count)
            .map(function (x) {
            var person = new person_list_item_1.PersonListItem();
            person.firstname = x.firstName;
            person.lastname = x.lastName;
            person.gender = x.gender;
            person.email = x.email;
            person.income = +x.income;
            person.age = x.age;
            person.birthsday = new Date(x.birthsday);
            person.id = x.id;
            return person;
        });
    };
    return PErsonService;
}());
exports.PErsonService = PErsonService;
var service = new PErsonService();
console.log(service.getPeople(new PagingInfo(1, 5)));
//# sourceMappingURL=person-service.js.map