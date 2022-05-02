import styled from 'styled-components'
import { Text, Flex, Box, CloseIcon, IconButton, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { usePhishingBannerManager } from 'state/user/hooks'

const Container = styled(Flex)`
  overflow: hidden;
  height: 100%;
  padding: 12px;
  align-items: center;
  background: #ffbb00;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0px;
    background: #ff1f26;
  }
`

const InnerContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const SpeechBubble = styled.div`
  background: #ffffff;
  background-opacity: 0.5;
  border-radius: 5px;
  padding: 10px;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;


  & ${Text} {
    flex-shrink: 0;
    margin-right: 4px;
  }
`

const PhishingWarningBanner: React.FC = () => {
  const { t } = useTranslation()
  const [, hideBanner] = usePhishingBannerManager()
  const { isMobile, isMd } = useMatchBreakpoints()
  const warningText = t("please make sure you're visiting YourDomain.com - check the URL carefully.")
  const warningTextAsParts = warningText.split(/(YourDomain.com)/g)
  const warningTextComponent = (
    <>
      <Text as="span" color="#ff1c64" small bold textTransform="uppercase">
        {t('Phishing warning: ')}
      </Text>
      {warningTextAsParts.map((text, i) => (
        <Text
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          small
          as="span"
          bold={text === 'YourDomain.com'}
          color={text === 'YourDomain.com' ? '#001329' : '#032852'}
        >
          {text}
        </Text>
      ))}
    </>
  )
  return (
    <Container>
      {isMobile || isMd ? (
        <>
          <Box>{warningTextComponent}</Box>
          <IconButton onClick={hideBanner} variant="text">
            <CloseIcon color="#FFFFFF" />
          </IconButton>
        </>
      ) : (
        <>
          <InnerContainer>
            <picture>
              <source type="image/svg" srcSet="/images/decorations/phishing-warning-bunny.webp" />
              <source type="image/png" srcSet="/images/decorations/phishing-warning-bunny.png" />
              <img src="/images/decorations/phishing-warning-bunny.png" alt="phishing-warning" width="92px" />
            </picture>
            <SpeechBubble>{warningTextComponent}</SpeechBubble>
          </InnerContainer>
          <IconButton onClick={hideBanner} variant="text">
            <CloseIcon color="#ffffff" />
          </IconButton>
        </>
      )}
    </Container>
  )
}

export default PhishingWarningBanner
