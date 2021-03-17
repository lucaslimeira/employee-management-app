import { Address } from './address';
import { BankDetail } from './bankDetail';

export class Employee {
    id: number;
    name: string;
    cpf: string;
    rg: string;
    active: boolean;
    pis: number;
    workNumberId: number;
    email: string;
    dateOfBirth: string;
    startDate: string;
    endDate: string;
    created: string;
    address: Address;
    bankDetail: BankDetail;
}