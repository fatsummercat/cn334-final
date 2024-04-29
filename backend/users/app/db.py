import os
from typing import AsyncGenerator

from dotenv import load_dotenv
from sqlalchemy.engine.url import URL
from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

load_dotenv()


connect_url = URL.create(
    "postgresql+asyncpg",
    username=os.environ.get("POSTGRES_USER"),
    password=os.environ.get("POSTGRES_PASSWORD"),
    host=os.environ.get("POSTGRES_HOST"),
    port=os.environ.get("POSTGRES_PORT"),
    database=os.environ.get("POSTGRES_NAME"),
)


def new_async_engine(uri: URL) -> AsyncEngine:
    return create_async_engine(
        uri,
        pool_pre_ping=True,
        pool_size=5,
        max_overflow=10,
        pool_timeout=30.0,
        pool_recycle=600,
    )


_ASYNC_ENGINE = new_async_engine(connect_url)
_ASYNC_SESSIONMAKER = async_sessionmaker(_ASYNC_ENGINE, expire_on_commit=False)


def get_async_session() -> AsyncSession:  # pragma: no cover
    return _ASYNC_SESSIONMAKER()


async def get_session() -> AsyncGenerator[AsyncSession, None]:
    async with get_async_session() as session:
        yield session
