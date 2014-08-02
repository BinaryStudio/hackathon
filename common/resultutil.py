def returnSucc(data):
    return "{'result': success, 'data': %s}" % (data)

def returnErr(message):
    return "{'result': error, 'message': %s}" %(message)
