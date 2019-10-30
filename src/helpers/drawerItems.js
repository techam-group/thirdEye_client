import React from 'react'
import { TrackChanges, FlightTakeoff, OndemandVideoOutlined, PersonalVideoOutlined, HomeOutlined, Build, HeadsetMic, DeleteSweep, Camera } from '@material-ui/icons'

export const drawerItemsOne = [
  // {
  //   name: 'My Dashboard',
  //   to: '/dashboard',
  //   icon: <HomeOutlined />
  // },
  {
    name: 'Take Off',
    to: '/dashboard/take-off',
    icon: <FlightTakeoff />
  },
  {
    name: 'Missions',
    to: '/dashboard/missions',
    icon: <TrackChanges />
  }
]

export const drawerItemsTwo = [
  {
    name: 'Photos',
    to: '/dashboard/photos',
    icon: <Camera />
  },
  {
    name: 'Videos',
    to: '/dashboard/videos',
    icon: <OndemandVideoOutlined />
  },
  {
    name: 'Trash',
    to: '/dashboard/trash',
    icon: <DeleteSweep />
  }
]

export const drawerItemsThree = [
  {
    name: 'Settings',
    to: '/dashboard/settings',
    icon: <Build />
  },
  {
    name: 'Support',
    to: '/dashboard/support',
    icon: <HeadsetMic />
  },
]