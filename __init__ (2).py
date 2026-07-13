from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict, Any, Optional
import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))

from execution.sympy_executor import SympyExecutor
from execution.scipy_executor import ScipyExecutor

router = APIRouter(prefix="/api/simulate", tags=["simulate"])

class SimulateRequest(BaseModel):
    model: str
    parameters: Dict[str, Any]
    domain: Optional[Dict[str, Any]] = None

class SimulateResponse(BaseModel):
    result: Dict[str, Any]
    model: str
    status: str = "success"

@router.post("/", response_model=SimulateResponse)
async def simulate(request: SimulateRequest):
    try:
        if "sympy" in request.model.lower() or "symbolic" in request.model.lower():
            result = SympyExecutor.execute(request.model, request.parameters, request.domain)
        else:
            result = ScipyExecutor.execute(request.model, request.parameters, request.domain)
        return SimulateResponse(
            result=result,
            model=request.model,
            status="success"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
