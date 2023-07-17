import * as React from "react";

import { ReactComponent as LogoMonsWhite } from "../../images/Logo/WhiteLogo.svg";
import { ReactComponent as IconExit } from "../../images/Icon_alert.svg";
import { Box }  from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


function Header() {

	return (
		<header>
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
		</header>
	)
}

export default Header;
