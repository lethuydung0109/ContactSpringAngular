import { Address } from './address';
import { PhoneNumber } from './phone-number';

export class Contact {
    id?: number;
    firstname : string;
    lastname: string;
    email: string;
    address : Address;
    phone : PhoneNumber;
    cellPhone : PhoneNumber;

    constructor()
    {
        this.firstname="";
        this.lastname="";
        this.email="";
        this.address=new Address();
        this.phone = new PhoneNumber();
        this.cellPhone = new PhoneNumber();
    }


}
