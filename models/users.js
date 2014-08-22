var userSchema = mongoose.Schema({ alias: String, ip: String, email: String, password: String, firstName: Strin, lastName: String, created: Date, active: Boolean });

exports.name = 'user';
exports.Schema = mongoose.model('User', userSchema);
