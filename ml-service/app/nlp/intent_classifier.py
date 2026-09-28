"""
Simple rule-based intent classifier to start with.
Swap this out later for a fine-tuned model (e.g. DistilBERT)
once you have labeled training data in data/intents.json.
"""

SEARCH_KEYWORDS = ["need", "looking for", "want", "find", "show me", "search"]
ORDER_KEYWORDS = ["order status", "track my order", "where is my order", "track order"]
FAQ_KEYWORDS = ["how do i", "what is", "refund policy", "return policy"]
GREETING_KEYWORDS = ["hi", "hello", "hey"]


def classify_intent(query: str) -> str:
    text = query.lower()

    if any(k in text for k in ORDER_KEYWORDS):
        return "track_order"
    if any(k in text for k in FAQ_KEYWORDS):
        return "faq"
    if any(k in text for k in GREETING_KEYWORDS):
        return "greeting"
    if any(k in text for k in SEARCH_KEYWORDS):
        return "search_product"

    # default fallback
    return "search_product"
