
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

export enum PaymentMethod {
  card = "card",
  cash = "cash"
}

export enum TransactionType {
  charge = "charge",
  refund = "refund",
  deposit = 'deposit',
  depositReturn = 'depositReturn',
  breached = 'breached'
}
