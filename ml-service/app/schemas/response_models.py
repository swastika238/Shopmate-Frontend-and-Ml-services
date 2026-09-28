from pydantic import BaseModel


class PriceFilter(BaseModel):
    operator: str          # "lt" | "gt" | "between"
    value: float | None = None
    min: float | None = None
    max: float | None = None


class ParsedIntentResponse(BaseModel):
    intent: str
    price_filter: PriceFilter | None = None
    features: list[str] = []
    category: str | None = None
