from fastapi import APIRouter

from app.schemas.request_models import ChatQueryRequest
from app.schemas.response_models import ParsedIntentResponse
from app.nlp.preprocessing import clean_text
from app.nlp.intent_classifier import classify_intent
from app.nlp.price_parser import extract_price_filter
from app.nlp.entity_extractor import extract_features, extract_category
from app.utils.logger import get_logger

router = APIRouter()
logger = get_logger(__name__)


@router.post("/parse", response_model=ParsedIntentResponse)
def parse_query(request: ChatQueryRequest):
    """
    Called by the Java chatbot-service.
    Takes a raw user message and returns intent + extracted entities.
    """
    text = clean_text(request.query)
    logger.info(f"Parsing query: {text}")

    intent = classify_intent(text)
    price_filter = extract_price_filter(text)
    features = extract_features(text)
    category = extract_category(text)

    return ParsedIntentResponse(
        intent=intent,
        price_filter=price_filter,
        features=features,
        category=category,
    )
