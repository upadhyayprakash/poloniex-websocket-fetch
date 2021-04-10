# import this package
from poloniex import Poloniex

# make an instance of poloniex.Poloniex
polo = Poloniex()

# show the ticker
# print(polo('returnTicker'))
print(polo.returnTicker())


# **** ATTEMPT-1
# * Didn't work forever. Stops aftre getting the acknowledgement
# ****
#import asyncio
#import websockets
#from websockets.client import WebSocketClientProtocol
#import logging
#
#logging.basicConfig(level=logging.INFO)
#
#async def fetch() -> None:
#    websocket_resource_url = "wss://api2.poloniex.com"
#    async with websockets.connect(websocket_resource_url) as ws:
#        await ws.send(json.dumps({"command": "subscribe", "channel": 1002}))
#        msg = await ws.recv()
#        print(msg)
#
#if __name__ == '__main__':
#  loop = asyncio.get_event_loop()
#  loop.run_until_complete(fetch())
#  loop.run_forever()
