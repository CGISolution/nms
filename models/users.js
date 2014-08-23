var userSchema = mongoose.Schema({ alias: String, ip: String, email: String, password: String, firstName: Strin, lastName: String, created: Date, active: Boolean });

exports.name = 'user';
exports.Schema = mongoose.model('users', userSchema);

exports.cnt = function ()
{
    return 1;
    //return this.Schema.count();
};
