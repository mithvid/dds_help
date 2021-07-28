import React from "react";
import useStyles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { NavLink, NavLinkProps } from "react-router-dom";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MuiListItemIcon from "@material-ui/core/ListItemIcon";

const ListItemIcon = withStyles({
  root: {
    minWidth: 0,
    marginRight: "10px",
  },
})(MuiListItemIcon);

const AdapterLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, ref) => <NavLink innerRef={ref as any} {...props} />
);

const dummy = [
  {
    idKategori: "01",
    nama: "Gudang",
    to: "/assetpro/docs/gudang",
    icon: <DashboardRoundedIcon />,
    content: {
      idContent: "103",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit-3",
    },
  },
  {
    idKategori: "02",
    nama: "Pembelian",
    to: "/assetpro/docs/pembelian",
    icon: <DashboardRoundedIcon />,
  },
  {
    idKategori: "03",
    nama: "Peminjaman",
    to: "/assetpro/docs/peminjaman",
    icon: <DashboardRoundedIcon />,
  },
  {
    idKategori: "04",
    nama: "Perbaikan",
    to: "/assetpro/docs/perbaikan",
    icon: <DashboardRoundedIcon />,
  },
];

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Kategori
      </Typography>
      <div className={classes.underline}></div>

      <List>
        {dummy.map((a: any, i: number) => {
          return (
            <ListItem
              key={i}
              activeClassName={classes.activeListItem}
              className={classes.listItem}
              component={AdapterLink}
              to={a.to}
            >
              <ListItemIcon>{a.icon}</ListItemIcon>
              <Typography variant="h6">{a.nama}</Typography>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
