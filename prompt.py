from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import yaml

router = APIRouter(prefix="/api/transformations", tags=["transformations"])

class TransformationResponse(BaseModel):
    id: str
    source: str
    target: str
    condition: Optional[str] = None
    type: str = "connection"

@router.get("/", response_model=List[TransformationResponse])
async def list_transformations():
    try:
        with open("data/transformations.yaml", "r") as f:
            data = yaml.safe_load(f)
        transformations = data.get("transformations", [])
        return [
            TransformationResponse(
                id=t.get("id", ""),
                source=t.get("source", ""),
                target=t.get("target", ""),
                condition=t.get("condition", None),
                type=t.get("type", "connection")
            )
            for t in transformations
        ]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{source}/{target}")
async def get_transformation(source: str, target: str):
    try:
        with open("data/transformations.yaml", "r") as f:
            data = yaml.safe_load(f)
        for t in data.get("transformations", []):
            if t.get("source") == source and t.get("target") == target:
                return t
        raise HTTPException(status_code=404, detail="Transformation not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
