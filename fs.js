import { log } from 'console';
import fs from 'fs';

const first =
    // fs.writeFile("first.txt","hello how are you",()=>{
    // console.log("file create successfully");
    // })
//     fs.appendFile("first.txt", "\nmy name is ....", () => { });
// fs.rename("first.text", "sec.txt", () => { });
fs.unlink("sec.txt", () => {
    console.log("file deleted succesfully");
});
const data=fs.readFile("first.txt","utf-8",(err,data)=>{
    if(err){
        console.log("error",err);
    }
    console.log("file content: \n",data);
})

console.log(data);
export default first;

