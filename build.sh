yarn build
rm -rf ./build
rm ./build.tar.gz


mkdir -p ./build
cp -rf ./.nuxt ./build
cp -rf ./static ./build
cp -rf ./assets ./build
cp ./package.json ./build
cp ./nuxt.config.js ./build


tar -czvf ./build.tar.gz ./build
scp ./build.tar.gz root@47.98.143.247:/root/blog-fe


rm -rf ./build
rm ./build.tar.gz

tar -C . -xzvf build.tar.gz
