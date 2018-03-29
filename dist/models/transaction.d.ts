
export interface Transaction {
  id: string;
  stripeId: string;
  customerRef: string;
  contractRef: string;
  source: string;
  transactionRef: string;

  paymentMethod: PaymentMethod;
  amount: number;

  type: TransactionType;
  refundForPaymentId: string;

  createdAt: number;
  updatedAt: number;

  isRefundable: boolean;
  isRefunded: boolean;
  error: {};

}
