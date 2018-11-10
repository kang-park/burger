let orm = require("../config/orm.js");

let burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    insertOne: function(burgerName, cb){
        orm.insertOne("burgers", "burger_name", burgerName, function(res){
            cb(res);
        });
    },

    updateOne: function(idNum, cb){
        orm.updateOne("burgers", "devoured", "1", "id", idNum, function(res){
            cb(res);
        });
    },

    deleteOne: function(idNum, cb){
        orm.deleteOne("burgers", "id", idNum, function(res){
            cb(res);
        });
    }
};

module.exports = burger;