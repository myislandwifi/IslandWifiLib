
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

export declare enum PaymentMethod {
  card = "card",
  cash = "cash"
}

export declare enum TransactionType {
  charge = "charge",
  refund = "refund",
  deposit = 'deposit',
  depositReturn = 'depositReturn',
  breached = 'breached'
}
