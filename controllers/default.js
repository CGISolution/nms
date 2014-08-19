exports.install = function(framework) {
    framework.route('/*', index);
};

function index() {

    var self = this;

    self.view('app');
}
