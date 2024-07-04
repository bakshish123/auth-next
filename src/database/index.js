import mongoose from "mongoose";

const connectToDB = async () => {
    const connectionURL = 'mongodb+srv://bakshish10621:Dt8kKA7hrd1REI77@cluster0.fecizke.mongodb.net/databaseName?retryWrites=true&w=majority';


  mongoose
    .connect(connectionURL)
    .then(() => console.log("Auth database connected successfully"))
    .catch((e) => console.log(e));
};

export default connectToDB;