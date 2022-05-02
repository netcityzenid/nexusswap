import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  TelegramIcon,
  EarnIcon,
  MoreVerticalIcon,
  MoreHorizontalIcon,
  CommunityIcon,
  CommunityFilledIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
  menuStatus,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { whitelistedBidders } from 'config/constants/farmAuctions'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t'], languageCode?: string) => ConfigMenuItemsType[] = (t, languageCode) => [
  {
    label: t('Trade'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  
 
  
  {
    label: 'Social',
    href: 'https://t.me/global',
    target: '_blank' ,
    hideSubNav: true,
    icon: CommunityIcon,
    fillIcon: CommunityFilledIcon,
    items: [
      {
        label: 'Telegram Announcement',
        href: 'https//t.me/',
      },
      {
        label: 'Telegram Group',
        href: 'https//t.me/',
        
      },
      {
        label: 'Twitter',
        href: 'https//twitter.com/',
      },
      {
        label: 'Github',
        href: 'https://github.com/',
      },
      
    ],
  },
  {
    label: 'Docs',
    hideSubNav: true,
    icon: MoreHorizontalIcon,
    href: 'https://google.com',
    items: [
      {
        label: 'Whitepaper',
        href: 'httpsdocs', //ganti link whitepaper
      },
      {
        label: 'Audit',
        href: 'linkaudit', //ganti link audit
      },
    ],
  },
]

export default config
