import pytest #to allow @pytest.mark.asyncho decorator
from lib.routes.users_routes import user_routes
from flask import Flask



@pytest.fixture
def app():
    pass