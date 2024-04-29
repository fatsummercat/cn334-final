"""add products table

Revision ID: b776bca0b7bc
Revises: 602fd166ccc8
Create Date: 2024-04-29 03:45:30.122395

"""

from typing import Sequence, Union

import sqlalchemy as sa

from alembic import op

# revision identifiers, used by Alembic.
revision: str = "b776bca0b7bc"
down_revision: Union[str, None] = "602fd166ccc8"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "products",
        sa.Column("id", sa.Uuid(as_uuid=False), nullable=False),
        sa.Column("name", sa.String(100)),
        sa.Column("category", sa.String(100)),
        sa.Column("description", sa.String(1000)),
        sa.Column("price", sa.Float()),
        sa.Column("discounted_price", sa.Float()),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_table(
        "products_images",
        sa.Column("id", sa.Uuid(as_uuid=False), nullable=False),
        sa.Column("image", sa.String(100)),
        sa.Column("product_id", sa.Uuid(as_uuid=False)),
        sa.PrimaryKeyConstraint("id"),
        sa.ForeignKeyConstraint(("product_id",), ["products.id"]),
    )


def downgrade() -> None:
    pass
