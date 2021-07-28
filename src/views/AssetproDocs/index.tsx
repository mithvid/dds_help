import ManualContent from "../../components/ManualContent";
import TitleManual from "../../components/Title/TitleManual";
import Layout from "../../layout";

const dummy = [
  {
    idContent: "101",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    kategori: "gudang",
  },
  {
    idContent: "102",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    kategori: "pembelian",
  },
  {
    idContent: "103",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    kategori: "peminjaman",
  },
  {
    idContent: "104",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    kategori: "perbaikan",
  },
];

export default () => {
  return (
    <Layout>
      <TitleManual title="Semua Kategori" />

      {dummy.map((a: any, i: number) => {
        return (
          <ManualContent title={a.title} urlTo="/assetpro/docs/gudang/1" />
        );
      })}
    </Layout>
  );
};
