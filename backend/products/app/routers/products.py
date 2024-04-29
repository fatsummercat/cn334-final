import os
from functools import lru_cache
from uuid import UUID

import requests
from app.crud import (
    get_product,
    get_product_images,
    get_product_images_with_id,
    get_products,
)
from dotenv import load_dotenv
from fastapi import APIRouter

router = APIRouter()

load_dotenv()


@router.get("/products")
async def get_all_products(category: str = None):
    products = await get_products(category)
    product_images = await get_product_images()

    products = list(products)
    product_images = list(product_images)
    product_images = list(map(lambda x: x.to_dict(), product_images))

    result_dict = {"products": []}

    for prod in products:
        initial_dict = prod.to_dict()
        initial_dict["images"] = [
            x["image"] for x in product_images if x["product_id"] == initial_dict["id"]
        ]
        initial_dict["tags"] = get_tags(prod.name)
        result_dict["products"].append(initial_dict)

    return result_dict


@router.get("/products/{product_id}")
async def get_product_with_id(product_id: UUID):
    product = await get_product(product_id)
    product_images = await get_product_images_with_id(product_id)

    product = product.to_dict()

    product_images = list(product_images)
    product_images = list(map(lambda x: x.to_dict(), product_images))

    product["images"] = [
        x["image"] for x in product_images if x["product_id"] == product["id"]
    ]

    return product


@lru_cache
def get_tags(text):
    url = "https://api.aiforthai.in.th/tagsuggestion"

    params = {"text": text, "numtag": "5"}

    headers = {
        "Apikey": os.environ.get("AI_FOR_THAI_KEY"),
    }

    response = requests.get(url, headers=headers, params=params)

    return [x["tag"] for x in response.json()["tags"]]
