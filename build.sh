
echo "正在清空原编译文件夹......."
rm -rf ./dist

echo "正在准备编译......."
yarn build

if [[ $? -eq 0 ]]; then
  echo "编译成功, 切换至编译文件夹"
  cd dist
else
  echo "编译失败, 请检查！！！"
fi
