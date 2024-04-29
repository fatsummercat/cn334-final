import uuid
from datetime import datetime
from typing import List

from pydantic import BaseModel
from sqlalchemy import DateTime, Enum, String, Uuid, func
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column


class Base(DeclarativeBase):
    created: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now()
    )
    updated: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )


class Role(Enum):
    ADMIN = "ADMIN"
    USER = "USER"


class User(Base):
    __tablename__ = "users"

    id: Mapped[str] = mapped_column(
        Uuid(as_uuid=False), primary_key=True, default=lambda _: str(uuid.uuid4())
    )
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    email: Mapped[str] = mapped_column(
        String(400), nullable=False, unique=True, index=True
    )
    password: Mapped[str] = mapped_column(String(128), nullable=False)
    role: Mapped[Role] = mapped_column(
        Enum("ADMIN", "USER", name="role"), nullable=False
    )


class UserResponse(BaseModel):
    id: uuid.UUID
    name: str
    email: str
    role: str
    created: datetime
    updated: datetime


class UsersResponse(BaseModel):
    users: List[UserResponse]
    total: int
