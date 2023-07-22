import { useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

const CategoriesPreview = () => {
	const { categoriesMap } = useContext(CategoriesContext);
	return (
		<>
			{Object.keys(categoriesMap).map(title => {
				const products = categoriesMap[title];
				console.log(products, "grgrehhr");
				return (
					<CategoryPreview
						key={title}
						title={title}
						products={products}
					/>
				);
			})}
		</>
	);
};

export default CategoriesPreview;
