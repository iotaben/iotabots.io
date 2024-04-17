import * as React from 'react'
import {
  BaseLayout,
  Container,
  ContentBox,
  Section,
  SectionHeader,
  //  Typography
} from '@iotabots/components'

const FAQ: React.FC = () => (
  <BaseLayout>
    <Section>
      <SectionHeader
        title='FAQ'
        subtitle='The most important questions are collected here.'
      />
      <Container>
        <ContentBox
          image='http://assets.iotabots.io/compressed/11.png'
          // eslint-disable-next-line max-len
          text='An IOTABOT is a NFT in the form of a profile picture (PFP). They were the first NFTs (ERC721 Tokens) on the public IOTA Smart Contract EVM Testnet in 2021, now they are deployed on the ShimmerEVM Mainnet.'
          headline='WHAT IS AN IOTABOT?!'
        >
          {}
        </ContentBox>
        <ContentBox
          image='http://assets.iotabots.io/compressed/987.png'
          // eslint-disable-next-line max-len
          text='There are 1337 IOTABOTS, 1001 SPACEBOTS, 3333 SOONABOTS & 999 RUNBOTS'
          headline='How many NFTs exist right now?'
        >
          {}
        </ContentBox>
        <ContentBox
          image='http://assets.iotabots.io/compressed/773.png'
          // eslint-disable-next-line max-len
          text='Follow IOTABOTS on Twitter (https://twitter.com/iotabots) or/and join the Discord (https://t.co/BLwSLmwoJt) channel to not miss anything.'
          headline='How do I know about any updates and giveaways?'
        >
          {}
        </ContentBox>
        <ContentBox
          image='http://assets.iotabots.io/compressed/845.png'
          // eslint-disable-next-line max-len
          text='Download your favourite BOT and use it as a profile picture. Your SPACEBOT and RUNBOT gives you access to a NFT game.'
          headline='What can I do with my BOTs?'
        >
          {}
        </ContentBox>
      </Container>
    </Section>
  </BaseLayout>
)

export default FAQ
