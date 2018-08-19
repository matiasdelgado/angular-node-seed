cd ..
rm -rf ./dist/*
npm run build
cp -R ./client/dist ./dist/client
cp -R ./server/dist ./dist/server
cp -R ./package.json ./dist
cp -R ./client/package.json ./dist/client
cp -R ./server/package.json ./dist/server
cp ./package.json ./dist

echo "Build finished"
