kill -9 `ps -ef | grep '/usr/local/bin/python app.py pro' | grep -v grep | awk '{print $2}'`
