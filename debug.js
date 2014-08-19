
try
{
    require('total.js').http('debug', {
        ip: '107.170.193.87',
        port: 8001
    });
}
catch (e)
{
    console.log(e);
}
