import os
from dotenv import load_dotenv

load_dotenv()


class Settings:
    MODEL_DIR: str = os.getenv("MODEL_DIR", "models")
    LOG_LEVEL: str = os.getenv("LOG_LEVEL", "INFO")


settings = Settings()
