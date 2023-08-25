import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import Category from "../Category/Category";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { setCategoriesMap } from "../../store/categories/categoriesAction";

const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			const getCategoriesMap = async () => {
				return await getCategoriesAndDocuments("categories");
			};
			dispatch(setCategoriesMap(await getCategoriesMap()));
		})();
	}, [dispatch]);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	);
};

export default Shop;
