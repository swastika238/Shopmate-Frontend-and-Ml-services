"""
Placeholder for a recommendation module.
Start simple (e.g. "same category, sorted by rating") and
later swap in collaborative filtering or embeddings-based
similarity once you have user interaction data.
"""


def recommend_similar_products(product_id: str, all_products: list[dict]) -> list[dict]:
    # naive placeholder: return products from the same category
    target = next((p for p in all_products if p["id"] == product_id), None)
    if not target:
        return []
    return [
        p for p in all_products
        if p["category"] == target["category"] and p["id"] != product_id
    ][:5]
