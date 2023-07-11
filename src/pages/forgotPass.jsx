import * as React from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ReactComponent as LogoMonsWhite } from "../images/Logo/WhiteLogo.svg";
import { ReactComponent as IconExit } from "../images/Icon_alert.svg";
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { ReactComponent as LogoMonsLogingform } from '../images/Logo/Logo_mons--blue.svg'
//--------------------------------------------------
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';

import { styled, alpha } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
//--------------------------------------------------------
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#FFFFFF'),
  backgroundColor: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#003668',
    color: '#FFFFFF'
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    // padding: '25px',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '125px',
      height: '35px',
      paddingBottom: '3px',
      fontSize: '18px',
      border: '2px solid  #003668 ',
      borderRadius: '10px',
      '&:focus': {
        width: '300px',
      },
    },
  },
}));



//-------------------------------------------------------------------
function ForgotPassPage() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      {/* ---------------------------------------headerStart--------------------------------- */}
      <Stack className='header'
        direction="row"
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: " #003668 ",
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box style={{ width: "100px", marginLeft: "50px" }}>
          <LogoMonsWhite />
        </Box>
        <Box style={{ width: "150px" }}>
          <Typography
            variant="h1"
            style={{ fontSize: 40, color: "#FFFFFF", fontWeight: "bold" }}
          >
            Скрипты
          </Typography>
        </Box>
        <Grid style={{ marginRight: "50px" }}>
          <Button
            style={{
              fontSize: 18,
              border: "none",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
            variant="contained"
            endIcon={<IconExit style={{ color: "white" }} />}
          >
            выйти
          </Button>
        </Grid>
      </Stack>
      {/* ---------------------------headerEnd------------------------------------------- */}


      {/* --------------------------------------TESTelementStart------------------------------------- */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ borderRadius: '10px', border: 'none' }}>
          <div style={{ width: "125px", margin: 'auto', marginBottom: '25px' }}>
            <LogoMonsLogingform />
          </div>

          <div className="notif_wrapper" style={{ margin: 'auto', width: '150px' }}>
            <FormControlLabel control={<Switch defaultChecked />} label={<Typography id="modal-modal-title" variant="h6" component="h1" textAlign='center'>
              отправить
            </Typography>} />
          </div>
          <div style={{ margin: 'auto', width: '200px', marginTop: '25px' }}>
            <ColorButton fullWidth variant="contained">нажми меня</ColorButton>
          </div>
        </Box>
      </Modal>

      {/* --------------------------------------TESTelementEnd------------------------------------- */}


      {/* ---------------------------todoListStart--------------------------------------- */}
      <Box className='main__wrapper' direction='column'>
        <Box className='search__wrapper' display='flex' justifyContent='center' style={{ width: '100%', marginTop: '25px' }}  >
          <Search >
            <SearchIconWrapper>
              <SearchIcon style={{ width: '30px', height: '30px' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Найти ..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
        {/* --------------------------sortingBtnStart---------------------------------------- */}
        <Box className="todoList__wrapper" display="flex" direction="row">
          <Stack className='left-side'
            direction="column"
            style={{
              width: "300px",
              height: "300px",
              paddingTop: "50px",
              paddingBottom: "100px",
              paddingRight: "25px",
              paddingLeft: "25px",
            }}
            justifyContent="start"
            alignItems="center"
          >
            <Button
              style={{
                width: "200px",
                height: "50px",
                marginBottom: '30px',
                fontSize: "18px",
                padding: "10px",
                border: "5px solid #D7DCE1",
                borderRadius: "10px",
                color: "black",
                letterSpacing: "1px",
                boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
              }}
              variant="outlined"
            >
              все
            </Button>
            <Button
              style={{
                width: "200px",
                height: "50px",
                marginBottom: '30px',
                fontSize: "18px",
                padding: "10px",
                border: "5px solid #003668",
                borderRadius: "10px",
                color: "black",
                letterSpacing: "1px",
                boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
              }}
              variant="outlined"
            >
              выполненные
            </Button>
            <Button
              style={{
                width: "200px",
                height: "50px",
                marginBottom: '30px',
                fontSize: "18px",
                padding: "10px",
                border: "5px solid #8A1833",
                borderRadius: "10px",
                color: "black",
                letterSpacing: "1px",
                boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
              }}
              variant="outlined"
            >
              ошибки
            </Button>
          </Stack>
          {/*------------------------------------------- sortingBtnEnd------------------------------------------- */}

          {/* ---------------------------------------todoListItemStart------------------------------------------- */}
          <Grid container className='right-side' style={{ width: '100%' }}>


            <List className='todoList right-side'
              style={{
                paddingTop: "50px",
                paddingBottom: "100px",
                paddingRight: "25px",
                paddingLeft: "12px",

              }}>
              <ListItem style={{
                paddingTop: "15px",
                paddingBottom: '25px',
                paddingLeft: '6px',
                paddingRight: '6px',
                marginBottom: '15px',
                boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
                borderLeft: "7px solid #8A1833",
                borderRight: "7px solid #8A1833",
                borderRadius: '10px',
              }}>
                <IconButton onClick={handleOpen}
                  edge="end" aria-label="delete" style={{ width: '25px', marginRight: '15px', marginLeft: '15px' }}>
                  <CommentOutlinedIcon />
                </IconButton>

                <ListItemAvatar>
                  <Avatar>
                    <Typography>ID</Typography>
                  </Avatar>
                </ListItemAvatar>

                <ListItemText style={{}}
                  primary="SCRIPT NAME"
                  secondary="10 jul 2023"
                // secondary={secondary ? 'Secondary text' : null}
                />

                {/* <IconButton edge="end" aria-label="delete" style={{ marginRight: '6px', marginLeft: '12px' }}>
                <DriveFileRenameOutlineOutlinedIcon />
              </IconButton>

              <IconButton edge="end" aria-label="delete" style={{ marginRight: '6px', marginLeft: '6px' }}>
                <CheckBoxOutlinedIcon />
              </IconButton>

              <IconButton edge="end" aria-label="delete" style={{ marginRight: '6px', marginLeft: '6px' }}>
                <DeleteIcon />
              </IconButton> */}

              </ListItem>

              {/* ====================================================================================== */}

              <ListItem style={{
                paddingTop: "15px",
                paddingBottom: '25px',
                paddingLeft: '6px',
                paddingRight: '6px',
                marginBottom: '15px',
                boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
                borderLeft: "7px solid #003668",
                borderRight: "7px solid #003668",
                borderRadius: '10px',
              }}>

                <IconButton edge="end" aria-label="delete" style={{ width: '25px', marginRight: '15px', marginLeft: '15px' }}>
                  <CommentOutlinedIcon />
                </IconButton>

                <ListItemAvatar>
                  <Avatar>
                    <Typography>ID</Typography>
                  </Avatar>
                </ListItemAvatar>

                <ListItemText style={{}}
                  primary="SCRIPT NAME"
                  secondary="10 jul 2023"
                // secondary={secondary ? 'Secondary text' : null}
                />
                {/* 
              <IconButton edge="end" aria-label="delete" style={{ marginRight: '6px', marginLeft: '12px' }}>
                <DriveFileRenameOutlineOutlinedIcon />
              </IconButton>

              <IconButton edge="end" aria-label="delete" style={{ marginRight: '6px', marginLeft: '6px' }}>
                <CheckBoxOutlinedIcon />
              </IconButton>

              <IconButton edge="end" aria-label="delete" style={{ marginRight: '6px', marginLeft: '6px' }}>
                <DeleteIcon />
              </IconButton> */}

              </ListItem>

            </List>
          </Grid>
          {/* ---------------------------------------todoListItemEnd------------------------------------------- */}
        </Box>
      </Box>
    </div>
  );
}

export { ForgotPassPage }
