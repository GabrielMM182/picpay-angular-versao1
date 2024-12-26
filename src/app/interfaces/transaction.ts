export interface TransactionDTO {

  id: number;
  value: number; // BigDecimal pode ser representado como number no TypeScript
  payer: number;
  payee: number;
  createdAt: Date;
}
