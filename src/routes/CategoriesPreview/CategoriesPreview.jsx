import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import { getCategoryItems } from "../../store/categories/categoriesSelector";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
	const categoriesMap = useSelector(getCategoryItems);

	return (
		<>
			{Object.keys(categoriesMap).map(title => {
				const products = categoriesMap[title];
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
