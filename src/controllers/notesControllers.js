"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeNotes = void 0;
const mssql_1 = __importDefault(require("mssql"));
const sqlConfig_1 = require("../config/sqlConfig");
const uuid_1 = require("uuid");
const takeNotes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { title, description } = req.body;
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        yield pool.request();
        let note_id = (0, uuid_1.v4)();
        let results = yield pool
            .request()
            //method chainning
            .input("note_id", mssql_1.default.VarChar, note_id)
            .input("title", mssql_1.default.VarChar, title)
            .input("description", mssql_1.default.VarChar, description)
            .execute("takeNotes");
        console.log(results);
        return res.status(200).json({
            message: "Notes entered successfully",
        });
        // let results = await pool.request().input("");
    }
    catch (error) {
        return res.json({
            error: error,
        });
    }
});
exports.takeNotes = takeNotes;
