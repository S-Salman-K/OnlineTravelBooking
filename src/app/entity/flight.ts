import { Time } from "@angular/common";

export interface Flight{
    flightId:number;
    source:string
    destinaition:string
    airline:string;
    deptDate:Date;
    deptTime:Time;
    arrDate:Date;
    arrTime:Time;
    price:number;
    imgURL:string;
}