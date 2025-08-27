import { cn } from '@/lib/utils';
import { Product } from '@/sanity.types'
import { Heart } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button';

const AddToWishlistButton = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  return (
    <div className={cn("absolute top-2 right-2 z-10", className)}>
      <Button
        className="p-2.5 size-7 rounded-full bg-white hover:bg-shop_dark_green text-shop_dark_green hover:text-white hoverEffect"
        title="Add to Wishlist"
      >
        <Heart size={15} />
      </Button>
    </div>
  );
};

export default AddToWishlistButton