# usd2npr

## Commands to create installable file
**Install [electron-packager](https://github.com/electron/electron-packager)**
```
npm i -g electron-packager
```

**For MacOS, Install [electron-installer-dmg](https://github.com/electron-userland/electron-installer-dmg)**
```
-> npm i -g electron-installer-dmg
-> electron-packager . usd2npr --platform=darwin --arch=x64
-> electron-installer-dmg usd2npr-darwin-x64/usd2npr.app usd2npr_1.0.1_x64 --out=builds
```

**For Linux(Debian), Install [electron-installer-debian](https://github.com/electron-userland/electron-installer-debian)**
```
-> npm i -g electron-installer-debian
-> electron-packager . usd2npr --platform=linux --arch=x64
-> electron-installer-debian --src usd2npr-linux-x64 --dest builds/ --arch amd64
```

**For other platforms, click [here](https://github.com/electron/electron-packager#distributable-creators)**