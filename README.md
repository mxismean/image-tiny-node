# NPM 插件：图片压缩（node端压缩）

## NPM 🔗

[@mxsir/image-tiny-node](https://www.npmjs.com/package/@mxsir/image-tiny-node)

## 概述

这是一款在 node 端使用的图片压缩插件；

压缩率近似 TinyPng；

支持格式：png、jpg、gif

## 安装

```bash
yarn add @mxsir/image-tiny-node
```

## 插件导出方法

```javascript
/**
 * @description: 图像压缩
 * @param {Buffer} buffer 图片二进制数据流
 * @param {Number} quality 压缩质量，10-90，建议 80
 * @return {Promise<Buffer>} 压缩过的图片二进制数据流
 */
imageTiny(buffer, quality = 80) {}
```

## 使用方法

```javascript
const imageTiny = require('@mxsir/image-tiny-node');

// compressedFileBuffer 就是压缩过的图片文件 buffer 数据
const compressedFileBuffer = imageTiny(buffer, quality = 80)

```

