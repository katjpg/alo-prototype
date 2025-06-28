from pydantic import BaseModel

class LigandPropRequest(BaseModel):
    smiles: str

class LigandPropResponse(BaseModel):
    smiles: str
    properties: dict
