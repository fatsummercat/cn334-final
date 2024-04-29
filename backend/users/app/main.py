from app.routers import auth, carts, users
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware

app = FastAPI(
    title="user api",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8000", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=["*"],
)

app.include_router(users.router, tags=["users"])
app.include_router(auth.router, tags=["auth"])
app.include_router(carts.router, tags=["carts"])


@app.get("/")
async def root():
    return {"message": "API is working."}
