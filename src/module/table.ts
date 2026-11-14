
export interface Iemp {
    empId: number;
    empName: string;
    designation: string;
    department: string;
    salary: number;
    isPermanent: boolean;
    email: string;
    contact: number;
}

export interface Iproduct {
    prodId: number;
    prodName: string;
    category: string;
    price: number;
    stock: number;
    isAvailable: boolean;
    brand: string;
}