from typing import Any, Literal
from uuid import UUID

from app import crud
from app.db import get_session
from app.models.user import User, UserResponse, UsersResponse
from app.services.auth import get_current_user
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter()


@router.get("/users/{user_id}", response_model=UserResponse)
async def get_user_by_id(
    user_id: UUID | Literal["me"], current_user: User = Depends(get_current_user)
) -> Any:
    if user_id == "me":
        user_id = current_user.id
    else:
        if current_user.role != "ADMIN":
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN, detail="Forbidden"
            )

    user = await crud.get_user(user_id)

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )

    return user


@router.delete("/users/{user_id}", response_model=UserResponse)
async def delete_user_by_id(
    user_id: UUID | Literal["me"], current_user: User = Depends(get_current_user)
) -> Any:
    if user_id == "me" or current_user.role != "ADMIN":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Forbidden")

    user = await crud.delete_user(user_id)

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )

    return user


@router.get("/users", response_model=UsersResponse)
async def get_users(
    session: AsyncSession = Depends(get_session),
    current_user: User = Depends(get_current_user),
    limit: int = 10,
    offset: int = 0,
) -> Any:
    if current_user.role != "ADMIN":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Forbidden")

    users = await session.scalars(select(User).limit(limit).offset(offset))

    count = await session.scalar(select(func.count()).select_from(User))

    users_list = list(users)
    count = len(users_list)

    return {"users": users_list, "total": count}
