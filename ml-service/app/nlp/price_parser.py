import re
from app.schemas.response_models import PriceFilter


def extract_price_filter(query: str) -> PriceFilter | None:
    """
    Extracts a price constraint from natural language.
    Handles: "below 500", "under 20000", "less than 1000",
             "above 300", "over 5000", "between 200 and 500"
    """
    text = query.lower()

    match = re.search(r'(below|under|less than)\s+[₹$]?(\d+)', text)
    if match:
        return PriceFilter(operator="lt", value=float(match.group(2)))

    match = re.search(r'(above|over|more than)\s+[₹$]?(\d+)', text)
    if match:
        return PriceFilter(operator="gt", value=float(match.group(2)))

    match = re.search(r'between\s+[₹$]?(\d+)\s+and\s+[₹$]?(\d+)', text)
    if match:
        return PriceFilter(
            operator="between",
            min=float(match.group(1)),
            max=float(match.group(2)),
        )

    return None
