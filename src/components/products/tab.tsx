import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllProducts } from '@/services/product'
import { Product } from '@/types/product';
import ProductEmpty from './empty';
import ProductItem from './item';


const ProductsTab = async () => {
    const product = await getAllProducts();
    

    type Tab = {
        title: string,
        value: string,
        products: Product[]
    }

    const tabs: Tab[] = [
        {
            title: 'Sushi',
            value: 'sushi',
            products: product.filter(product => product.category === 'sushi')
        },
        {
            title: 'Temaki',
            value: 'temaki',
            products: product.filter(product => product.category === 'temaki')
        },
        {
            title: 'Combinados',
            value: 'pack',
            products: product.filter(product => product.category === 'pack')
        },
        {
            title: 'Bebidas',
            value: 'beverage',
            products: product.filter(product => product.category === 'beverage')
        }
    ]

    return (
        <Tabs defaultValue="sushi">
            <TabsList className='flex'>
                {tabs.map(item => (
                    <TabsTrigger
                        key={item.value}
                        value={item.value}
                        className='flex-1'
                    >{item.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabs.map(item => (
                <TabsContent key={item.value} className='mt-6' value={item.value}>
                    {item.products.length > 0 &&
                        <div className='grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
                            {item.products.map(product => (
                                <ProductItem key={product.id} item={product}>

                                </ProductItem>
                            ))}
                        </div>
                    }
                    {item.products.length === 0 && <ProductEmpty />}
                </TabsContent>
            ))}
        </Tabs>

    )
}

export default ProductsTab