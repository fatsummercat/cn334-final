from typing import List
from uuid import UUID

from app.db import get_async_session
from app.models.carts import Cart
from app.models.user import User
from sqlalchemy import delete, insert, select, update


async def get_user(user_id: UUID) -> User:
    async with get_async_session() as session:
        user = await session.scalar(select(User).where(user_id == User.id))

    return user


async def delete_user(user_id: UUID) -> User:
    async with get_async_session() as session:
        user = await session.scalar(delete(User).where(user_id == User.id))
        await session.commit()

    return user


async def get_users() -> List[User]:
    async with get_async_session() as session:
        user = await session.scalars(select(User))

    return user


async def get_user_by_email(email: str) -> User:
    async with get_async_session() as session:
        user = await session.scalar(select(User).where(email == User.email))

    return user


async def add_new_user(user: User) -> User:
    async with get_async_session() as session:
        user = await session.scalar(
            insert(User)
            .values(
                name=user.name, email=user.email, password=user.password, role=user.role
            )
            .returning(User)
        )
        await session.commit()

    return user


async def get_carts(user_id: UUID) -> List[Cart]:
    async with get_async_session() as session:
        cart_items = await session.scalars(select(Cart).where(Cart.user_id == user_id))

    return cart_items


async def create_new_cart_item(
    user_id: UUID, product_id: UUID, quantity: int
) -> List[Cart]:
    async with get_async_session() as session:
        cart = await session.scalar(
            insert(Cart)
            .values(user_id=user_id, product_id=product_id, quantity=quantity)
            .returning(Cart)
        )
        await session.commit()

    return cart


async def modify_cart_quantity(
    user_id: UUID, product_id: UUID, quantity: int
) -> List[Cart]:
    async with get_async_session() as session:
        cart = await session.scalar(
            update(Cart)
            .where(Cart.user_id == user_id)
            .where(Cart.product_id == product_id)
            .values(quantity=quantity)
            .returning(Cart)
        )
        await session.commit()

    return cart


async def delete_cart(user_id: UUID, product_id: UUID) -> List[Cart]:
    async with get_async_session() as session:
        cart = await session.scalar(
            delete(Cart)
            .where(Cart.user_id == user_id)
            .where(Cart.product_id == product_id)
            .returning(Cart)
        )
        await session.commit()

    return cart
