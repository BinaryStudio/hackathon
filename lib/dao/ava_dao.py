from firebase import firebase

class AvaDao(object):
    def __init__(self):
        self.fb = firebase.FirebaseApplication \
                  ('https://parkplace.firebaseio.com', None)

    def create(self, id, nums):
        self.fb.put('/ava', str(id), nums)

    def update(self, id, nums):
        self.fb.patch('/ava', { str(id): nums })

    def delete(self, id):
        self.fb.delete('/ava', str(id))

    def get(self, id):
        return self.fb.get('/ava', str(id))

    def inc(self, id):
        cur = int(self.get(id))
        cur += 1
        self.update(id, cur)

    def dec(self, id):
        cur = int(self.get(id))
        cur -= 1
        self.update(id, cur)

if __name__ == '__main__':
    AvaDao().create(1, 200)