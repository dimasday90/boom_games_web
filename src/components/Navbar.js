import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Menu,
  MenuItem,
  Tooltip,
  FormControlLabel,
  Switch
} from "@material-ui/core";
import {
  Search as SearchIcon,
  AccountCircle,
  MoreVert as MoreIcon,
  Games as GamesIcon,
  Favorite as FavoriteIcon
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import searchAction from "../store/actionCreators/searchAction";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const theme = useContext(ThemeContext);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const changeSearchField = event => {
    dispatch(searchAction(event.target.value));
  };

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link className="link-navbar" to="/">
        <MenuItem>
          <IconButton
            aria-label="game list"
            aria-controls="primary-games-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <GamesIcon />
          </IconButton>
          <p>Games</p>
        </MenuItem>
      </Link>
      <Link className="link-navbar" to="/favorites">
        <MenuItem>
          <IconButton
            aria-label="favorite list"
            aria-controls="primary-favorite-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <FavoriteIcon />
          </IconButton>
          <p>Favorite</p>
        </MenuItem>
      </Link>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={
          theme.phantom
            ? { backgroundColor: "red" }
            : {
                /* backgroundColor back to default, so let this be empty object */
              }
        }
      >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            BoomGames React
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Games"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={changeSearchField}
            />
          </div>
          <div className={classes.grow} />
          <FormControlLabel
            control={
              <Switch
                onClick={theme.toggle}
                value={theme.phantom}
                color="default"
              />
            }
            label="Phantom Mode"
            labelPlacement="start"
          />
          <div className={classes.sectionDesktop}>
            <Tooltip title="Games">
              <Link className="link-navbar" to="/">
                <IconButton
                  edge="end"
                  aria-label="games page"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <GamesIcon />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Favorites">
              <Link className="link-navbar" to="/favorites">
                <IconButton
                  edge="end"
                  aria-label="games page"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <FavoriteIcon />
                </IconButton>
              </Link>
            </Tooltip>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
