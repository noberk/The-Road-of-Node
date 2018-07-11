import * as fs from "fs";


type FileReadedCallback = (e: NodeJS.ErrnoException, data: Buffer) => void;
type FileSavedCallback = (err: NodeJS.ErrnoException) => void;

//fecth data from the local disk by path
export function getData(path: string, callback: FileReadedCallback): void {
    fs.readFile(path, callback)
}

//write data and save it
export function saveData(path: string, callback: FileSavedCallback): void {
    fs.writeFile("zoo.txt", "elephant", callback);
}