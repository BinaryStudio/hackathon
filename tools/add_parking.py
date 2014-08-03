import requests

uids = [
'd20f157dabecbb6d081cc776',
'8869bd12a276cc93dbd89151',
'00586108d8b478d846e2743a',
'42cc97bc55b4a47af82d6120',
'9f104829221c2311ddee8b02',
'8c53f1b896b19a44902ca374',
'fedd2d5f7d5f49ddacee7a79',
'dd3407a6ca2c1cf49968b456',
'bed15cce1051cf351f3894a7',
'5cf854bc46b47ef517948eb1'
]

if __name__ == '__main__':
    for uid in uids:
        url = 'http://182.92.186.215:5000/rest/parkings'
        data = {'name': 'test', 'info': 'test', 'hour': 20.0, 'day': 80.0,
                'uid': uid, 'total_pak':200}
        print uid
        print data
        print requests.post(url, data=data)
