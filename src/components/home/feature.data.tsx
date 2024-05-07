import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Lifetime access to all Content',
    description: 'Acess your study content wherever and whenever you want ',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Value for Money Courses',
    description: 'Spend less money on your learning while attaining industry level skill set',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Live Project',
    description: 'Build real, ready-to-ship products with team members & professionals',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Dedicated Forum Support',
    description: 'Get mentored and your doubts solved on a dedicated forum for support',
    icon: <ContactSupportIcon />,
  },
]
