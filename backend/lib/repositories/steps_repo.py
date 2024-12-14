from lib.models.steps import Step

class StepRepository():
    def __init__(self, connection):
        self._connection = connection