framework.on('install', function(type, name) {
    
    if (type !== 'module' && name !== 'auth') return;

    var auth = MODULE('auth');

    auth.onAuthorization = function (id, callback, flags) {
    
        // call back from databasa after object has been saved
        // example: callback({ id: '1', alias: ''});
    };
});
