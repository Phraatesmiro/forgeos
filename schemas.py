from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import os
import openai
from dotenv import load_dotenv

load_dotenv()

router = APIRouter(prefix="/api/prompt", tags=["prompt"])

class PromptRequest(BaseModel):
    query: str
    context: Optional[dict] = None

class PromptResponse(BaseModel):
    answer: str
    models: List[str] = []
    transformations: List[str] = []

@router.post("/", response_model=PromptResponse)
async def handle_prompt(request: PromptRequest):
    try:
        openai.api_key = os.getenv("OPENAI_API_KEY")
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are ForgeOS, a scientific model platform. Help users explore models from physics, biology, economics, AI, and more. Explain connections clearly."},
                {"role": "user", "content": request.query}
            ],
            temperature=0.7,
            max_tokens=500
        )
        return PromptResponse(
            answer=response.choices[0].message.content,
            models=[],
            transformations=[]
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
