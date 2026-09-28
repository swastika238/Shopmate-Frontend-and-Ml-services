KNOWN_FEATURES = [
    "battery life", "camera", "ram", "storage", "display",
    "lightweight", "waterproof", "fast charging", "processor",
]

KNOWN_CATEGORIES = [
    "phone", "laptop", "headphones", "watch", "tablet", "camera",
]


def extract_features(query: str) -> list[str]:
    text = query.lower()
    return [f for f in KNOWN_FEATURES if f in text]


def extract_category(query: str) -> str | None:
    text = query.lower()
    for c in KNOWN_CATEGORIES:
        if c in text:
            return c
    return None
