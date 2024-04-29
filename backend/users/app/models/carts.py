from sqlalchemy import Integer, Uuid
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column


class Base(DeclarativeBase): ...


class Cart(Base):
    __tablename__ = "carts"

    user_id: Mapped[str] = mapped_column(
        Uuid(as_uuid=False), nullable=False, primary_key=True
    )
    product_id: Mapped[str] = mapped_column(
        Uuid(as_uuid=False), nullable=False, primary_key=True
    )
    quantity: Mapped[int] = mapped_column(Integer(), nullable=True)

    def to_dict(self):
        return {field.name: getattr(self, field.name) for field in self.__table__.c}
