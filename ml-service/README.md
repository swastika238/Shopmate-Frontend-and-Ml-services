# ShopMate ML Service

FastAPI microservice that handles NLP for the chatbot: intent classification
and entity extraction (price ranges, product categories, features).

## Setup

```bash
cd ml-service
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
python -m spacy download en_core_web_sm
```

## Run

```bash
uvicorn main:app --reload --port 8000
```

Visit http://localhost:8000/docs for the interactive Swagger UI.

## Test

```bash
pytest
```

## Endpoint

`POST /nlp/parse`

```json
{ "query": "I need a phone under 500 with good battery life" }
```

Response:

```json
{
  "intent": "search_product",
  "price_filter": { "operator": "lt", "value": 500 },
  "features": ["battery life"],
  "category": "phone"
}
```

This is called internally by the Java `chatbot-service` — not directly by the React frontend.

## Next steps
- Replace the rule-based `intent_classifier.py` with a trained model once `data/intents.json` has more examples (see `notebooks/train_intent_classifier.ipynb`)
- Add `recommendation/recommender.py` logic once you have user interaction data
- Add fuzzy/semantic feature matching (e.g. embeddings) for queries like "good battery life"
