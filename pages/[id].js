import { useRouter } from "next/router";
import DetailPage from "./detail";
import NotFound from "./not-found";
import { useAppContext } from '../context/context';


const DynamicContent = () => {

  const { data } = useAppContext();

  const router = useRouter();
  const { id } = router.query;
  const item = data.find(item => item.id === id);

  if(!id || !item) {
    return <NotFound/>
  }

  return <DetailPage data={item} />;
}

export default DynamicContent;