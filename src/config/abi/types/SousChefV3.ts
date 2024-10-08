/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface SousChefV3Interface extends utils.Interface {
  functions: {
    "PRECISION_FACTOR()": FunctionFragment;
    "SMART_CHEF_FACTORY()": FunctionFragment;
    "accTokenPerShare()": FunctionFragment;
    "bonusEndBlock()": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "emergencyRewardWithdraw(uint256)": FunctionFragment;
    "emergencyWithdraw()": FunctionFragment;
    "hasUserLimit()": FunctionFragment;
    "initialize(address,address,uint256,uint256,uint256,uint256,uint256,address)": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "lastRewardBlock()": FunctionFragment;
    "numberBlocksForUserLimit()": FunctionFragment;
    "owner()": FunctionFragment;
    "pancakeProfile()": FunctionFragment;
    "pancakeProfileIsRequested()": FunctionFragment;
    "pancakeProfileThresholdPoints()": FunctionFragment;
    "pendingReward(address)": FunctionFragment;
    "poolLimitPerUser()": FunctionFragment;
    "recoverToken(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardPerBlock()": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "stakedToken()": FunctionFragment;
    "startBlock()": FunctionFragment;
    "stopReward()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updatePoolLimitPerUser(bool,uint256)": FunctionFragment;
    "updateProfileAndThresholdPointsRequirement(bool,uint256)": FunctionFragment;
    "updateRewardPerBlock(uint256)": FunctionFragment;
    "updateStartAndEndBlocks(uint256,uint256)": FunctionFragment;
    "userInfo(address)": FunctionFragment;
    "userLimit()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "PRECISION_FACTOR"
      | "SMART_CHEF_FACTORY"
      | "accTokenPerShare"
      | "bonusEndBlock"
      | "deposit"
      | "emergencyRewardWithdraw"
      | "emergencyWithdraw"
      | "hasUserLimit"
      | "initialize"
      | "isInitialized"
      | "lastRewardBlock"
      | "numberBlocksForUserLimit"
      | "owner"
      | "pancakeProfile"
      | "pancakeProfileIsRequested"
      | "pancakeProfileThresholdPoints"
      | "pendingReward"
      | "poolLimitPerUser"
      | "recoverToken"
      | "renounceOwnership"
      | "rewardPerBlock"
      | "rewardToken"
      | "stakedToken"
      | "startBlock"
      | "stopReward"
      | "transferOwnership"
      | "updatePoolLimitPerUser"
      | "updateProfileAndThresholdPointsRequirement"
      | "updateRewardPerBlock"
      | "updateStartAndEndBlocks"
      | "userInfo"
      | "userLimit"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "PRECISION_FACTOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SMART_CHEF_FACTORY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "accTokenPerShare",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bonusEndBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyRewardWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasUserLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastRewardBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numberBlocksForUserLimit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pancakeProfile",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pancakeProfileIsRequested",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pancakeProfileThresholdPoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingReward",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "poolLimitPerUser",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recoverToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakedToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stopReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePoolLimitPerUser",
    values: [boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateProfileAndThresholdPointsRequirement",
    values: [boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRewardPerBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateStartAndEndBlocks",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "userInfo", values: [string]): string;
  encodeFunctionData(functionFragment: "userLimit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "PRECISION_FACTOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SMART_CHEF_FACTORY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accTokenPerShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bonusEndBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyRewardWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasUserLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastRewardBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberBlocksForUserLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pancakeProfile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pancakeProfileIsRequested",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pancakeProfileThresholdPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolLimitPerUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoverToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startBlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stopReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePoolLimitPerUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateProfileAndThresholdPointsRequirement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRewardPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateStartAndEndBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userLimit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposit(address,uint256)": EventFragment;
    "EmergencyWithdraw(address,uint256)": EventFragment;
    "NewPoolLimit(uint256)": EventFragment;
    "NewRewardPerBlock(uint256)": EventFragment;
    "NewStartAndEndBlocks(uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RewardsStop(uint256)": EventFragment;
    "TokenRecovery(address,uint256)": EventFragment;
    "UpdateProfileAndThresholdPointsRequirement(bool,uint256)": EventFragment;
    "Withdraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPoolLimit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewRewardPerBlock"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewStartAndEndBlocks"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsStop"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenRecovery"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "UpdateProfileAndThresholdPointsRequirement"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface DepositEventObject {
  user: string;
  amount: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface EmergencyWithdrawEventObject {
  user: string;
  amount: BigNumber;
}
export type EmergencyWithdrawEvent = TypedEvent<
  [string, BigNumber],
  EmergencyWithdrawEventObject
>;

export type EmergencyWithdrawEventFilter =
  TypedEventFilter<EmergencyWithdrawEvent>;

export interface NewPoolLimitEventObject {
  poolLimitPerUser: BigNumber;
}
export type NewPoolLimitEvent = TypedEvent<
  [BigNumber],
  NewPoolLimitEventObject
>;

export type NewPoolLimitEventFilter = TypedEventFilter<NewPoolLimitEvent>;

export interface NewRewardPerBlockEventObject {
  rewardPerBlock: BigNumber;
}
export type NewRewardPerBlockEvent = TypedEvent<
  [BigNumber],
  NewRewardPerBlockEventObject
>;

export type NewRewardPerBlockEventFilter =
  TypedEventFilter<NewRewardPerBlockEvent>;

export interface NewStartAndEndBlocksEventObject {
  startBlock: BigNumber;
  endBlock: BigNumber;
}
export type NewStartAndEndBlocksEvent = TypedEvent<
  [BigNumber, BigNumber],
  NewStartAndEndBlocksEventObject
>;

export type NewStartAndEndBlocksEventFilter =
  TypedEventFilter<NewStartAndEndBlocksEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RewardsStopEventObject {
  blockNumber: BigNumber;
}
export type RewardsStopEvent = TypedEvent<[BigNumber], RewardsStopEventObject>;

export type RewardsStopEventFilter = TypedEventFilter<RewardsStopEvent>;

export interface TokenRecoveryEventObject {
  token: string;
  amount: BigNumber;
}
export type TokenRecoveryEvent = TypedEvent<
  [string, BigNumber],
  TokenRecoveryEventObject
>;

export type TokenRecoveryEventFilter = TypedEventFilter<TokenRecoveryEvent>;

export interface UpdateProfileAndThresholdPointsRequirementEventObject {
  isProfileRequested: boolean;
  thresholdPoints: BigNumber;
}
export type UpdateProfileAndThresholdPointsRequirementEvent = TypedEvent<
  [boolean, BigNumber],
  UpdateProfileAndThresholdPointsRequirementEventObject
>;

export type UpdateProfileAndThresholdPointsRequirementEventFilter =
  TypedEventFilter<UpdateProfileAndThresholdPointsRequirementEvent>;

export interface WithdrawEventObject {
  user: string;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface SousChefV3 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SousChefV3Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    PRECISION_FACTOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    SMART_CHEF_FACTORY(overrides?: CallOverrides): Promise<[string]>;

    accTokenPerShare(overrides?: CallOverrides): Promise<[BigNumber]>;

    bonusEndBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    emergencyRewardWithdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    hasUserLimit(overrides?: CallOverrides): Promise<[boolean]>;

    initialize(
      _stakedToken: string,
      _rewardToken: string,
      _rewardPerBlock: BigNumberish,
      _startBlock: BigNumberish,
      _bonusEndBlock: BigNumberish,
      _poolLimitPerUser: BigNumberish,
      _numberBlocksForUserLimit: BigNumberish,
      _admin: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    lastRewardBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    numberBlocksForUserLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pancakeProfile(overrides?: CallOverrides): Promise<[string]>;

    pancakeProfileIsRequested(overrides?: CallOverrides): Promise<[boolean]>;

    pancakeProfileThresholdPoints(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pendingReward(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    poolLimitPerUser(overrides?: CallOverrides): Promise<[BigNumber]>;

    recoverToken(
      _token: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    rewardPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    stakedToken(overrides?: CallOverrides): Promise<[string]>;

    startBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    stopReward(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updatePoolLimitPerUser(
      _userLimit: boolean,
      _poolLimitPerUser: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateProfileAndThresholdPointsRequirement(
      _isRequested: boolean,
      _thresholdPoints: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateRewardPerBlock(
      _rewardPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateStartAndEndBlocks(
      _startBlock: BigNumberish,
      _bonusEndBlock: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;

    userLimit(overrides?: CallOverrides): Promise<[boolean]>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  PRECISION_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

  SMART_CHEF_FACTORY(overrides?: CallOverrides): Promise<string>;

  accTokenPerShare(overrides?: CallOverrides): Promise<BigNumber>;

  bonusEndBlock(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  emergencyRewardWithdraw(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  hasUserLimit(overrides?: CallOverrides): Promise<boolean>;

  initialize(
    _stakedToken: string,
    _rewardToken: string,
    _rewardPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    _bonusEndBlock: BigNumberish,
    _poolLimitPerUser: BigNumberish,
    _numberBlocksForUserLimit: BigNumberish,
    _admin: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  lastRewardBlock(overrides?: CallOverrides): Promise<BigNumber>;

  numberBlocksForUserLimit(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pancakeProfile(overrides?: CallOverrides): Promise<string>;

  pancakeProfileIsRequested(overrides?: CallOverrides): Promise<boolean>;

  pancakeProfileThresholdPoints(overrides?: CallOverrides): Promise<BigNumber>;

  pendingReward(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  poolLimitPerUser(overrides?: CallOverrides): Promise<BigNumber>;

  recoverToken(
    _token: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  rewardPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  stakedToken(overrides?: CallOverrides): Promise<string>;

  startBlock(overrides?: CallOverrides): Promise<BigNumber>;

  stopReward(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updatePoolLimitPerUser(
    _userLimit: boolean,
    _poolLimitPerUser: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateProfileAndThresholdPointsRequirement(
    _isRequested: boolean,
    _thresholdPoints: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateRewardPerBlock(
    _rewardPerBlock: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateStartAndEndBlocks(
    _startBlock: BigNumberish,
    _bonusEndBlock: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
  >;

  userLimit(overrides?: CallOverrides): Promise<boolean>;

  withdraw(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    PRECISION_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

    SMART_CHEF_FACTORY(overrides?: CallOverrides): Promise<string>;

    accTokenPerShare(overrides?: CallOverrides): Promise<BigNumber>;

    bonusEndBlock(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    emergencyRewardWithdraw(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyWithdraw(overrides?: CallOverrides): Promise<void>;

    hasUserLimit(overrides?: CallOverrides): Promise<boolean>;

    initialize(
      _stakedToken: string,
      _rewardToken: string,
      _rewardPerBlock: BigNumberish,
      _startBlock: BigNumberish,
      _bonusEndBlock: BigNumberish,
      _poolLimitPerUser: BigNumberish,
      _numberBlocksForUserLimit: BigNumberish,
      _admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    lastRewardBlock(overrides?: CallOverrides): Promise<BigNumber>;

    numberBlocksForUserLimit(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pancakeProfile(overrides?: CallOverrides): Promise<string>;

    pancakeProfileIsRequested(overrides?: CallOverrides): Promise<boolean>;

    pancakeProfileThresholdPoints(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingReward(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    poolLimitPerUser(overrides?: CallOverrides): Promise<BigNumber>;

    recoverToken(_token: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    stakedToken(overrides?: CallOverrides): Promise<string>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    stopReward(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePoolLimitPerUser(
      _userLimit: boolean,
      _poolLimitPerUser: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateProfileAndThresholdPointsRequirement(
      _isRequested: boolean,
      _thresholdPoints: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRewardPerBlock(
      _rewardPerBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateStartAndEndBlocks(
      _startBlock: BigNumberish,
      _bonusEndBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;

    userLimit(overrides?: CallOverrides): Promise<boolean>;

    withdraw(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Deposit(address,uint256)"(
      user?: string | null,
      amount?: null
    ): DepositEventFilter;
    Deposit(user?: string | null, amount?: null): DepositEventFilter;

    "EmergencyWithdraw(address,uint256)"(
      user?: string | null,
      amount?: null
    ): EmergencyWithdrawEventFilter;
    EmergencyWithdraw(
      user?: string | null,
      amount?: null
    ): EmergencyWithdrawEventFilter;

    "NewPoolLimit(uint256)"(poolLimitPerUser?: null): NewPoolLimitEventFilter;
    NewPoolLimit(poolLimitPerUser?: null): NewPoolLimitEventFilter;

    "NewRewardPerBlock(uint256)"(
      rewardPerBlock?: null
    ): NewRewardPerBlockEventFilter;
    NewRewardPerBlock(rewardPerBlock?: null): NewRewardPerBlockEventFilter;

    "NewStartAndEndBlocks(uint256,uint256)"(
      startBlock?: null,
      endBlock?: null
    ): NewStartAndEndBlocksEventFilter;
    NewStartAndEndBlocks(
      startBlock?: null,
      endBlock?: null
    ): NewStartAndEndBlocksEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "RewardsStop(uint256)"(blockNumber?: null): RewardsStopEventFilter;
    RewardsStop(blockNumber?: null): RewardsStopEventFilter;

    "TokenRecovery(address,uint256)"(
      token?: string | null,
      amount?: null
    ): TokenRecoveryEventFilter;
    TokenRecovery(
      token?: string | null,
      amount?: null
    ): TokenRecoveryEventFilter;

    "UpdateProfileAndThresholdPointsRequirement(bool,uint256)"(
      isProfileRequested?: null,
      thresholdPoints?: null
    ): UpdateProfileAndThresholdPointsRequirementEventFilter;
    UpdateProfileAndThresholdPointsRequirement(
      isProfileRequested?: null,
      thresholdPoints?: null
    ): UpdateProfileAndThresholdPointsRequirementEventFilter;

    "Withdraw(address,uint256)"(
      user?: string | null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(user?: string | null, amount?: null): WithdrawEventFilter;
  };

  estimateGas: {
    PRECISION_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

    SMART_CHEF_FACTORY(overrides?: CallOverrides): Promise<BigNumber>;

    accTokenPerShare(overrides?: CallOverrides): Promise<BigNumber>;

    bonusEndBlock(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    emergencyRewardWithdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    hasUserLimit(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _stakedToken: string,
      _rewardToken: string,
      _rewardPerBlock: BigNumberish,
      _startBlock: BigNumberish,
      _bonusEndBlock: BigNumberish,
      _poolLimitPerUser: BigNumberish,
      _numberBlocksForUserLimit: BigNumberish,
      _admin: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    lastRewardBlock(overrides?: CallOverrides): Promise<BigNumber>;

    numberBlocksForUserLimit(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pancakeProfile(overrides?: CallOverrides): Promise<BigNumber>;

    pancakeProfileIsRequested(overrides?: CallOverrides): Promise<BigNumber>;

    pancakeProfileThresholdPoints(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingReward(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    poolLimitPerUser(overrides?: CallOverrides): Promise<BigNumber>;

    recoverToken(
      _token: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    rewardPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    stakedToken(overrides?: CallOverrides): Promise<BigNumber>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    stopReward(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updatePoolLimitPerUser(
      _userLimit: boolean,
      _poolLimitPerUser: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateProfileAndThresholdPointsRequirement(
      _isRequested: boolean,
      _thresholdPoints: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateRewardPerBlock(
      _rewardPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateStartAndEndBlocks(
      _startBlock: BigNumberish,
      _bonusEndBlock: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    userInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    userLimit(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    PRECISION_FACTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SMART_CHEF_FACTORY(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    accTokenPerShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bonusEndBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    emergencyRewardWithdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    hasUserLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _stakedToken: string,
      _rewardToken: string,
      _rewardPerBlock: BigNumberish,
      _startBlock: BigNumberish,
      _bonusEndBlock: BigNumberish,
      _poolLimitPerUser: BigNumberish,
      _numberBlocksForUserLimit: BigNumberish,
      _admin: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastRewardBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numberBlocksForUserLimit(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pancakeProfile(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pancakeProfileIsRequested(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pancakeProfileThresholdPoints(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingReward(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolLimitPerUser(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverToken(
      _token: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    rewardPerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stopReward(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updatePoolLimitPerUser(
      _userLimit: boolean,
      _poolLimitPerUser: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateProfileAndThresholdPointsRequirement(
      _isRequested: boolean,
      _thresholdPoints: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateRewardPerBlock(
      _rewardPerBlock: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateStartAndEndBlocks(
      _startBlock: BigNumberish,
      _bonusEndBlock: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
