from lib.models.sightings import Sighting

class SightingRepository():
    def __init__(self, connection):
        self._connection = connection

    # get all sightings
    async def get_all_sightings(self):
        rows = await self._connection.execute('SELECT * FROM bird_sightings ORDER BY id')
        sightings = []
        for row in rows:
            sighting = Sighting(row["id"], row["bird_name"], row["date_spotted"], row["location"], row["user_id"])
            sightings.append(sighting)
        return sightings

    # get single sighting by id


    # get all sightings by location


    # get all sightings by date_spotted


    # get all sightings by bird_name


    # get all sightings by user_id


    # create bird_sighting


    # update location


    # delete bird sighting