import { ChainId } from '@coincollect/sdk'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { CHAIN_ID } from './networks'
import tokens, { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

export const vaultPoolConfig = {
  [VaultKey.CakeVault]: {
    name: <Trans>Auto COLLECT</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.collect.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO CAKE',
    description: <Trans>Stake CAKE to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.cake.address}.svg`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

/// It chooses network id which determined in environment
const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.collect,
    earningToken: serializedTokens.collect,
    contractAddress: {
      97: '0x1d32c2945C8FDCBc7156c553B7cEa4325a17f4f9',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
      137: '0x46A928F2386b8c38cdde028a32c5b7aa19F40445', // CHANGE_ADDRESS:CoinCollectPool 
      80001: '0xE26C5d768D97db78Effee63d79028B27d51d67cD' // CHANGE_ADDRESS:CoinCollectPool (test)
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1.1', // UPDATE:tokenPerBlock
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: serializedTokens.collect,
    earningToken: serializedTokens.lot,
    contractAddress: {
      137: '0xEf0B91bA446213C2671AA45a7652Be1e25a80Ef9',
      80001: '0xf326c24C076709a3c650dBF222a0dB75CABe00D5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 1,
    tokenPerBlock: '2',
    deployedBlockNumber: 36933886,
    version: 3,
    participantThreshold: 226000,
  },
  {
    sousId: 2,
    stakingToken: serializedTokens.lot,
    earningToken: serializedTokens.collect,
    contractAddress: {
      137: '0xEf0B91bA446213C2671AA45a7652Be1e25a80Ef9',
      80001: '0x5b3BF9cA14C448dbeB6DA0AB73772f1DF082A4D2',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 2,
    tokenPerBlock: '3',
    deployedBlockNumber: 36933963,
    version: 3,
    participantThreshold: 22600000,
  },
].filter((p) => !!p.contractAddress[ChainId.POLYGON])



export default pools
