import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre('save', async function (next) {
    try {
        // Check if the password is modified or a new user is being created
        if (!this.isModified('password')) {
            return next();
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);

        // Replace the plain text password with the hashed password
        this.password = hashedPassword;

        next();
    } catch (error) {
        next(error);
    }
});


const User = mongoose.model('User', userSchema);



export default User;