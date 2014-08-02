from firebase import firebase

class AvaDao(object):
    def __init__(self):
        self.fb = firebase.FirebaseApplication \
                  ('https://parkplace.firebaseio.com', None)

    def create(self, id, nums):
        self.fb.post('/ava' + str(), data=nums)

    def update(self, id, nums):
        self.fb.patch('/ava', nums)


    def delete(self, id):
        self.fb.delete('/ava' + str(id))

    def get(self, id):
        return self.fb.get('/ava' + str(id), None)

if __name__ == '__main__':
    ava = AvaDao()
    ava.create(1, 200)