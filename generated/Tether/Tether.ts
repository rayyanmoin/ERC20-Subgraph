// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Issue extends ethereum.Event {
  get params(): Issue__Params {
    return new Issue__Params(this);
  }
}

export class Issue__Params {
  _event: Issue;

  constructor(event: Issue) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Redeem extends ethereum.Event {
  get params(): Redeem__Params {
    return new Redeem__Params(this);
  }
}

export class Redeem__Params {
  _event: Redeem;

  constructor(event: Redeem) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Deprecate extends ethereum.Event {
  get params(): Deprecate__Params {
    return new Deprecate__Params(this);
  }
}

export class Deprecate__Params {
  _event: Deprecate;

  constructor(event: Deprecate) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Params extends ethereum.Event {
  get params(): Params__Params {
    return new Params__Params(this);
  }
}

export class Params__Params {
  _event: Params;

  constructor(event: Params) {
    this._event = event;
  }

  get feeBasisPoints(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get maxFee(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class DestroyedBlackFunds extends ethereum.Event {
  get params(): DestroyedBlackFunds__Params {
    return new DestroyedBlackFunds__Params(this);
  }
}

export class DestroyedBlackFunds__Params {
  _event: DestroyedBlackFunds;

  constructor(event: DestroyedBlackFunds) {
    this._event = event;
  }

  get _blackListedUser(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _balance(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class AddedBlackList extends ethereum.Event {
  get params(): AddedBlackList__Params {
    return new AddedBlackList__Params(this);
  }
}

export class AddedBlackList__Params {
  _event: AddedBlackList;

  constructor(event: AddedBlackList) {
    this._event = event;
  }

  get _user(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RemovedBlackList extends ethereum.Event {
  get params(): RemovedBlackList__Params {
    return new RemovedBlackList__Params(this);
  }
}

export class RemovedBlackList__Params {
  _event: RemovedBlackList;

  constructor(event: RemovedBlackList) {
    this._event = event;
  }

  get _user(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Pause extends ethereum.Event {
  get params(): Pause__Params {
    return new Pause__Params(this);
  }
}

export class Pause__Params {
  _event: Pause;

  constructor(event: Pause) {
    this._event = event;
  }
}

export class Unpause extends ethereum.Event {
  get params(): Unpause__Params {
    return new Unpause__Params(this);
  }
}

export class Unpause__Params {
  _event: Unpause;

  constructor(event: Unpause) {
    this._event = event;
  }
}

export class Tether extends ethereum.SmartContract {
  static bind(address: Address): Tether {
    return new Tether("Tether", address);
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  deprecated(): boolean {
    let result = super.call("deprecated", "deprecated():(bool)", []);

    return result[0].toBoolean();
  }

  try_deprecated(): ethereum.CallResult<boolean> {
    let result = super.tryCall("deprecated", "deprecated():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  upgradedAddress(): Address {
    let result = super.call(
      "upgradedAddress",
      "upgradedAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_upgradedAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "upgradedAddress",
      "upgradedAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  balances(param0: Address): BigInt {
    let result = super.call("balances", "balances(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_balances(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balances", "balances(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): BigInt {
    let result = super.call("decimals", "decimals():(uint256)", []);

    return result[0].toBigInt();
  }

  try_decimals(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("decimals", "decimals():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maximumFee(): BigInt {
    let result = super.call("maximumFee", "maximumFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maximumFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maximumFee", "maximumFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _totalSupply(): BigInt {
    let result = super.call("_totalSupply", "_totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try__totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_totalSupply", "_totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getBlackListStatus(_maker: Address): boolean {
    let result = super.call(
      "getBlackListStatus",
      "getBlackListStatus(address):(bool)",
      [ethereum.Value.fromAddress(_maker)]
    );

    return result[0].toBoolean();
  }

  try_getBlackListStatus(_maker: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "getBlackListStatus",
      "getBlackListStatus(address):(bool)",
      [ethereum.Value.fromAddress(_maker)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  allowed(param0: Address, param1: Address): BigInt {
    let result = super.call("allowed", "allowed(address,address):(uint256)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromAddress(param1)
    ]);

    return result[0].toBigInt();
  }

  try_allowed(param0: Address, param1: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowed",
      "allowed(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(who: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(who)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(who: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(who)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getOwner(): Address {
    let result = super.call("getOwner", "getOwner():(address)", []);

    return result[0].toAddress();
  }

  try_getOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("getOwner", "getOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  allowance(_owner: Address, _spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(_owner), ethereum.Value.fromAddress(_spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(
    _owner: Address,
    _spender: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(_owner), ethereum.Value.fromAddress(_spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  basisPointsRate(): BigInt {
    let result = super.call(
      "basisPointsRate",
      "basisPointsRate():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_basisPointsRate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "basisPointsRate",
      "basisPointsRate():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isBlackListed(param0: Address): boolean {
    let result = super.call("isBlackListed", "isBlackListed(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isBlackListed(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isBlackListed",
      "isBlackListed(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  MAX_UINT(): BigInt {
    let result = super.call("MAX_UINT", "MAX_UINT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MAX_UINT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MAX_UINT", "MAX_UINT():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class DeprecateCall extends ethereum.Call {
  get inputs(): DeprecateCall__Inputs {
    return new DeprecateCall__Inputs(this);
  }

  get outputs(): DeprecateCall__Outputs {
    return new DeprecateCall__Outputs(this);
  }
}

export class DeprecateCall__Inputs {
  _call: DeprecateCall;

  constructor(call: DeprecateCall) {
    this._call = call;
  }

  get _upgradedAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DeprecateCall__Outputs {
  _call: DeprecateCall;

  constructor(call: DeprecateCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class AddBlackListCall extends ethereum.Call {
  get inputs(): AddBlackListCall__Inputs {
    return new AddBlackListCall__Inputs(this);
  }

  get outputs(): AddBlackListCall__Outputs {
    return new AddBlackListCall__Outputs(this);
  }
}

export class AddBlackListCall__Inputs {
  _call: AddBlackListCall;

  constructor(call: AddBlackListCall) {
    this._call = call;
  }

  get _evilUser(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddBlackListCall__Outputs {
  _call: AddBlackListCall;

  constructor(call: AddBlackListCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }
}

export class SetParamsCall extends ethereum.Call {
  get inputs(): SetParamsCall__Inputs {
    return new SetParamsCall__Inputs(this);
  }

  get outputs(): SetParamsCall__Outputs {
    return new SetParamsCall__Outputs(this);
  }
}

export class SetParamsCall__Inputs {
  _call: SetParamsCall;

  constructor(call: SetParamsCall) {
    this._call = call;
  }

  get newBasisPoints(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newMaxFee(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetParamsCall__Outputs {
  _call: SetParamsCall;

  constructor(call: SetParamsCall) {
    this._call = call;
  }
}

export class IssueCall extends ethereum.Call {
  get inputs(): IssueCall__Inputs {
    return new IssueCall__Inputs(this);
  }

  get outputs(): IssueCall__Outputs {
    return new IssueCall__Outputs(this);
  }
}

export class IssueCall__Inputs {
  _call: IssueCall;

  constructor(call: IssueCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class IssueCall__Outputs {
  _call: IssueCall;

  constructor(call: IssueCall) {
    this._call = call;
  }
}

export class RedeemCall extends ethereum.Call {
  get inputs(): RedeemCall__Inputs {
    return new RedeemCall__Inputs(this);
  }

  get outputs(): RedeemCall__Outputs {
    return new RedeemCall__Outputs(this);
  }
}

export class RedeemCall__Inputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RedeemCall__Outputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }
}

export class RemoveBlackListCall extends ethereum.Call {
  get inputs(): RemoveBlackListCall__Inputs {
    return new RemoveBlackListCall__Inputs(this);
  }

  get outputs(): RemoveBlackListCall__Outputs {
    return new RemoveBlackListCall__Outputs(this);
  }
}

export class RemoveBlackListCall__Inputs {
  _call: RemoveBlackListCall;

  constructor(call: RemoveBlackListCall) {
    this._call = call;
  }

  get _clearedUser(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveBlackListCall__Outputs {
  _call: RemoveBlackListCall;

  constructor(call: RemoveBlackListCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class DestroyBlackFundsCall extends ethereum.Call {
  get inputs(): DestroyBlackFundsCall__Inputs {
    return new DestroyBlackFundsCall__Inputs(this);
  }

  get outputs(): DestroyBlackFundsCall__Outputs {
    return new DestroyBlackFundsCall__Outputs(this);
  }
}

export class DestroyBlackFundsCall__Inputs {
  _call: DestroyBlackFundsCall;

  constructor(call: DestroyBlackFundsCall) {
    this._call = call;
  }

  get _blackListedUser(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DestroyBlackFundsCall__Outputs {
  _call: DestroyBlackFundsCall;

  constructor(call: DestroyBlackFundsCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _initialSupply(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _symbol(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _decimals(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
