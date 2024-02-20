import fs from "fs";
import path from "path";

export const getAllFilePaths=(folderPath:string)=>{
    let allPaths: string[]=[]
    const allFilesAndFolders=fs.readdirSync(folderPath);
    console.log(allFilesAndFolders)
    allFilesAndFolders.forEach(item=>{
        const fullFilePath=path.join(folderPath,item)
        if(fs.statSync(fullFilePath).isDirectory()){
          allPaths=allPaths.concat(getAllFilePaths(fullFilePath))
        }else{
            allPaths.push(fullFilePath)
        }
    })
    return allPaths
}