export interface StripeSubscription{
    id: string;
    customerRef: string;
    contractRef: string;
    source:string;
    transactionRef:string;

    amount:number;

    refundForPaymentId: string;

    createdAt: number;
    updatedAt: number;

    isCancelled: boolean;
    error:{};
}
  