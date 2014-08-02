rm -rf *.out
nohup python api.py dev >> api.out &
nohup python app.py dev >> app.out &
sleep 1
echo '-----'
cat api.out
echo '-----'
cat app.out

