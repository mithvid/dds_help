import Header from "../../components/Header";
import HeroImage from "../../components/HeroImage";
import TitleHome from "../../components/Title/TitleHome";
import CardApps from "../../components/CardApps";
import Footer from "../../components/Footer";
import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: "50px 80px",
      [theme.breakpoints.up("sm")]: {
        padding: "50px 60px",
      },
      [theme.breakpoints.up("md")]: {
        padding: "70px 100px",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "80px 150px",
      },
    },
  })
);

export default () => {
  const classes = useStyles();

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  const spacing = () => {
    if (isLg) {
      return 10;
    }
    if (isMd) {
      return 6;
    }
    if (isSm) {
      return 4;
    }
    return 0;
  };

  return (
    <div>
      <Header title="DDSolution" />
      <HeroImage h2 title="Bagaimana kami dapat membantu Anda?" search />
      <div className={classes.content}>
        <TitleHome title="Aplikasi Kami" />
        <Grid
          spacing={spacing()}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={4}>
            <CardApps
              link="/assetpro"
              logo="/img/logo-assetpro.png"
              title="Assetpro"
              subTitle="Manual"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardApps
              link="#"
              logo="/img/logo-erecruitment.png"
              title="E-Recruitment"
              subTitle="Manual"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardApps link="#" logo="" title="E-Absensi" subTitle="Manual" />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};
