import { Injectable } from "@angular/core";
import { Notyf } from "notyf";

@Injectable({
    providedIn: "root"
})
export class NotifyService{

    public notyf = new Notyf()

    public success( message:string ){
        this.notyf.success(message);
    }

    public error( error:any ){
        const message = this.extractMessage(error);
        this.notyf.error(message)
    }


    private extractMessage( error:any ):string{

        // Front: throw "Error!":
        if(typeof error === "string" ) return error;

        // Back: throw string:
        if(typeof error.response?.data === "string") return error.response.data;

        // Back: throw [] validation:
        if(Array.isArray(error.response?.data)) return error.response.data[0];

        // Front: throw new Error("Some Error..."):
        if(typeof error.message === "string") return error.message;

        // else:
        return "Something went wrong...";

    }


}