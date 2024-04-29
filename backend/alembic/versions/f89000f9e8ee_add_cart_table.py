"""add cart table

Revision ID: f89000f9e8ee
Revises: b776bca0b7bc
Create Date: 2024-04-29 05:11:04.190366

"""

from typing import Sequence, Union

import sqlalchemy as sa

from alembic import op

# revision identifiers, used by Alembic.
revision: str = "f89000f9e8ee"
down_revision: Union[str, None] = "b776bca0b7bc"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "carts",
        sa.Column("user_id", sa.Uuid(as_uuid=False)),
        sa.Column("product_id", sa.Uuid(as_uuid=False)),
        sa.Column("quantity", sa.Integer()),
        sa.PrimaryKeyConstraint("product_id", "user_id"),
        sa.ForeignKeyConstraint(("product_id",), ["products.id"]),
        sa.ForeignKeyConstraint(("user_id",), ["users.id"]),
        sa.UniqueConstraint("product_id", "user_id"),
    )


def downgrade() -> None:
    pass
