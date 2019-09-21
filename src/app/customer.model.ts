
//mport {Address} from './address.model';
export class Customer  {

    public id  : number;
    public name : string;
    public lastName : string;
    public cellPhone: string;
    public email: string;
    public age  : string;
    //public address : Address[];
    public address: [{
        addType    : string;
        street     : string; 
        complement : string;
        city       : string;
        state      : string;
        zipCode    : string;
    }]

}

