from typing import List
from uuid import UUID

from app.db import get_async_session
from app.models.products import Product, ProductImage
from sqlalchemy import select


async def get_products(category: str = None) -> List[Product]:
    async with get_async_session() as session:
        if category:
            products = await session.scalars(
                select(Product).where(Product.category == category)
            )
        else:
            products = await session.scalars(select(Product))
    return products


async def get_product(product_id: UUID) -> Product:
    async with get_async_session() as session:
        product = await session.scalar(select(Product).where(Product.id == product_id))
    return product


async def get_product_images() -> ProductImage:
    async with get_async_session() as session:
        product_images = await session.scalars(select(ProductImage))

    return product_images


async def get_product_images_with_id(product_id: UUID) -> ProductImage:
    async with get_async_session() as session:
        product_images = await session.scalars(
            select(ProductImage).where(Product.id == product_id)
        )

    return product_images
