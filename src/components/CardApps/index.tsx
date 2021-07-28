import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import useStyles from "./styles";

interface Props {
  logo: string;
  title: string;
  subTitle: string;
  link: string;
}

export default ({ logo, title, subTitle, link }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={RouterLink} to={link}>
        <CardContent className={classes.cardContent}>
          <Avatar
            className={classes.avatar}
            alt="Card Assetpro"
            src={logo}
            variant="rounded"
          />
          <Typography className={classes.caption1} variant="h4" align="center">
            {title}
          </Typography>
          <Typography
            className={classes.caption2}
            variant="subtitle2"
            align="center"
          >
            {subTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
