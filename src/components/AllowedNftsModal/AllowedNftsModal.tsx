import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  InjectedModalProps,
  Heading,
  Text,
  ProfileAvatar,
  Flex,
  Message,
  MessageText,
  Link,
  LightningIcon,
} from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme';



const StyledModalContainer = styled(ModalContainer)`
  max-width: 420px;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    min-width: 500px;
  }
`;

const StyledModalBody = styled(ModalBody)`
  padding: 24px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
export const CollectionAvatar = styled(ProfileAvatar)`
  border: 1px white solid;
  width: 120px;
  height: 120px;
`

const CollectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 16px;
  margin-bottom: 24px;
  line-height: 110%;
  padding-left: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const Wrapper = styled(Flex)`
  margin-top: 24px;
  margin-bottom: 24px;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 20px;
  background: ${props => props.theme.colors.background};
  padding: 30px 5px 15px 5px;
  border-radius: 16px;
`;

const MessageTextLink = styled(Link)`
  display: inline;
  text-decoration: underline;
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;
`

const CoinContainer = styled.div`
  position: relative;
`;


const CoinPower = styled.p`
  position: absolute;
  min-width: 45px;
  bottom: 56px;
  right: 12px;
  color: #333;
  background: linear-gradient(145deg, #fadf76, #f9e8b4, #fadf76);
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.3), inset 0 -1px 2px rgba(0, 0, 0, 0.4);
`;




interface AllowedNftsModalProps extends InjectedModalProps {
  nfts: any
}

export default function AllowedNftsModal({
  onDismiss = () => null,
  nfts,
}: AllowedNftsModalProps) {

  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <StyledModalContainer minWidth="320px">
      <ModalHeader background={theme.colors.gradients.bubblegum}>
        <ModalTitle>
          <Heading>{t('Allowed Nfts')}</Heading>
        </ModalTitle>
        <ModalCloseButton onDismiss={onDismiss} />
      </ModalHeader>
      <StyledModalBody>

        <Title style={{ marginBottom: '2px' }}>
          {t('By staking these NFTs in this pool, you can earn based on their ')}
          <LightningIcon width={20} />
          {t('earning power. ')}
          <MessageTextLink display="inline" fontWeight={700} href="https://market.coincollect.org/" target="_blank" color="failure">
            {t('Discover NFT Power')} »
          </MessageTextLink>
        </Title>


        <Wrapper>

          {nfts.map((avatar, index) => (
            <CollectionWrapper>
              <CoinContainer>
                <CollectionAvatar
                  key={index}
                  src={avatar["avatar"]}
                  width={70}
                  height={70}
                />
                <CoinPower><LightningIcon width={16} />{nfts.length > 1 ? avatar["power"] : 1}</CoinPower>
              </CoinContainer>

              <Text>{avatar["title"]}</Text>
            </CollectionWrapper>
          ))}

        </Wrapper>
        <Message variant="warning">
          <MessageText>{t('Daily earnings are calculated based on the highest earning power of NFTs.')}</MessageText>
        </Message>
      </StyledModalBody>
    </StyledModalContainer>
  )
}
