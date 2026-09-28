from app.nlp.intent_classifier import classify_intent


def test_search_intent():
    assert classify_intent("I need a phone under 500") == "search_product"


def test_track_order_intent():
    assert classify_intent("where is my order") == "track_order"


def test_greeting_intent():
    assert classify_intent("hello") == "greeting"
