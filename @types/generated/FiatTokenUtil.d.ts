/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface FiatTokenUtilContract
  extends Truffle.Contract<FiatTokenUtilInstance> {
  "new"(
    fiatToken: string,
    meta?: Truffle.TransactionDetails
  ): Promise<FiatTokenUtilInstance>;
}

export interface TransferFailed {
  name: "TransferFailed";
  args: {
    authorizer: string;
    nonce: string;
    0: string;
    1: string;
  };
}

type AllEvents = TransferFailed;

export interface FiatTokenUtilInstance extends Truffle.ContractInstance {
  /**
   * The length of params must be multiples of 168, each representing encode-packed data containing from[20] + to[20] + value[32] + validAfter[32] + validBefore[32] + nonce[32], and the length of signatures must be multiples of 65, each representing encode-packed data containing v[1] + r[32] + s[32].
   * Execute multiple authorized ERC20 Transfers
   * @param atomic If true, revert if any of the transfers fail
   * @param params Concatenated, encode-packed parameters
   * @param signatures Concatenated, encode-packed signatures
   */
  transferWithMultipleAuthorizations: {
    (
      params: string,
      signatures: string,
      atomic: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      params: string,
      signatures: string,
      atomic: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      params: string,
      signatures: string,
      atomic: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      params: string,
      signatures: string,
      atomic: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    /**
     * The length of params must be multiples of 168, each representing encode-packed data containing from[20] + to[20] + value[32] + validAfter[32] + validBefore[32] + nonce[32], and the length of signatures must be multiples of 65, each representing encode-packed data containing v[1] + r[32] + s[32].
     * Execute multiple authorized ERC20 Transfers
     * @param atomic If true, revert if any of the transfers fail
     * @param params Concatenated, encode-packed parameters
     * @param signatures Concatenated, encode-packed signatures
     */
    transferWithMultipleAuthorizations: {
      (
        params: string,
        signatures: string,
        atomic: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        params: string,
        signatures: string,
        atomic: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        params: string,
        signatures: string,
        atomic: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        params: string,
        signatures: string,
        atomic: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
