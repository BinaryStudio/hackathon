rm -rf *.out
nohup python api.py dev >> api.out &
nohup python app.py dev >> app.out &
sleep 1
echo '---API---'
cat api.out
echo '---APP---'
cat app.out

