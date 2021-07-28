import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import HeroImage from "../../components/HeroImage";
import Header from "../../components/Header";
import CardDocs from "../../components/CardDocs";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: "40px 80px",
      minHeight: "600px",
      [theme.breakpoints.up("sm")]: {
        padding: "40px 60px",
      },
      [theme.breakpoints.up("md")]: {
        padding: "50px 100px",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "60px 150px",
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
      return 8;
    }
    if (isSm) {
      return 6;
    }
    return 0;
  };

  return (
    <div>
      <Header title="DDSolution" minSearch />
      <HeroImage h2 title="Apa yang bisa kami bantu di Assetpro?" />
      <div className={classes.content}>
        <Breadcrumb titleStart="Assetpro" titleEnd="Manual" />
        <Grid
          spacing={spacing()}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <CardDocs
              link="/assetpro/docs"
              iconDoc
              title="Dokumentasi"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et porttitor laoreet eu lobortis. Mauris tincidunt ultrices blandit."
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardDocs
              link="/assetpro/faq"
              iconFaq
              title="FAQ"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et porttitor laoreet eu lobortis. Mauris tincidunt ultrices blandit."
            />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};
