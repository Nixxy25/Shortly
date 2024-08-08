import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { CustomButton } from '../Buttons/buttons';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function MobileNavbar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

    <Box
      sx={{ width: 'auto',  }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
    </Box>


  return (
    <div>
      <Button onClick={toggleDrawer(!open)}>
        {
          open ?
          <CloseIcon sx={{ fontSize: 40, color: 'gray' }} />
          :
          <MenuIcon sx={{ fontSize: 40, color: 'gray' }} />
        }
      
      </Button>
      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
            style: {
              margin: '24px',
              position: 'absolute',
              top: '64px', 
              boxSizing: 'border-box',
              backgroundColor: 'hsl(257, 27%, 26%)',
              borderRadius: '10px',
              
            },
          }}
      >
        <div className='bg-Dark-Violet py-6 m-6 rounded-md flex flex-col gap-8'>
            <div className='flex flex-col text-white border-b border-ash justify-center items-center gap-6 text-lg font-[700] mx-6 pb-8'>
                <a href=''>Features</a>
                <a href=''>Pricing</a>
                <a href=''>Resources</a>
            </div>

            <div className='flex flex-col gap-6 mx-6'>
                <CustomButton variant='secondary'><p className='bg-Dark-Violet text-white'>Login</p></CustomButton>
                <CustomButton variant='primary'><p className='py-2'>Sign Up</p></CustomButton>
            </div>
        </div>
      </Drawer>
    </div>
  );
}
