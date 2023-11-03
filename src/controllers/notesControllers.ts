import { NextFunction, Request, Response } from "express";
import mssql from "mssql";
import { sqlConfig } from "../config/sqlConfig";
import { v4 } from "uuid";

export const takeNotes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let { title, description } = req.body;

    const pool = await mssql.connect(sqlConfig);
    await pool.request();

    let note_id = v4();

    let results = await pool
      .request()
      //method chainning
      .input("note_id", mssql.VarChar, note_id)
      .input("title", mssql.VarChar, title)
      .input("description", mssql.VarChar, description)
      .execute("takeNotes");
    console.log(results);

    return res.status(200).json({
      message: "Notes entered successfully",
    });

    // let results = await pool.request().input("");
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};
