import express, { NextFunction, Request, Response } from "express"
import dataSerivce from "../5-services/data-serivce";
import { BankAccountsModel } from "../2-models/bank-account-model";


// Create Router:
const router = express.Router(); // Capital R 


// GET http://localhost:4000/api/actions-by-accountnumber/:acountnumber
router.get("/actions-by-accountnumber/:acountnumber", async (request: Request, response: Response, next: NextFunction) => {

    try {
        const acountnumber = request.params.acountnumber;

        // Get all actions:
        const actions = await dataSerivce.getAllActionsByAccountNumber(acountnumber);

        // Response back:
        response.json(actions);

    } catch (error) {
        next(error);
    }

});


// POST http://localhost:4000/api/account
router.post("/", async (request: Request, response: Response, next: NextFunction) => {

    try {
        const account = new BankAccountsModel(request.body);

        // Add it to the database:
        const addedAction = await dataSerivce.addAccount(account);

        // Response back:
        response.status(201).json(addedAction);
    } catch (error) {
        next(error);
    }

});

export default router;