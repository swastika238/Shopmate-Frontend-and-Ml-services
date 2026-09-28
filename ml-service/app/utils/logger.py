import logging

from app.core.config import settings

logging.basicConfig(level=settings.LOG_LEVEL)


def get_logger(name: str) -> logging.Logger:
    return logging.getLogger(name)
