import { useRouter } from "next/router";
import DetailPage from "./detail";
import jsonData from "../api/personal.json";


const DynamicContent = () => {
  const router = useRouter();
  const { url } = router.query;
  const data = jsonData.find(item => item.url === url);

  return <DetailPage data={data} />;
}

export default DynamicContent;