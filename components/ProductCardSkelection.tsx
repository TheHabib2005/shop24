import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import SpainerLoader from './SpainerLoader';

const ProductCardSkeleton = () => {
    return (

        <div className="w-full rounded overflow-hidden shadow-lg animate-pulse">
            <div className="h-[250px] rounded-sm bg-zinc-950" />
            <div className="mt-4">
                <div className="h-8 bg-zinc-950 mb-2 rounded-md" />
                <div className="h-6 bg-zinc-950  rounded-md" />
            </div>

        </div>

    );
};

export default ProductCardSkeleton;
