import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import useProps from '../Hooks/useProps';

function Footer() {

  //get user data if logged in 
  const user = useProps("user") as { id: Int32List ,name: string , email: string }  ?? null;


  const goToPage = (page: string) => {
      window.location.href = page
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
      onClick: () => goToPage("/admin")
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