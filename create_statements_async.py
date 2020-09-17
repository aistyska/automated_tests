import aiohttp
import asyncio
from datetime import datetime
import requests

data = [
    ["rc1", 3.00, "2020-09-01 08:05:55"],
    ["rc1", 5.00, "2020-09-02 09:11:33"],
    ["rc1", 4.00, "2020-09-03 10:12:17"],
    ["rc1", 7.00, "2020-09-15 10:10:00"]
]


async def send_request(session, statement):
    async with session.post("http://localhost:9999/statements", json={
        "statement": {
            "account_id": statement[0],
            "amount": statement[1],
            "currency": "EUR",
            "date": int(datetime.timestamp(datetime.strptime(statement[2], "%Y-%m-%d %H:%M:%S")))
        }
    }) as response:
        status = response.status
        if status != 204:
            print(f"Failed! Status code: {status} Amount: {statement[1]}, date: {statement[2]}")
        else:
            print(statement, "Inserted successfully")


async def run():
    async with aiohttp.ClientSession() as session:
        await asyncio.gather(*[send_request(session, statement) for statement in data])


def send_async():
    loop = asyncio.get_event_loop()
    loop.run_until_complete(run())
    loop.close()


def send_one():
    response = requests.post('http://localhost:9999/statements', json={
        "statement": {
            "account_id": "rc1",
            "amount": 1.00,
            "currency": "EUR",
            "date": int(datetime.timestamp(datetime.strptime("2020-09-16 10:10:00", "%Y-%m-%d %H:%M:%S")))
        }
    })
    if response.status_code != 204:
        print(f"Separately sent request failed! Status code: {response.status_code}")
        print(response.text)


send_one()
send_async()
