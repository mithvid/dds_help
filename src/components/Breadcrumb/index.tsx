import useStyles from "./styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { Avatar, Grid, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link as RouterLink } from "react-router-dom";
import SidebarMin from "../SidebarMin";

interface Props {
  addLink1?: boolean;
  addLink2?: boolean;
  titleStart: string;
  titleLink1?: string;
  titleLink2?: string;
  link1?: any;
  link2?: any;
  titleEnd: string;
  minNavigasi?: boolean;
}

export default ({
  addLink1 = false,
  addLink2 = false,
  titleStart,
  titleLink1,
  titleLink2,
  link1,
  link2,
  titleEnd,
  minNavigasi = false,
}: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={10} sm={8}>
          <Breadcrumbs aria-label="breadcrumb" className={classes.bread}>
            <Link
              component={RouterLink}
              to="#"
              color="inherit"
              className={classes.link}
            >
              <Avatar
                variant="square"
                className={classes.avatar}
                alt="Logo Assetpro"
                src="/img/logo-assetpro.png"
              />
              {titleStart}
            </Link>
            {addLink1 && (
              <Link
                component={RouterLink}
                to={link1}
                color="inherit"
                className={classes.link}
              >
                {titleLink1}
              </Link>
            )}
            {addLink2 && (
              <Link
                component={RouterLink}
                to={link2}
                color="inherit"
                className={classes.link}
              >
                {titleLink2}
              </Link>
            )}
            <Typography color="textPrimary" className={classes.linkBread}>
              {titleEnd}
            </Typography>
          </Breadcrumbs>
        </Grid>

        <Grid item sm={4}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                input: classes.inputInput,
                root: classes.inputRoot,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Grid>

        {/* Min Navigasi */}

        {minNavigasi && <SidebarMin />}
      </Grid>
    </div>
  );
};
