import { Request, Response, NextFunction, response } from "express";
import axios, { AxiosResponse } from "axios";
import * as fs from "fs";
import * as path from "path";

// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  // get some posts;
  var AllFiles: any = [];
  const directoryPath = "./Documents";

  fs.readdir(directoryPath, (err, files) => {
    console.log("check existing files", files);
    files.forEach((file) => {
      if (fs.lstatSync(path.resolve(directoryPath, file)).isDirectory()) {
        console.log("Directory: " + file);
        var stats = fs.statSync(directoryPath);
        var mtime = stats.ctime;
        AllFiles.push({
          name: file,
          type: "folder",
          createDate: mtime,
        });
      } else {
        var stats = fs.statSync(directoryPath);
        var mtime = stats.ctime;

        console.log("File: " + file);
        AllFiles.push({
          filename: file,
          type: "file",
          createdDate: mtime,
        });
        console.log(AllFiles);
      }
    });

    res.status(200).json({
      message: AllFiles,
    });
  });
};

export default { getPosts };
