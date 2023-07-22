import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";

export const CategoriesContext = createContext({
	categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments("categories");
			setCategoriesMap(categoryMap);
		};
		getCategoriesMap().then();
	}, []);

	const value = { categoriesMap };
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
