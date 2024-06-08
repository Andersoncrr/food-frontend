import { useAppDispatch, useAppSelector } from "@/hooks";
import { resetProduct } from "@/store/ProductsSlice";
import { getMenuProductById } from "@/store/ProductsSlice/actions";
import { getMenuCategoriesByIdUser } from "@/store/menuCategorySlice/actions";
import { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { DetailsProduct } from "./components/DetailsProduct";
import { StyledSteps } from "./styles/createAndUpdateProductPageStyles";
import { ImagesProduct } from "./components/ImagesProduct";
import { ComplementsProduct } from "./components/ComplementsProduct";

export const CreateAndUpdateProductPage = () => {
  const dispatch = useAppDispatch();
  const { idMenuProduct } = useParams();
  const { pathname } = useLocation();
  const match = pathname.match(/\/step-(\d+)/);
  const stepNumber = match ? Number(match[1]) - 1 : 0;
  const { menuCategories } = useAppSelector((state) => state.menuCategory);

  useEffect(() => {
    if (menuCategories.length === 0) {
      dispatch(getMenuCategoriesByIdUser());
    }
  }, []);
  useEffect(() => {
    if (idMenuProduct) {
      dispatch(getMenuProductById(idMenuProduct));
    }
    return () => {
      dispatch(resetProduct());
    };
  }, []);

  return (
    <>
      <StyledSteps
        current={stepNumber}
        items={[
          {
            title: "Detalles",
          },
          {
            title: "Imagen",
          },
          {
            title: "Complementos",
          },
        ]}
      />
      <Routes>
        <Route path={"/step-1"} element={<DetailsProduct />} />
        <Route path={"/step-2"} element={<ImagesProduct />} />
        <Route path={"/step-3"} element={<ComplementsProduct />} />
        <Route
          path="/*"
          element={<Navigate to="/administrator/products/new/step-1" />}
        />
      </Routes>
    </>
  );
};
