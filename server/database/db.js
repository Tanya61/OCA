import mongoose from 'mongoose';

const Connection = async()=>{
    const URL = 'mongodb://user:abcde@chatapp-shard-00-00.1kzu1.mongodb.net:27017,chatapp-shard-00-01.1kzu1.mongodb.net:27017,chatapp-shard-00-02.1kzu1.mongodb.net:27017/WHATSAPPCLONE?ssl=true&replicaSet=atlas-cahesx-shard-0&authSource=admin&retryWrites=true&w=majority';
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser:true});
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting to MongoDB', error);
    }
    
}
export default Connection;