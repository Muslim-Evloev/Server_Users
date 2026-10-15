import mongoose  from "mongoose";

const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: [true ,  "имя обязательно для заполненеия"],
        trim: true
    },
    lastName: {
        type: String,
        required:[true , "Фамилия обязытельна для заполнения"],
    },
    age: {
        type: Number,
        required: [true , "Возраст обязательно для заполненеия"],
        min:12
    }

})
export default mongoose.model("User", userShema)