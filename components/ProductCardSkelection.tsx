import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import SpainerLoader from './SpainerLoader';

const ProductCardSkeleton = () => {
    return (

        <div className="skeleton-container">
            <div className="skeleton-content">
                <div className="h-40 rounded-lg skeleton-element"></div>
                <div className="space-y-3 mt-3">
                    <div className="h-3 w-3/5 rounded-lg skeleton-element"></div>
                    <div className="h-3 w-4/5 rounded-lg skeleton-element"></div>
                    <div className="h-3 w-2/5 rounded-lg skeleton-element"></div>
                    <div className="flex items-center gap-5">
                        <div className="h-5 w-2/5 rounded-lg skeleton-element"></div>
                        <div className="h-5 w-2/5 rounded-lg skeleton-element"></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductCardSkeleton;
