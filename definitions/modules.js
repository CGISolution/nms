/**
 * External modules
 */

// Real-time web tracking
INSTALL('module', 'https://modules.totaljs.com/webcounter/v1.00/webcounter.js', { url: '/webcounter/' });

// A simple DDOS protection
INSTALL('module', 'https://modules.totaljs.com/ddos/v1.00/ddos.js');

// User authorization
INSTALL('module', 'https://modules.totaljs.com/auth/v1.00/auth.js', {
    cookie: '__nms_user',
    secret: 'nms-encrypt-saltT',
    expireSession: '10', // 10 minutes
    autoLogin: false
});
