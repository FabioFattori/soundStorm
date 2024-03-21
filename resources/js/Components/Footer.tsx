import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import useProps from '../Hooks/useProps';
import { router } from '@inertiajs/react';

function Footer() {

  //get user data if logged in 
  const user = useProps("user") as { id: Int32List ,name: string , email: string }  ?? null;
  const Admin = useProps("admin") as { id: Int32List ,name: string , email: string }  ?? null;


  const goToPage = (page: string) => {
    router.get(page)
  }

  const buttons = [
    {
      label: "Home",
      icon: <HomeIcon />,
      onClick: () => goToPage("/")
    },
    {
      label: user == null ? "Login" : "Profilo",
      icon: <PersonIcon />,
      onClick: () => goToPage(user == null ? Admin == null ? "/logUser" : "/Profile" : "/Profile?user="+user.id)
    }
  ]

  return (
    <BottomNavigation>
      {buttons.map((button, index) => {
        return (
          <BottomNavigationAction key={index} label={button.label} icon={button.icon} onClick={button.onClick} />
        )
      })}
    </BottomNavigation>
  )
}

export default Footer