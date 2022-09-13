import { withLayout } from "../../app/layouts/layout/Layout";
import { IdeasPicksProductList } from "../../app/components/IdeasPicksComponents/IdeasPicksProductList";

const IdeasPicks = (): JSX.Element => {
  return <IdeasPicksProductList />;
};
export default withLayout(IdeasPicks);
