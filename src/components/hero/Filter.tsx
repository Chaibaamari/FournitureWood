import { productCategories } from "@/assets/constant";


type Props = {
    className?: string;
    activeFilter?: {
        id: number;
        type: string;
        title: string;
        description: string;
        image: string;
    };
    handleFilterClick: (id: number) => void;
};
const Filter: React.FC<Props> = (props) => {
    const { className, handleFilterClick , activeFilter } = props;
    return (
        <div className="flex flex-wrap gap-3 px-5 justify-center mb-3">
            {productCategories.map((category) => {
                return (
                    <div
                        key={category.id}
                        className={`${className} ${category.id === activeFilter?.id ? "border-black text-black" : "border-stone-400 text-stone-400"}`}
                        onClick={() => handleFilterClick(category.id)}
                    >
                        {category.type}
                    </div>
                );
            })}
        </div>
    );
}

export default Filter
