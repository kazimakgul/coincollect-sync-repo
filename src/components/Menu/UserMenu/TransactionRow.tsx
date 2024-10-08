import { BlockIcon, CheckmarkCircleIcon, Flex, Link, OpenNewIcon, RefreshIcon } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { TransactionDetails } from 'state/transactions/reducer'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { getPolygonScanLink } from 'utils'

interface TransactionRowProps {
  txn: TransactionDetails
}

const TxnIcon = styled(Flex)`
  align-items: center;
  flex: none;
  width: 24px;
`

const Summary = styled.div`
  flex: 1;
  padding: 0 8px;
`

const TxnLink = styled(Link)`
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  margin-bottom: 16px;
  width: 100%;

  &:hover {
    text-decoration: none;
  }
`

const renderIcon = (txn: TransactionDetails) => {
  if (!txn.receipt) {
    return <RefreshIcon spin width="24px" />
  }

  return txn.receipt?.status === 1 || typeof txn.receipt?.status === 'undefined' ? (
    <CheckmarkCircleIcon color="success" width="24px" />
  ) : (
    <BlockIcon color="failure" width="24px" />
  )
}

const TransactionRow: React.FC<TransactionRowProps> = ({ txn }) => {
  const { chainId } = useActiveWeb3React()

  if (!txn) {
    return null
  }

  return (
    <TxnLink href={getPolygonScanLink(txn.hash, 'transaction')} external>
      <TxnIcon>{renderIcon(txn)}</TxnIcon>
      <Summary>{txn.summary ?? txn.hash}</Summary>
      <TxnIcon>
        <OpenNewIcon width="24px" color="primary" />
      </TxnIcon>
    </TxnLink>
  )
}

export default TransactionRow
