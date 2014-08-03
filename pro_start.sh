rm -rf *.out
nohup python api.py pro >> api.out &
nohup python app.py pro >> app.out &
sleep 1
echo '---API---'
cat api.out
echo '---APP---'
cat app.out
