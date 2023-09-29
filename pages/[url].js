import { useRouter } from "next/router";
import DetailPage from "./detail";
import { useAppContext } from '../context/context';


const DynamicContent = () => {

  const { data } = useAppContext();

  const router = useRouter();
  const { url } = router.query;
  const item = data.find(item => item.url === url);

  return <DetailPage data={item} />;
}

export default DynamicContent;