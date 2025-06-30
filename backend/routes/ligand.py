from fastapi import APIRouter, HTTPException
from models.ligand import LigandPropRequest, LigandPropResponse
from services.properties import calc_props

router = APIRouter(tags=["Properties"])

@router.post("/properties/", response_model=LigandPropResponse)
def get_props(request: LigandPropRequest):
    try:
        props = calc_props(request.smiles)
        return LigandPropResponse(smiles=request.smiles, properties=props)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
