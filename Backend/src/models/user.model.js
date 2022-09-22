const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

userSchema.pre('save', function(next) {
    if(!this.isModified('password')) return next()
    
    var hash = bcrypt.hashSync(this.password, 8)
    this.password = hash
    
})