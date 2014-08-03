import requests

uids = []

if __name__ == '__main__':
    for uid in uids:
        url = 'http://182.92.186.215:5000/rest/parkings'
        data = {'name': 'test', 'info': 'test', 'hour': 20.0, 'day': 80.0,
                'uid': uid, 'total_pak':200}
        print uid
        print data
        print requests.post(url, data=data)
