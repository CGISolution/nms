exports.install = function (framework)
{
    framework.route('/user/', json_user_query);
    framework.route('/user/{id}/', json_user_get);
};

/**
 * Gets Users
 * Method: GET
 * Output: JSON
 */
function json_user_query ()
{
    var self = this;
    var User = MODEL('user').Schema;

    User.find(function(err, docs){
        self.json(docs);
    });
}

function json_user_get (id)
{
    var self = this;
    var User = MODEL('user').Schema;

    User.findById(id, function (err, doc){
        self.json(doc);
    });
}

/**
 * gets total number of users in collection
 */
function userCnt ()
{
    var self = this;
    var User = MODEL('user').schema;

    User.count(function(err, doc){
        self.json(doc);
    });
}
