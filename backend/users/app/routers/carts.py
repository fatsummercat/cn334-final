from typing import Annotated
from uuid import UUID

from app.crud import create_new_cart_item, delete_cart, get_carts, modify_cart_quantity
from app.models.user import User
from app.services.auth import get_current_user
from fastapi import APIRouter, Depends, Form
from sqlalchemy.exc import IntegrityError

router = APIRouter()


@router.get("/carts")
async def get_all_cart_items(
    current_user: User = Depends(get_current_user),
):
    cart_items = await get_carts(current_user.id)

    return {"carts": list(cart_items)}


@router.post("/carts")
async def add_cart_item(
    product_id: Annotated[UUID, Form()],
    quantity: Annotated[int, Form()],
    current_user: User = Depends(get_current_user),
):
    try:
        cart_item = await create_new_cart_item(current_user.id, product_id, quantity)
    except IntegrityError:
        return {"error": "Aleady added this product to cart."}

    return cart_item


@router.patch("/carts/{product_id}")
async def edit_quantity(
    product_id: UUID,
    quantity: int,
    current_user: User = Depends(get_current_user),
):
    cart_items = await modify_cart_quantity(current_user.id, product_id, quantity)

    return {"carts": list(cart_items)}


@router.delete("/carts")
async def delete_cart_item(
    product_id: Annotated[UUID, Form()],
    current_user: User = Depends(get_current_user),
):
    try:
        cart_items = await delete_cart(current_user.id, product_id)
    except IntegrityError:
        return {"error": "Aleady deleted this product from cart."}

    return {"carts": list(cart_items)}
