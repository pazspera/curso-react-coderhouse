import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useGetProduct } from "../../hooks/useGetProduct";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const { product, loadingStatus } = useGetProduct(id);
  useDocumentTitle(product ? `${product.title} | Caladan Games` : "Caladan Games");

  return  (
    <>
      {loadingStatus ? (
        <Loader loading={loadingStatus} />
      ) : (
        <ItemDetail product={product} />
      )}
    </>
  )

}