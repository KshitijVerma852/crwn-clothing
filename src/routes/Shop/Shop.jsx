import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import Category from "../Category/Category";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { categoriesActionCreator } from "../../store/categories/categoriesAction";

const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			dispatch(
				categoriesActionCreator(
					await getCategoriesAndDocuments("categories")
				)
			);
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
