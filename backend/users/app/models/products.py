import uuid

from sqlalchemy import Float, String, Uuid
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column


class Base(DeclarativeBase): ...


class Product(Base):
    __tablename__ = "products"

    id: Mapped[str] = mapped_column(
        Uuid(as_uuid=False), primary_key=True, default=lambda _: str(uuid.uuid4())
    )
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    category: Mapped[str] = mapped_column(String(100), nullable=False)
    description: Mapped[str] = mapped_column(
        String(500),
        nullable=False,
    )
    price: Mapped[float] = mapped_column(Float(), nullable=False)
    discounted_price: Mapped[float] = mapped_column(Float(), nullable=True)

    def to_dict(self):
        return {field.name: getattr(self, field.name) for field in self.__table__.c}


class ProductImage(Base):
    __tablename__ = "products_images"

    id: Mapped[str] = mapped_column(
        Uuid(as_uuid=False), primary_key=True, default=lambda _: str(uuid.uuid4())
    )
    image: Mapped[str] = mapped_column(String(100), nullable=True)
    product_id: Mapped[str] = mapped_column(Uuid(as_uuid=False), nullable=False)

    def to_dict(self):
        return {field.name: getattr(self, field.name) for field in self.__table__.c}
