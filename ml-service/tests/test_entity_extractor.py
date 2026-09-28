from app.nlp.price_parser import extract_price_filter
from app.nlp.entity_extractor import extract_features, extract_category


def test_price_below():
    pf = extract_price_filter("I need a laptop below 500")
    assert pf.operator == "lt"
    assert pf.value == 500


def test_price_between():
    pf = extract_price_filter("show me phones between 200 and 500")
    assert pf.operator == "between"
    assert pf.min == 200
    assert pf.max == 500


def test_feature_extraction():
    features = extract_features("I want good battery life and a great camera")
    assert "battery life" in features
    assert "camera" in features


def test_category_extraction():
    assert extract_category("show me some laptops") == "laptop"
