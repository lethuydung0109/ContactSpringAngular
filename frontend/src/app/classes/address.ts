export class Address {

    id?:number ;
	street?:string;
	city?:string;
	zip?:string;
    country?:string;
    resume?:string="";
    
    constructor(){
        this.street="";
        this.city="";
        this.zip="";
        this.country="";
        this.resume=this.street+" "+this.city+" "+this.zip+" "+this.country;
    }

}
