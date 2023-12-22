import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, unique: true, required: true},
    password: {type: String, required: true},
    favorites: [{ type: Schema.Types.Mixed }],
  watchlist: [{ type: Schema.Types.Mixed }],
  reviews: [{type: String}]
});

const passwordValidator = (pass) => { 
   const passwordChars = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
   return passwordChars.test(pass);
};

UserSchema.path("password").validate(passwordValidator);

UserSchema.methods.comparePassword = async function (passw) { 
    return await bcrypt.compare(passw, this.password); 
  }

  UserSchema.statics.findByUserName = function (username) {
    return this.findOne({ username: username });
  };

  UserSchema.pre('save', async function(next) {
    const saltRounds = 10; // You can adjust the number of salt rounds
    //const user = this;
    if (this.isModified('password') || this.isNew) {
      try {
        const hash = await bcrypt.hash(this.password, saltRounds);
        this.password = hash;
        next();
    } catch (error) {
       next(error);
    }
  
    } else {
        next();
    }
  });

export default mongoose.model('User', UserSchema);