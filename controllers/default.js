exports.install = function(framework) {
    framework.route('/', index);
};

function index()
{
    var self = this;

    var User = self.model('user');

    console.log(User);

    self.view('app');
}
