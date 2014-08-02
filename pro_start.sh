rm -rf *.out
nohup python api.py pro >> api.out &
nohup python app.py pro >> app.out &
sleep 1
echo '-----'
cat api.out
echo '-----'
cat app.out
