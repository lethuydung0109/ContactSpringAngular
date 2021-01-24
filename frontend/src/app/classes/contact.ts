import { Address } from './address';
import { phoneNumber } from './phone-number';

export class Contact {
    idContact?: number;
    firstname : string;
    lastname: string;
    email: string;
    address : Address;
    phones : Array<phoneNumber>;
    

    constructor()
    {
        this.firstname="";
        this.lastname="";
        this.email="";
        this.address=new Address();
        this.phones = new Array<phoneNumber>();
    }

    resumeAdresse(){
        this.address.getResume();
    }


}
