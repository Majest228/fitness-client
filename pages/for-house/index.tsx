import { withLayout } from "../../app/layouts/layout/Layout";
import ForHouseProductList from "../../app/components/ForHouseProduct/ForHouseProductList";

const ForHouse = (): JSX.Element => {
  return <ForHouseProductList />;
};

export default withLayout(ForHouse);
