from pydantic import BaseModel


class ChatQueryRequest(BaseModel):
    query: str
    user_id: str | None = None
